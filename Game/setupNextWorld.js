import Matter from "matter-js";
import Constants from './Utils/Constants';
import createLevel from './createLevel';
import worldsConfig from '../Game/Worlds/worldsConfig';

export function setupNextWorld(entities, dispatch) {
    let physics = entities.physics;
    let curLevel = physics.curLevel + 1;
    let numLevels = physics.numLevels;
    let worldNum = physics.worldNum
    if (curLevel > numLevels) {
        dispatch({ type: "endOfWorld", earnings: entities.player.earnings })
    } else {
        dispatch({ save: "saveGameState", level: curLevel })
        let engine = physics.engine;
        let world = physics.world;
        let gravity = physics.gravity;
        Matter.World.clear(world)
        Matter.Engine.clear(engine)

        entities = {
            ids: { enemies: {}, playerBullets: {}, enemyBullets: {} },
            staticBodies: { bodies: [] },
            screen: { height: Constants.MAX_HEIGHT, width: Constants.MAX_WIDTH },
            physics: { worldNum: worldNum, numLevels: numLevels, curLevel: curLevel, noEnemies: false, gravity: gravity, engine: engine, world: world, epsilon: 0.01, playerBulletId: 0, enemyBulletId: 0 },
            camera: { offsetY: 0, offsetX: 0, maxOffsetX: Constants.MAX_WIDTH, maxOffsetY: Constants.MAX_HEIGHT },
        }
        entities = createLevel(entities, worldsConfig['world' + worldNum]['level' + curLevel]);
    }
    return entities
};