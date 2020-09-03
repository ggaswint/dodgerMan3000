import Matter from "matter-js";
import Constants from './Utils/Constants';
import worldsConfig from '../Game/Worlds/worldsConfig';
import Player from '../assets/Player'; // Sound Player
import playerStats from './Worlds/playerStatsConfig'

var sound2Idx = 1;

const shouldRemoveBullet = (bodyA, bodyB) => {
    bodyA.numBounces -= 1;
    const posAY = Math.abs(bodyA.position.y - Constants.MAX_HEIGHT) // makes bottom of screen y = 0
    const posBYmax = Math.abs(bodyB.bounds.min.y - Constants.MAX_HEIGHT) // makes bottom of screen y = 0, max/min flipped
    const posBYmin = Math.abs(bodyB.bounds.max.y - Constants.MAX_HEIGHT) // makes bottom of screen y = 0, max/min flipped
    if (posAY > posBYmax || posAY < posBYmin) {
        bodyA.bulletVelY *= -1;
    } else {
        bodyA.bulletVelX *= -1;
    }
    if (bodyA.numBounces <= 0) {
        bodyA.remove = true;
    }
}

const decrementHealth = (bodyA, bodyB) => {
    if (bodyA.bodyType === 'fromVertices') {
        bodyA.parent.currentHealth -= bodyB.damage * bodyA.parent.defense;
    } else if (bodyA.bodyType === 'rectangle') {
        bodyA.currentHealth -= bodyB.damage * bodyA.defense;
    }
    if (!bodyB.piercingShot) {
        bodyB.remove = true;
    }
}

const playOwwSound = () => {
    if (playerStats.isSoundEffects) {
        Player.playSound('oww' + sound2Idx)
        sound2Idx++
        if (sound2Idx > 4) {
            sound2Idx = 1
        }
    }
}

const decrementTouchedEnemeyHealth = (bodyA, bodyB) => {
    if (bodyB.bodyType === 'fromVertices') {
        bodyA.currentHealth -= bodyB.parent.damage * bodyA.parent.defense;
    } else if (bodyB.bodyType === 'rectangle') {
        bodyA.currentHealth -= bodyB.damage * bodyA.defense;
    }
}

const shouldResetJumps = (bodyA, bodyB) => {
    const posAY = Math.abs(bodyA.position.y - Constants.MAX_HEIGHT) // makes bottom of screen y = 0
    const posBY = Math.abs(bodyB.position.y - Constants.MAX_HEIGHT) // makes bottom of screen y = 0
    if (posAY >= posBY) {
        bodyA.hasJumped = 0;
    }
}

const halfPlatformColl = (pair, bodyA, bodyB) => {
    if (bodyA.velocity.y >= 0 && !bodyA.halfWayPlatformHasMoved && bodyA.bounds.min.x > bodyB.bounds.min.x && bodyA.bounds.max.x < bodyB.bounds.max.x && bodyA.position.y < bodyB.bounds.min.y) {
        bodyA.halfWayPlatformSensor = true
        bodyA.hasJumped = 0;
    } else {
        pair.isActive = false
    }
}

const halfPlatformCollEnemy = (pair, bodyA, bodyB) => {
    if (bodyA.velocity.y >= 0 && bodyA.bounds.min.x > bodyB.bounds.min.x && bodyA.bounds.max.x < bodyB.bounds.max.x && bodyA.position.y < bodyB.bounds.min.y && bodyA.hitsPlatforms) {
        pair.isActive = true
    } else {
        pair.isActive = false
    }
}
export function setupBaseWorld(worldNum, levelNum) {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    let gravity = engine.world.gravity;
    // setup collision physics
    Matter.Events.on(engine, 'collisionStart', (event) => {
        event.pairs.forEach(pair => {
            if ((pair.bodyA.label === "wall" || pair.bodyA.label === "floor") && pair.bodyB.label === "playerBullet") {
                shouldRemoveBullet(pair.bodyB, pair.bodyA)
            } else if (pair.bodyA.label === "playerBullet" && (pair.bodyB.label === "wall" || pair.bodyB.label === "floor")) {
                shouldRemoveBullet(pair.bodyA, pair.bodyB)
            } else if ((pair.bodyA.label === "wall" || pair.bodyA.label === "floor") && pair.bodyB.label === "enemyBullet") {
                shouldRemoveBullet(pair.bodyB, pair.bodyA)
            } else if (pair.bodyA.label === "enemyBullet" && (pair.bodyB.label === "wall" || pair.bodyB.label === "floor")) {
                shouldRemoveBullet(pair.bodyA, pair.bodyB)
            } else if (pair.bodyA.label === "player" && pair.bodyB.label === "floor") {
                shouldResetJumps(pair.bodyA, pair.bodyB)
            } else if (pair.bodyA.label === "floor" && pair.bodyB.label === "player") {
                shouldResetJumps(pair.bodyB, pair.bodyA)
            } else if (pair.bodyA.label === "playerBullet" && pair.bodyB.label === "enemy") {
                decrementHealth(pair.bodyB, pair.bodyA)
            } else if (pair.bodyA.label === "enemy" && pair.bodyB.label === "playerBullet") {
                decrementHealth(pair.bodyA, pair.bodyB)
            } else if (pair.bodyA.label === "enemyBullet" && pair.bodyB.label === "player") {
                decrementHealth(pair.bodyB, pair.bodyA)
                playOwwSound()
            } else if (pair.bodyA.label === "player" && pair.bodyB.label === "enemyBullet") {
                decrementHealth(pair.bodyA, pair.bodyB)
                playOwwSound()
            } else if (pair.bodyA.label === "player" && pair.bodyB.label === "teleporter") {
                pair.bodyA.nextLevel = true;
            } else if (pair.bodyA.label === "teleporter" && pair.bodyB.label === "player") {
                pair.bodyB.nextLevel = true;
            } else if (pair.bodyA.label === "player" && pair.bodyB.label === "enemy") {
                decrementTouchedEnemeyHealth(pair.bodyA, pair.bodyB)
                playOwwSound()
            } else if (pair.bodyA.label === "enemy" && pair.bodyB.label === "player") {
                decrementTouchedEnemeyHealth(pair.bodyB, pair.bodyA)
                playOwwSound()
            } else if (pair.bodyA.label === "halfPlatform" && pair.bodyB.label === "player") {
                halfPlatformColl(pair, pair.bodyB, pair.bodyA)
            } else if (pair.bodyA.label === "player" && pair.bodyB.label === "halfPlatform") {
                halfPlatformColl(pair, pair.bodyA, pair.bodyB)
            } else if (pair.bodyA.label === "halfPlatform" && pair.bodyB.label === "enemy") {
                halfPlatformCollEnemy(pair, pair.bodyB, pair.bodyA)
            } else if (pair.bodyA.label === "enemy" && pair.bodyB.label === "halfPlatform") {
                halfPlatformCollEnemy(pair, pair.bodyA, pair.bodyB)
            }
        })
    })
    let entities = {
        ids: { enemies: {}, playerBullets: {}, enemyBullets: {} },
        staticBodies: { bodies: [] },
        screen: { height: Constants.MAX_HEIGHT, width: Constants.MAX_WIDTH },
        physics: { worldNum: worldNum, numLevels: worldsConfig['world' + worldNum].numLevels, curLevel: levelNum, noEnemies: false, gravity: gravity, engine: engine, world: world, epsilon: 0.01, playerBulletId: 0, enemyBulletId: 0 },
        camera: { offsetY: 0, offsetX: 0, maxOffsetX: Constants.MAX_WIDTH, maxOffsetY: Constants.MAX_HEIGHT },
    }

    return entities
};