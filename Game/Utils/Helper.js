import CreateBullet from '../Physics/CreateBullet';

const transformAngle = (signX, signY, theta) => {
    if (signX > 0 && signY > 0) {
        theta += 0.0 * 3.141 / 180.0;
    } else if (signX > 0 && signY < 0) {
        theta = 360.0 * 3.141 / 180.0 - theta;
    } else if (signX < 0 && signY < 0) {
        theta += 180.0 * 3.141 / 180.0;
    } else if (signX < 0 && signY > 0) {
        theta = 180.0 * 3.141 / 180.0 - theta;
    }
    return theta
}

export const spreadBullets = (entities, sourceEntity, amount) => {
    let signX = sourceEntity.bullet.signX
    let signY = sourceEntity.bullet.signY
    let theta = sourceEntity.bullet.launchAngle
    theta = transformAngle(signX, signY, theta)
    theta += amount * 3.141 / 180.0
    const bulletVelX = sourceEntity.bullet.extras.bulletSpeed * Math.cos(theta)
    const bulletVelY = sourceEntity.bullet.extras.bulletSpeed * Math.sin(theta)
    const bulletDeltaX = sourceEntity.size[0] * 0.6 * Math.cos(theta) + sourceEntity.bullet.sizeX / 2 * Math.cos(theta)
    const bulletDeltaY = sourceEntity.size[1] * 0.6 * Math.sin(theta) + sourceEntity.bullet.sizeY / 2 * Math.sin(theta)
    entities = CreateBullet(entities, sourceEntity, bulletVelX, bulletVelY, bulletDeltaX, bulletDeltaY - 0 * sourceEntity.bullet.sizeY * 0.5);
    return entities
}

export const getBulletDirectionAndSpeed = (entityA, entityB) => {
    const changeInX = Math.abs(entityA.body.position.x - entityB.body.position.x)
    const changeInY = Math.abs(entityA.body.position.y - entityB.body.position.y)
    const signX = Math.sign(entityB.body.position.x - entityA.body.position.x)
    const signY = Math.sign(entityB.body.position.y - entityA.body.position.y)
    let theta = Math.atan(changeInY / changeInX)
    entityA.bullet.bulletVelX = entityA.bullet.extras.bulletSpeed * Math.cos(theta) * signX
    entityA.bullet.bulletVelY = entityA.bullet.extras.bulletSpeed * Math.sin(theta) * signY
    entityA.bullet.bulletDeltaX = entityA.size[0] * 0.6 * Math.cos(theta) * signX + entityA.bullet.sizeX / 2 * Math.cos(theta) * signX
    entityA.bullet.bulletDeltaY = entityA.size[1] * 0.6 * Math.sin(theta) * signY + entityA.bullet.sizeY / 2 * Math.sin(theta) * signY
    entityA.bullet.signX = signX
    entityA.bullet.signY = signY
    entityA.bullet.launchAngle = theta
}


export const perfectHoming = (entityA, entityB) => {
    const changeInX = Math.abs(entityA.body.position.x - entityB.body.position.x)
    const changeInY = Math.abs(entityA.body.position.y - entityB.body.position.y)
    const signX = Math.sign(entityB.body.position.x - entityA.body.position.x)
    const signY = Math.sign(entityB.body.position.y - entityA.body.position.y)
    let theta = Math.atan(changeInY / changeInX)
    entityA.body.bulletVelX = entityA.body.bulletSpeed * Math.cos(theta) * signX
    entityA.body.bulletVelY = entityA.body.bulletSpeed * Math.sin(theta) * signY
}

// Why this take so long to figure out?
export const smoothHoming2 = (entityA, entityB) => {
    let signX = Math.sign(entityA.body.bulletVelX)
    let signY = Math.sign(entityA.body.bulletVelY)
    let curAngle = Math.atan(Math.abs(entityA.body.bulletVelY) / Math.abs(entityA.body.bulletVelX))
    curAngle = transformAngle(signX, signY, curAngle)

    const changeInX = Math.abs(entityA.body.position.x - entityB.body.position.x)
    const changeInY = Math.abs(entityA.body.position.y - entityB.body.position.y)
    signX = Math.sign(entityB.body.position.x - entityA.body.position.x)
    signY = Math.sign(entityB.body.position.y - entityA.body.position.y)
    let enemyAngle = Math.atan(changeInY / changeInX)
    enemyAngle = transformAngle(signX, signY, enemyAngle)

    delAngle = (enemyAngle - curAngle) * 180.0 / 3.141
    if (Math.abs(delAngle) > entityA.body.homingDeltaAngle) {
        if ((delAngle >= 0 && delAngle < 180.0) || (delAngle < 0 && delAngle < -180.0)) {
            newAngle = curAngle + entityA.body.homingDeltaAngle * 3.141 / 180.0
        } else if ((delAngle >= 0 && delAngle > 180.0) || (delAngle < 0 && delAngle > -180.0)) {
            newAngle = curAngle - entityA.body.homingDeltaAngle * 3.141 / 180.0
        }
    } else {
        newAngle = enemyAngle
    }

    entityA.body.bulletVelX = entityA.body.bulletSpeed * Math.cos(newAngle)
    entityA.body.bulletVelY = entityA.body.bulletSpeed * Math.sin(newAngle)
}

export const isOutOfBounds = (entityA, bounds) => {
    if (entityA.body.position.x > bounds.maxX) {
        return true
    } else if (entityA.body.position.x < bounds.minX) {
        return true
    } else if (entityA.body.position.y > bounds.minY) { // Note down is positive Y
        return true
    } else if (entityA.body.position.y < bounds.maxY) {
        return true
    }
    return false
}