import Matter from 'matter-js';
import Arrow from '../Renderers/Arrow';
import { setupNextWorld } from '../setupNextWorld';

const NextLevel = (entities, dispatch) => {
    if (entities.physics.noEnemies && !entities.player.finishedSelectingPowerUp && entities.physics.curLevel + 1 <= entities.physics.numLevels && !entities.player.hasTriggeredPowerUp) {
        if (entities.physics.curLevel + 1 <= entities.physics.numLevels) {
            dispatch({ type: "powerUp" })
        }
        for (var key in entities.ids.enemyBullets) {
            const bullet = entities[key];
            bullet.body.remove = true
        }
        for (var key in entities.ids.playerBullets) {
            const bullet = entities[key];
            bullet.body.remove = true
        }
        entities.player.hasTriggeredPowerUp = true
    }
    else if (entities.physics.noEnemies && !('teleporter' in entities) && (entities.player.finishedSelectingPowerUp || entities.physics.curLevel + 1 > entities.physics.numLevels)) {
        let world = entities.physics.world;
        let teleporterProps = entities.teleporterProps;

        let teleporter = Matter.Bodies.rectangle(teleporterProps.locationX, teleporterProps.locationY, teleporterProps.sizeX, teleporterProps.sizeY, teleporterProps.extras)
        entities.teleporter = { ...{ body: teleporter }, ...teleporterProps.entity }
        entities.teleporterArrow = {
            body: {
                position: {
                    x: teleporterProps.locationX - teleporterProps.sizeX * 2,
                    y: teleporterProps.locationY - teleporterProps.sizeY * 2,
                }
            }, color: teleporterProps.arrowColor, renderer: Arrow
        }

        Matter.World.add(world, [teleporter])
        for (var key in entities.ids.enemyBullets) {
            const bullet = entities[key];
            bullet.body.remove = true
        }
        for (var key in entities.ids.playerBullets) {
            const bullet = entities[key];
            bullet.body.remove = true
        }
        entities.player.hasTriggeredPowerUp = false
    }
    else if (entities.player.body.nextLevel) {

        const player = entities.player
        const curHealth = player.body.currentHealth + player.plusHealthLevel;
        const totalHealth = player.body.totalHealth;
        const maxNumJumps = player.body.maxNumJumps
        const moveSpeed = player.body.moveSpeed
        const shootTime = player.body.shootTime
        const defense = player.body.defense
        const earningsMultiplier = player.earningsMultiplier
        const earnings = player.earnings
        const plusHealthLevel = player.plusHealthLevel
        const plusHealthKill = player.plusHealthKill
        const sizeX = player.bullet.sizeX
        const sizeY = player.bullet.sizeY
        const size = player.bullet.size
        const piercingShot = player.bullet.extras.piercingShot
        const bulletWidth = player.bullet.extras.bulletWidth
        const numBullets = player.bullet.numBullets
        const spreadBullets = player.bullet.spreadBullets
        const numSpreadBullets = player.bullet.numSpreadBullets
        const homing = player.bullet.extras.homing
        const hasHomingTime = player.bullet.extras.hasHomingTime
        const perfectHoming = player.bullet.extras.perfectHoming
        const HomingTime = player.bullet.extras.HomingTime
        const homingDeltaAngle = player.bullet.extras.homingDeltaAngle
        const numBounces = player.bullet.extras.numBounces
        const bulletSpeed = player.bullet.extras.bulletSpeed
        const damage = player.bullet.extras.damage

        entities.player.body.nextLevel = false;
        entities = setupNextWorld(entities, dispatch)

        entities.player.body.currentHealth = curHealth
        entities.player.body.totalHealth = totalHealth
        entities.player.body.maxNumJumps = maxNumJumps
        entities.player.body.moveSpeed = moveSpeed
        entities.player.body.shootTime = shootTime
        entities.player.body.defense = defense
        entities.player.earningsMultiplier = earningsMultiplier
        entities.player.earnings = earnings
        entities.player.plusHealthLevel = plusHealthLevel
        entities.player.plusHealthKill = plusHealthKill
        entities.player.bullet.sizeX = sizeX
        entities.player.bullet.sizeY = sizeY
        entities.player.bullet.size = size
        entities.player.bullet.extras.piercingShot = piercingShot
        entities.player.bullet.extras.bulletWidth = bulletWidth
        entities.player.bullet.numBullets = numBullets
        entities.player.bullet.spreadBullets = spreadBullets
        entities.player.bullet.numSpreadBullets = numSpreadBullets
        entities.player.bullet.extras.homing = homing
        entities.player.bullet.extras.hasHomingTime = hasHomingTime
        entities.player.bullet.extras.perfectHoming = perfectHoming
        entities.player.bullet.extras.HomingTime = HomingTime
        entities.player.bullet.extras.homingDeltaAngle = homingDeltaAngle
        entities.player.bullet.extras.numBounces = numBounces
        entities.player.bullet.extras.bulletSpeed = bulletSpeed
        entities.player.bullet.extras.damage = damage

        dispatch({ type: "nextLevel" })
    }

    return entities;
}

export default NextLevel