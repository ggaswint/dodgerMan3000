import Matter from 'matter-js';
import remove from '../Utils/ClearBody';
import * as hp from '../Utils/Helper';

///// Maintains Bullets trajectory and removes collided bullets
const BulletPhysics = (entities, time) => {
    const gravity = entities.physics.gravity;

    /////// Player Bullets
    for (var key in entities.ids.playerBullets) {
        const bullet = entities[key];
        if (bullet.body.remove || hp.isOutOfBounds(bullet, entities.bounds)) {
            remove(key, 'playerBullets', entities)
        } else {
            if (bullet.body.homing === true && (bullet.body.targetEnemy in entities)) {
                bullet.body.deltaTHomingTime += time.delta
                if (bullet.body.deltaTHomingTime > bullet.body.HomingTime || !bullet.body.hasHomingTime) {
                    bullet.body.deltaTHomingTime = 0
                    const targetEnemy = entities[bullet.body.targetEnemy]
                    if (bullet.body.perfectHoming) {
                        hp.perfectHoming(bullet, targetEnemy)
                    } else {
                        hp.smoothHoming2(bullet, targetEnemy)
                    }
                }
            }
            Matter.Body.setVelocity(bullet.body, { x: bullet.body.bulletVelX, y: bullet.body.bulletVelY })
            Matter.Body.applyForce(bullet.body, bullet.body.position, { x: -gravity.x * gravity.scale * bullet.body.mass, y: -gravity.y * gravity.scale * bullet.body.mass })
        }
    }

    /////// Enemy Bullets
    for (var key in entities.ids.enemyBullets) {
        const bullet = entities[key];
        if (bullet.body.remove || hp.isOutOfBounds(bullet, entities.bounds)) {
            remove(key, 'enemyBullets', entities)
        } else {
            if (bullet.body.homing === true) {
                bullet.body.deltaTHomingTime += time.delta
                if (bullet.body.deltaTHomingTime > bullet.body.HomingTime || !bullet.body.hasHomingTime) {
                    bullet.body.deltaTHomingTime = 0
                    if (bullet.body.perfectHoming) {
                        hp.perfectHoming(bullet, entities.player)
                    } else {
                        hp.smoothHoming2(bullet, entities.player)
                    }
                }
            }
            Matter.Body.setVelocity(bullet.body, { x: bullet.body.bulletVelX, y: bullet.body.bulletVelY })
            Matter.Body.applyForce(bullet.body, bullet.body.position, { x: -gravity.x * gravity.scale * bullet.body.mass, y: -gravity.y * gravity.scale * bullet.body.mass })

            if (bullet.body.hasLifeTime) {
                bullet.body.deltaTLifeTime += time.delta
                if (bullet.body.deltaTLifeTime > bullet.body.lifeTime) {
                    bullet.body.remove = true;
                }
            }
        }
    }

    return entities;
}

export default BulletPhysics