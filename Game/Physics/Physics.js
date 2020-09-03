import Matter from 'matter-js';
import PlayerPhysics from './PlayerPhysics'
import EnemyPhysics from './EnemyPhysics'
import BulletPhysics from './BulletPhysics'
import NextLevel from './NextLevel'

const Physics = (entities, { touches, time, dispatch }) => {
    let engine = entities.physics.engine;
    entities = PlayerPhysics(entities, touches, time, dispatch) // Handles touches, player image pose, firing and more
    entities = EnemyPhysics(entities, time) // Handles enemy physics, Note: sets players nearest enemy, and bullet properties for both enemy and player
    entities = BulletPhysics(entities, time) // Maintains the bullet physics/state
    entities = NextLevel(entities, dispatch) // Maintains the bullet physics/state

    //Matter.Engine.update(engine, [delta = 16.666], [correction = 1])
    Matter.Engine.update(engine, time.delta)
    return entities;
}

export default Physics