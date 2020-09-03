import Matter from 'matter-js';
import CreateBullet from './CreateBullet';
import * as hp from '../Utils/Helper';
import addPowerUp from './addPowerUp';
import powerUpsConfig from '../Worlds/powerUpsConfig';

var deltaTPlatform = 0
const PlayerPhysics = (entities, touches, time, dispatch) => {
    let player = entities.player;
    let press = touches.find(t => t.type === 'press'); // long-press, (start, end used for long presses) , move (contains a delta along with event, delta is smaller, comes with a start, move, move, move, move, end)
    let start = touches.find(t => t.type === 'start');
    let end = touches.find(t => t.type === 'end');
    let move = touches.find(t => t.type === 'move');
    const gravity = entities.physics.gravity;

    if (player.body.currentHealth > player.body.totalHealth) {
        player.body.totalHealth = player.body.currentHealth
    }
    if (player.body.currentHealth < 0) {
        for (var key in entities.ids.playerBullets) {
            const bullet = entities[key];
            bullet.body.remove = true
        }

        if (!player.hasDispatched) {
            dispatch({ type: "gameOver", earnings: player.earnings })
            player.hasDispatched = true
            player.images.pose = 1
        }
        player.images.poseName = 'Death';
        player.images.deltaTPose += time.delta
        if (player.images.deltaTPose > player.images[player.images.poseName].poseTime) {
            player.images.pose += 1;
            if (player.images.pose > player.images[player.images.poseName].numPoses) {
                player.images.pose = player.images[player.images.poseName].numPoses
            }
            player.images.deltaTPose = 0;
        }
        Matter.Body.setVelocity(player.body, { x: 0.00, y: player.body.velocity.y })
    } else {
        if (powerUpsConfig.isPowerUpSet) {
            powerUpsConfig.isPowerUpSet = false
            entities = addPowerUp(entities)
            Matter.Body.setVelocity(player.body, { x: 0.00, y: 0.00 })
            player.finishedSelectingPowerUp = true
        }

        if (press && player.body.hasJumped < player.body.maxNumJumps && press.event.pageX > player.pressBounds.bound3 && press.event.pageY > player.pressBounds.bound4) {
            Matter.Body.setVelocity(player.body, { x: player.body.velocity.x, y: -player.body.jumpSpeed })
            player.body.hasJumped += 1;
            player.body.halfWayPlatformSensor = false
        } else {

            if ((start && start.event.pageX > player.pressBounds.bound1 && start.event.pageX < player.pressBounds.bound2) || (move && move.event.pageX > player.pressBounds.bound1 && move.event.pageX < player.pressBounds.bound2)) {
                Matter.Body.setVelocity(player.body, { x: player.body.moveSpeed, y: player.body.velocity.y })
            }
            if ((end && end.event.pageX > player.pressBounds.bound1 && end.event.pageX <= player.pressBounds.bound3)) { // maybe add end.event.locationX, turn off friction nad air resistance
                Matter.Body.setVelocity(player.body, { x: 0.00, y: player.body.velocity.y })
            }

            if ((start && start.event.pageX < player.pressBounds.bound1 && start.event.pageX > 0) || (move && move.event.pageX < player.pressBounds.bound1 && move.event.pageX > 0)) {
                Matter.Body.setVelocity(player.body, { x: -player.body.moveSpeed, y: player.body.velocity.y })
            }
            if ((end && end.event.pageX < player.pressBounds.bound1)) {
                Matter.Body.setVelocity(player.body, { x: 0.00, y: player.body.velocity.y })
            }
            if (press && press.event.pageX > player.pressBounds.bound3 && press.event.pageY <= player.pressBounds.bound4 && player.body.halfWayPlatformSensor) {
                player.body.halfWayPlatformSensor = false
                player.body.halfWayPlatformHasMoved = true
                deltaTPlatform = 0
                Matter.Body.setPosition(player.body, { x: player.body.position.x, y: player.body.position.y - 3.0 })
            }
        }

        deltaTPlatform += time.delta
        tPlatform = Math.sqrt(Math.abs(2.0 * player.size[1] / (gravity.y * gravity.scale)))// Kinematic equation
        if (deltaTPlatform > tPlatform) {
            player.body.halfWayPlatformHasMoved = false
        }

        player.body.deltaTFire += time.delta
        if (player.body.shouldShoot) {
            if (player.body.deltaTFire > player.body.shootTime) {
                player.body.deltaTFire = 0;
                for (var iB = 0; iB < player.bullet.numBullets; iB++) {
                    let makeNoise = true
                    if (iB > 0) {
                        makeNoise = false
                    }
                    entities = CreateBullet(entities, player, player.bullet.bulletVelX, player.bullet.bulletVelY, player.bullet.bulletDeltaX, player.bullet.bulletDeltaY - iB * player.bullet.sizeY * 0.5, makeNoise);
                }
                if (player.bullet.spreadBullets) {
                    for (var iB = 0; iB < player.bullet.numSpreadBullets; iB++) {
                        entities = hp.spreadBullets(entities, player, 90.0 * (iB + 1) / (player.bullet.numSpreadBullets + 1))
                        entities = hp.spreadBullets(entities, player, -90.0 * (iB + 1) / (player.bullet.numSpreadBullets + 1))
                    }
                }
            }
        }

        if (entities.physics.noEnemies) {
            if (player.body.velocity.x > player.body.moveSpeed / 3) {
                if (player.images.imageName === 'player1_' || player.images.imageName === 'player2_' || player.images.imageName === 'player3_') {
                    player.body.rotationY = 0.0
                } else {
                    player.body.rotationY = 180.0
                }
            } else if (player.body.velocity.x < -player.body.moveSpeed / 3) {
                if (player.images.imageName === 'player1_' || player.images.imageName === 'player2_' || player.images.imageName === 'player3_') {
                    player.body.rotationY = 180.0
                } else {
                    player.body.rotationY = 0.0
                }
            }
        } else {
            if (player.bullet.bulletVelX >= 0) {
                if (player.images.imageName === 'player1_' || player.images.imageName === 'player2_' || player.images.imageName === 'player3_') {
                    player.body.rotationY = 0.0
                } else {
                    player.body.rotationY = 180.0
                }
            } else {
                if (player.images.imageName === 'player1_' || player.images.imageName === 'player2_' || player.images.imageName === 'player3_') {
                    player.body.rotationY = 180.0
                } else {
                    player.body.rotationY = 0.0
                }
            }
        }

        if (player.images.imageName === 'player1_' || player.images.imageName === 'player2_' || player.images.imageName === 'player3_') {
            if (Math.abs(player.body.velocity.x) > 0.1 && player.body.hasJumped === 0) {
                if (player.images.poseName !== 'Walk') {
                    player.images.pose = 1;
                }
                player.images.poseName = 'Walk';
            } else {
                if (player.images.poseName !== 'Idle') {
                    player.images.pose = 1;
                }
                player.images.poseName = 'Idle';
            }
        } else {
            player.images.poseName = 'Walk';
        }
        player.images.deltaTPose += time.delta
        if (player.images.deltaTPose > player.images[player.images.poseName].poseTime) {
            player.images.pose += 1;
            if (player.images.pose > player.images[player.images.poseName].numPoses) {
                player.images.pose = 1
            }
            player.images.deltaTPose = 0;
        }
    }
    return entities;
}

export default PlayerPhysics