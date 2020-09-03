import Matter from 'matter-js';
import Bullet from '../Renderers/Bullet';
import Player from '../../assets/Player'; // Sound Player
import playerStats from '../Worlds/playerStatsConfig'

var soundIdx = 1;

const CreateBullet = (entities, sourceEntity, bulletVelX, bulletVelY, bulletDeltaX, bulletDeltaY, playSounds = false) => {
    let bulletId = entities.physics[sourceEntity.body.label + 'BulletId'];
    let world = entities.physics.world;

    ++bulletId
    let bullet = Matter.Bodies.rectangle(
        sourceEntity.body.position.x + bulletDeltaX,
        sourceEntity.body.position.y + bulletDeltaY,
        sourceEntity.bullet.sizeX,
        sourceEntity.bullet.sizeY,
        {
            ...{
                bulletVelX: bulletVelX,
                bulletVelY: bulletVelY,
                key: sourceEntity.bullet.extras.label + bulletId
            },
            ...sourceEntity.bullet.extras
        })

    entities[sourceEntity.bullet.extras.label + bulletId] = {
        imageNum: sourceEntity.images.imageName,
        image: sourceEntity.bullet.image,
        body: bullet,
        size: sourceEntity.bullet.size,
        color: 'blue',
        renderer: Bullet
    }

    entities.ids[sourceEntity.body.label + 'Bullets'][sourceEntity.bullet.extras.label + bulletId] = {
        label: sourceEntity.bullet.extras.label
    }

    entities.physics[sourceEntity.body.label + 'BulletId'] = bulletId
    Matter.World.add(world, [bullet])
    if (playSounds && playerStats.isSoundEffects) {
        Player.playSound('fire' + soundIdx)
        soundIdx++
        if (soundIdx > 4) {
            soundIdx = 1
        }
    }

    return entities;
}

export default CreateBullet