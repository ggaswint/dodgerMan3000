import Matter from 'matter-js';
import CreateBullet from './CreateBullet';
import remove from '../Utils/ClearBody';
import * as hp from '../Utils/Helper';
import enemyMovements from './EnemyMovement';

const EnemyPhysics = (entities, time) => {
    //// Player used here to set nearest enemy
    let player = entities.player;
    var distanceToNearestEnemy = 50000.0
    player.body.shouldShoot = false;

    var noEnemies = true;
    for (var key in entities.ids.enemies) {
        const enemy = entities[key];
        if (enemy.body.remove || enemy.body.currentHealth <= 0) {
            Matter.Body.setVelocity(enemy.body, { x: 0.00, y: enemy.body.velocity.y })
            enemy.body.currentHealth = 0
            if (enemy.body.damage !== 0) {
                enemy.body.damage = 0
                enemy.images.deltaTPose = 0
                enemy.images.pose = 1
                enemy.images.poseName = 'Death';
            }

            enemy.images.deltaTPose += time.delta
            if (enemy.images.deltaTPose > enemy.images[enemy.images.poseName].poseTime) {
                enemy.images.pose += 1;
                if (enemy.images.pose > enemy.images[enemy.images.poseName].numPoses) {
                    enemy.images.pose = enemy.images[enemy.images.poseName].numPoses
                    player.earnings += enemy.worth * player.earningsMultiplier
                    player.body.currentHealth += player.plusHealthKill
                    player.body.totalHealth += player.plusHealthKill
                    remove(key, 'enemies', entities)
                }
                enemy.images.deltaTPose = 0;
            }
        } else {
            noEnemies = false;
            const distanceToEnemy = Math.sqrt(Math.pow(player.body.position.x - enemy.body.position.x, 2) + Math.pow(player.body.position.y - enemy.body.position.y, 2))
            /// find nearest enemy to player without obstruction of path, if not enemies in sight, player does not fire
            if (Matter.Query.ray(entities.staticBodies.bodies, player.body.position, enemy.body.position, [rayWidth = player.bullet.extras.bulletWidth]).length === 0) {
                if (distanceToEnemy < distanceToNearestEnemy) {
                    hp.getBulletDirectionAndSpeed(player, enemy)
                    distanceToNearestEnemy = distanceToEnemy;
                    player.bullet.extras.targetEnemy = key;
                }
                player.body.shouldShoot = true;
            }
            //// Find line of sight from enemy to player and set bullet properties
            hp.getBulletDirectionAndSpeed(enemy, player)
            //// Enemy physics
            if (enemy.bullet.bulletVelX >= 0) {
                enemy.body.rotationY = 180.0
            } else {
                enemy.body.rotationY = 0.0
            }

            enemy.body.deltaTFire += time.delta
            if (enemy.body.deltaTFire > enemy.body.shootTime) {
                enemy.body.deltaTFire = 0;
                for (var iB = 0; iB < enemy.bullet.numBullets; iB++) {
                    entities = CreateBullet(entities, enemy, enemy.bullet.bulletVelX, enemy.bullet.bulletVelY, enemy.bullet.bulletDeltaX, enemy.bullet.bulletDeltaY - iB * enemy.bullet.sizeY);
                }
                if (enemy.bullet.spreadBullets) {
                    for (var iB = 0; iB < enemy.bullet.numSpreadBullets; iB++) {
                        entities = hp.spreadBullets(entities, enemy, 90.0 * (iB + 1) / (enemy.bullet.numSpreadBullets + 1))
                        entities = hp.spreadBullets(entities, enemy, -90.0 * (iB + 1) / (enemy.bullet.numSpreadBullets + 1))
                    }
                }
            }
            enemyMovements(entities, enemy, time)
            enemy.images.deltaTPose += time.delta
            if (enemy.images.deltaTPose > enemy.images[enemy.images.poseName].poseTime) {
                enemy.images.pose += 1;
                if (enemy.images.pose > enemy.images[enemy.images.poseName].numPoses) {
                    enemy.images.pose = 1
                }
                enemy.images.deltaTPose = 0;
            }
        }
    }

    if (noEnemies) {
        for (var key in entities.ids.enemyBullets) {
            const bullet = entities[key];
            bullet.body.remove = true
        }
        for (var key in entities.ids.playerBullets) {
            const bullet = entities[key];
            bullet.body.remove = true
        }
    }

    entities.physics.noEnemies = noEnemies;
    return entities;
}

export default EnemyPhysics