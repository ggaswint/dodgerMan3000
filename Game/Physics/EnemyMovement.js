import Matter from 'matter-js';
import CreateBullet from './CreateBullet';
import remove from '../Utils/ClearBody';
import * as hp from '../Utils/Helper';

const enemyMovements = (entities, enemy, time) => {
    const gravity = entities.physics.gravity;

    if (enemy.ai === 'training') {
        enemy.images.poseName = enemy.images.initialPoseName;
        Matter.Body.setVelocity(enemy.body, { x: 0.0, y: enemy.body.velocity.y })
    }
    else if (enemy.ai === 'dumb') {
        enemy.images.poseName = enemy.images.initialPoseName;
        enemy.body.deltaTMove += time.delta
        if (enemy.body.deltaTMove > enemy.body.moveTime) {
            enemy.body.deltaTMove = 0;
            enemy.body.speedX *= -1;
        }
        Matter.Body.setVelocity(enemy.body, { x: enemy.body.speedX, y: enemy.body.velocity.y })
    }
    else if (enemy.ai === 'dumb_jump') {
        enemy.images.poseName = enemy.images.initialPoseName;
        enemy.body.deltaTMove += time.delta
        enemy.body.deltaTJump += time.delta
        if (enemy.body.deltaTMove > enemy.body.moveTime) {
            enemy.body.deltaTMove = 0;
            enemy.body.speedX *= -1;
        }
        Matter.Body.setVelocity(enemy.body, { x: enemy.body.speedX, y: enemy.body.velocity.y })
        if (enemy.body.deltaTJump > enemy.body.jumpTime) {
            enemy.body.deltaTJump = 0;
            Matter.Body.setVelocity(enemy.body, { x: enemy.body.velocity.x, y: -enemy.body.jumpSpeed })
        }
    }
    else if (enemy.ai === 'dumb_fly') {
        enemy.images.poseName = enemy.images.initialPoseName;
        enemy.body.deltaTMove += time.delta
        if (enemy.body.deltaTMove > enemy.body.moveTime) {
            enemy.body.deltaTMove = 0;
            enemy.body.speedX *= -1;
        }
        Matter.Body.setVelocity(enemy.body, { x: enemy.body.speedX, y: 0 })
        Matter.Body.applyForce(enemy.body, enemy.body.position, { x: -gravity.x * gravity.scale * enemy.body.mass, y: -gravity.y * gravity.scale * enemy.body.mass })
    }
    else if (enemy.ai === 'dumb_fly2') {
        enemy.images.poseName = enemy.images.initialPoseName;
        enemy.body.deltaTMove += time.delta
        enemy.body.deltaTJump += time.delta
        if (enemy.body.deltaTMove > enemy.body.moveTime) {
            enemy.body.deltaTMove = 0;
            enemy.body.speedX *= -1;
        }
        Matter.Body.setVelocity(enemy.body, { x: enemy.body.speedX, y: enemy.body.velocity.y })
        if (enemy.body.deltaTJump > enemy.body.jumpTime) {
            enemy.body.deltaTJump = 0;
            Matter.Body.setVelocity(enemy.body, { x: enemy.body.velocity.x, y: -enemy.body.jumpSpeed })
            enemy.body.jumpSpeed = -enemy.body.jumpSpeed
        }
        Matter.Body.applyForce(enemy.body, enemy.body.position, { x: -gravity.x * gravity.scale * enemy.body.mass, y: -gravity.y * gravity.scale * enemy.body.mass })
    }
    else if (enemy.ai === 'follow') {
        enemy.images.poseName = enemy.images.initialPoseName;
        if (enemy.body.rotationY === 180) {
            if (Math.abs(enemy.bullet.bulletVelX) >= 1.0) {
                Matter.Body.setVelocity(enemy.body, { x: -enemy.body.speedX, y: enemy.body.velocity.y })
            } else {
                Matter.Body.setVelocity(enemy.body, { x: enemy.body.velocity.x, y: enemy.body.velocity.y })
            }
        } else {
            if (Math.abs(enemy.bullet.bulletVelX) >= 1.0) {
                Matter.Body.setVelocity(enemy.body, { x: enemy.body.speedX, y: enemy.body.velocity.y })
            } else {
                Matter.Body.setVelocity(enemy.body, { x: enemy.body.velocity.x, y: enemy.body.velocity.y })
            }
        }
    }
    else if (enemy.ai === 'follow_fly') {
        enemy.images.poseName = enemy.images.initialPoseName;
        const magnitude = Math.sqrt(enemy.bullet.bulletVelX * enemy.bullet.bulletVelX + enemy.bullet.bulletVelY * enemy.bullet.bulletVelY)
        Matter.Body.setVelocity(enemy.body, { x: enemy.body.speedX * enemy.bullet.bulletVelX / magnitude, y: enemy.body.speedX * enemy.bullet.bulletVelY / magnitude })
        Matter.Body.applyForce(enemy.body, enemy.body.position, { x: -gravity.x * gravity.scale * enemy.body.mass, y: -gravity.y * gravity.scale * enemy.body.mass })
    }
    else if (enemy.ai === 'move_stop_jump') {
        enemy.images.poseName = enemy.images.initialPoseName;
        enemy.body.deltaTMove += time.delta
        enemy.body.deltaTJump += time.delta
        if (enemy.body.deltaTMove <= enemy.body.moveTime) {
            if (enemy.body.rotationY === 180) {
                if (Math.abs(enemy.bullet.bulletVelX) >= 1.0) {
                    Matter.Body.setVelocity(enemy.body, { x: -enemy.body.speedX, y: enemy.body.velocity.y })
                } else {
                    Matter.Body.setVelocity(enemy.body, { x: enemy.body.velocity.x, y: enemy.body.velocity.y })
                }
            } else {
                if (Math.abs(enemy.bullet.bulletVelX) >= 1.0) {
                    Matter.Body.setVelocity(enemy.body, { x: enemy.body.speedX, y: enemy.body.velocity.y })
                } else {
                    Matter.Body.setVelocity(enemy.body, { x: enemy.body.velocity.x, y: enemy.body.velocity.y })
                }
            }
        } else if (enemy.body.deltaTMove > enemy.body.moveTime && enemy.body.deltaTMove <= enemy.body.moveTime2) {
            Matter.Body.setVelocity(enemy.body, { x: 0, y: enemy.body.velocity.y })
        } else if (enemy.body.deltaTMove > enemy.body.moveTime2) {
            enemy.body.deltaTMove = 0
        }
        if (enemy.body.deltaTJump > enemy.body.jumpTime) {
            enemy.body.deltaTJump = 0;
            Matter.Body.setVelocity(enemy.body, { x: enemy.body.velocity.x, y: -enemy.body.jumpSpeed })
        }
    }
    else if (enemy.ai === 'move_stop') {
        enemy.images.poseName = enemy.images.initialPoseName;
        enemy.body.deltaTMove += time.delta
        if (enemy.body.deltaTMove <= enemy.body.moveTime) {
            if (enemy.body.rotationY === 180) {
                if (Math.abs(enemy.bullet.bulletVelX) >= 1.0) {
                    Matter.Body.setVelocity(enemy.body, { x: -enemy.body.speedX, y: enemy.body.velocity.y })
                } else {
                    Matter.Body.setVelocity(enemy.body, { x: enemy.body.velocity.x, y: enemy.body.velocity.y })
                }
            } else {
                if (Math.abs(enemy.bullet.bulletVelX) >= 1.0) {
                    Matter.Body.setVelocity(enemy.body, { x: enemy.body.speedX, y: enemy.body.velocity.y })
                } else {
                    Matter.Body.setVelocity(enemy.body, { x: enemy.body.velocity.x, y: enemy.body.velocity.y })
                }
            }
        } else if (enemy.body.deltaTMove > enemy.body.moveTime && enemy.body.deltaTMove <= enemy.body.moveTime2) {
            Matter.Body.setVelocity(enemy.body, { x: 0, y: enemy.body.velocity.y })
        } else if (enemy.body.deltaTMove > enemy.body.moveTime2) {
            enemy.body.deltaTMove = 0
        }
    }
}

export default enemyMovements