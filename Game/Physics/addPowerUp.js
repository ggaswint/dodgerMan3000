import powerUpsConfig from '../Worlds/powerUpsConfig';
import appliedPowerUps from '../Worlds/appliedPowerUps';

const savePower = (key, val) => {
    appliedPowerUps[key].isSet = true
    appliedPowerUps[key].value = val
}

const addPowerUp = (entities) => {
    let player = entities.player;
    if (powerUpsConfig.defense.isSet) {
        powerUpsConfig.defense.isSet = false
        player.body.defense = player.body.defense + player.body.defense * powerUpsConfig.defense.value
    }
    else if (powerUpsConfig.numBullets.isSet) {
        powerUpsConfig.numBullets.isSet = false
        player.bullet.numBullets += powerUpsConfig.numBullets.value
    }
    else if (powerUpsConfig.plusHealthLevel.isSet) {
        powerUpsConfig.plusHealthLevel.isSet = false
        player.plusHealthLevel = player.body.totalHealth * powerUpsConfig.plusHealthLevel.value
        savePower('plusHealthLevel', player.plusHealthLevel)
    }
    else if (powerUpsConfig.homing.isSet) {
        powerUpsConfig.homing.isSet = false
        player.bullet.extras.homing = true
        player.bullet.extras.homingDeltaAngle = powerUpsConfig.homing.value
        if (powerUpsConfig.homing.value > 8.0) {
            player.bullet.extras.perfectHoming = true
        }
        savePower('homing', player.bullet.extras.homing)
        savePower('homingDeltaAngle', player.bullet.extras.homingDeltaAngle)
        savePower('perfectHoming', player.bullet.extras.perfectHoming)
    }
    else if (powerUpsConfig.maxNumJumps.isSet) {
        powerUpsConfig.maxNumJumps.isSet = false
        player.body.maxNumJumps += powerUpsConfig.maxNumJumps.value
        savePower('maxNumJumps', player.body.maxNumJumps)
    }
    else if (powerUpsConfig.earningsMultiplier.isSet) {
        powerUpsConfig.earningsMultiplier.isSet = false
        player.earningsMultiplier *= powerUpsConfig.earningsMultiplier.value
        savePower('earningsMultiplier', player.earningsMultiplier)
    }
    else if (powerUpsConfig.moveSpeed.isSet) {
        powerUpsConfig.moveSpeed.isSet = false
        player.body.moveSpeed += powerUpsConfig.moveSpeed.value
        savePower('moveSpeed', player.body.moveSpeed)
    }
    else if (powerUpsConfig.numBounces.isSet) {
        powerUpsConfig.numBounces.isSet = false
        player.bullet.extras.numBounces += powerUpsConfig.numBounces.value
        savePower('numBounces', player.bullet.extras.numBounces)
    }
    else if (powerUpsConfig.bulletSpeed.isSet) {
        powerUpsConfig.bulletSpeed.isSet = false
        player.bullet.extras.bulletSpeed += powerUpsConfig.bulletSpeed.value
        savePower('bulletSpeed', player.bullet.extras.bulletSpeed)
    }
    else if (powerUpsConfig.spreadBullets.isSet) {
        powerUpsConfig.spreadBullets.isSet = false
        player.bullet.spreadBullets = true
        player.bullet.numSpreadBullets = powerUpsConfig.spreadBullets.value
        savePower('numSpreadBullets', player.bullet.numSpreadBullets)
        savePower('spreadBullets', player.bullet.numSpreadBullets)
    }
    else if (powerUpsConfig.damage.isSet) {
        powerUpsConfig.damage.isSet = false
        player.bullet.extras.damage = player.bullet.extras.damage + player.bullet.extras.damage * powerUpsConfig.damage.value
        savePower('damage', player.bullet.extras.damage)
    }
    else if (powerUpsConfig.shootTime.isSet) {
        powerUpsConfig.shootTime.isSet = false
        player.body.shootTime = player.body.shootTime - player.body.shootTime * powerUpsConfig.shootTime.value
        savePower('shootTime', player.body.shootTime)
    }
    else if (powerUpsConfig.piercingShot.isSet) {
        powerUpsConfig.piercingShot.isSet = false
        player.bullet.extras.piercingShot = true
        savePower('piercingShot', player.bullet.extras.piercingShot)
    }
    else if (powerUpsConfig.plusHealthKill.isSet) {
        powerUpsConfig.plusHealthKill.isSet = false
        player.plusHealthKill = player.body.totalHealth * powerUpsConfig.plusHealthKill.value
        savePower('plusHealthKill', player.plusHealthKill)
    }
    savePower('curHealth', player.body.currentHealth)
    savePower('totalHealth', player.body.totalHealth)
    savePower('earnings', player.earnings)

    return entities
}

export default addPowerUp