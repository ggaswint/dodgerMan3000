import playerConfig from './Worlds/playerConfig'
import appliedPowerUps from './Worlds/appliedPowerUps'
import playerStats from './Worlds/playerStatsConfig'
import lockedConfig from './Worlds/lockedConfig'

export const addLockedStatus = (playerSaveInfo) => {
    lockedConfig.worlds = playerSaveInfo.worlds
    lockedConfig.players = playerSaveInfo.players
}

export const addPlayerStats = (playerSaveInfo) => {
    playerStats.money = playerSaveInfo.money
    playerStats.maxHealth = playerSaveInfo.maxHealth
    playerStats.maxDamage = playerSaveInfo.maxDamage
    playerStats.isMusic = playerSaveInfo.isMusic
    playerStats.isSoundEffects = playerSaveInfo.isSoundEffects
    playerConfig.player.extras.totalHealth = playerSaveInfo.maxHealth
    playerConfig.player.entity.bullet.extras.damage = playerSaveInfo.maxDamage
    playerConfig.player.extras.currentHealth = playerSaveInfo.maxHealth
}

const savePower = (key, val) => {
    appliedPowerUps[key].isSet = true
    appliedPowerUps[key].value = val
}

export const addInitialPowerUps = (playerSaveInfo) => {
    if (playerSaveInfo.curHealth.isSet) {
        playerConfig.player.extras.currentHealth = playerSaveInfo.curHealth.value
        savePower('curHealth', playerSaveInfo.curHealth.value)
    }
    if (playerSaveInfo.totalHealth.isSet) {
        playerConfig.player.extras.totalHealth = playerSaveInfo.totalHealth.value
        savePower('totalHealth', playerSaveInfo.totalHealth.value)
    }
    if (playerSaveInfo.earnings.isSet) {
        playerConfig.player.entity.earnings = playerSaveInfo.earnings.value
        savePower('earnings', playerSaveInfo.earnings.value)
    }

    if (playerSaveInfo.defense.isSet) {
        playerConfig.player.extras.defense = playerSaveInfo.defense.value
        savePower('defense', playerSaveInfo.defense.value)
    }
    if (playerSaveInfo.numBullets.isSet) {
        playerConfig.player.entity.bullet.numBullets = playerSaveInfo.numBullets.value
        savePower('numBullets', playerSaveInfo.numBullets.value)
    }
    if (playerSaveInfo.plusHealthLevel.isSet) {
        playerConfig.player.entity.plusHealthLevel = playerSaveInfo.plusHealthLevel.value
        savePower('plusHealthLevel', playerSaveInfo.plusHealthLevel.value)
    }
    if (playerSaveInfo.homing.isSet) {
        playerConfig.player.entity.bullet.extras.homing = playerSaveInfo.homing.value
        playerConfig.player.entity.bullet.extras.homingDeltaAngle = playerSaveInfo.homingDeltaAngle.value
        playerConfig.player.entity.bullet.extras.perfectHoming = playerSaveInfo.perfectHoming.value
        savePower('homing', playerSaveInfo.homing.value)
        savePower('homingDeltaAngle', playerSaveInfo.homingDeltaAngle.value)
        savePower('perfectHoming', playerSaveInfo.perfectHoming.value)
    }
    if (playerSaveInfo.maxNumJumps.isSet) {
        playerConfig.player.extras.maxNumJumps = playerSaveInfo.maxNumJumps.value
        savePower('maxNumJumps', playerSaveInfo.maxNumJumps.value)
    }
    if (playerSaveInfo.earningsMultiplier.isSet) {
        playerConfig.player.entity.earningsMultiplier = playerSaveInfo.earningsMultiplier.value
        savePower('earningsMultiplier', playerSaveInfo.earningsMultiplier.value)
    }
    if (playerSaveInfo.moveSpeed.isSet) {
        playerConfig.player.extras.moveSpeed = playerSaveInfo.moveSpeed.value
        savePower('moveSpeed', playerSaveInfo.moveSpeed.value)
    }
    if (playerSaveInfo.numBounces.isSet) {
        playerConfig.player.entity.bullet.extras.numBounces = playerSaveInfo.numBounces.value
        savePower('numBounces', playerSaveInfo.numBounces.value)
    }
    if (playerSaveInfo.bulletSpeed.isSet) {
        playerConfig.player.entity.bullet.extras.bulletSpeed = playerSaveInfo.bulletSpeed.value
        savePower('bulletSpeed', playerSaveInfo.bulletSpeed.value)
    }
    if (playerSaveInfo.spreadBullets.isSet) {
        playerConfig.player.entity.bullet.spreadBullets = playerSaveInfo.spreadBullets.value
        playerConfig.player.entity.bullet.numSpreadBullets = playerSaveInfo.numSpreadBullets.value
        savePower('spreadBullets', playerSaveInfo.spreadBullets.value)
        savePower('numSpreadBullets', playerSaveInfo.numSpreadBullets.value)
    }
    if (playerSaveInfo.damage.isSet) {
        playerConfig.player.entity.bullet.extras.damage = playerSaveInfo.damage.value
        savePower('damage', playerSaveInfo.damage.value)
    }
    if (playerSaveInfo.shootTime.isSet) {
        playerConfig.player.extras.shootTime = playerSaveInfo.shootTime.value
        savePower('shootTime', playerSaveInfo.shootTime.value)
    }
    if (playerSaveInfo.piercingShot.isSet) {
        playerConfig.player.entity.bullet.extras.piercingShot = playerSaveInfo.piercingShot.value
        savePower('piercingShot', playerSaveInfo.piercingShot.value)
    }
    if (playerSaveInfo.plusHealthKill.isSet) {
        playerConfig.player.entity.plusHealthKill = playerSaveInfo.plusHealthKill.value
        savePower('plusHealthKill', playerSaveInfo.plusHealthKill.value)
    }
}