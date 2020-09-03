import playerConfig from '../Worlds/playerConfig';
import appliedPowerUps from '../Worlds/appliedPowerUps';
import playerStats from '../Worlds/playerStatsConfig';

const defaultState = () => {
    playerConfig.player.extras.defense = 1.0
    playerConfig.player.entity.bullet.numBullets = 1
    playerConfig.player.entity.plusHealthLevel = 0
    playerConfig.player.entity.bullet.extras.homing = false
    playerConfig.player.entity.bullet.extras.homingDeltaAngle = 5.0
    playerConfig.player.entity.bullet.extras.perfectHoming = false
    playerConfig.player.extras.maxNumJumps = 2
    playerConfig.player.entity.earningsMultiplier = 1
    playerConfig.player.extras.moveSpeed = 2.5
    playerConfig.player.entity.bullet.extras.numBounces = 1
    playerConfig.player.entity.bullet.extras.bulletSpeed = 4
    playerConfig.player.entity.bullet.spreadBullets = false
    playerConfig.player.entity.bullet.numSpreadBullets = 1
    playerConfig.player.entity.bullet.extras.damage = playerStats.maxDamage
    playerConfig.player.extras.shootTime = 1000.0
    playerConfig.player.entity.bullet.extras.piercingShot = false
    playerConfig.player.entity.plusHealthKill = 0
    for (var key in appliedPowerUps) {
        const item = appliedPowerUps[key]
        item.isSet = false
    }
    playerConfig.player.extras.currentHealth = playerStats.maxHealth
    playerConfig.player.extras.totalHealth = playerStats.maxHealth
    playerConfig.player.entity.earnings = 0
    playerConfig.player.entity.finishedSelectingPowerUp = false
    playerConfig.player.entity.hasTriggeredPowerUp = false
}

export default defaultState