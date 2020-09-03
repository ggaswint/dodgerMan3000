import Matter from 'matter-js';
import playerConfig from './Worlds/playerConfig';
import Constants from './Utils/Constants';

const createLevel = (entities, LevelConfig) => {
    entities = { ...entities, background: { ...LevelConfig.params.background.entity } }

    if ('props' in LevelConfig.params) {
        for (var key in LevelConfig.params.props) {
            backDrop = LevelConfig.params.props[key]
            entities = { ...entities, [backDrop.name]: { ...backDrop.entity } }
        }
    }

    let world = entities.physics.world;
    world.gravity.y = LevelConfig.params.gravity.y;

    item = playerConfig.player;
    let nextBody;
    if (item.extras.bodyType === 'rectangle') {
        nextBody = Matter.Bodies.rectangle(LevelConfig.params.playerStartPos.locationX, LevelConfig.params.playerStartPos.locationY, item.sizeX, item.sizeY, item.extras);
    } else if (item.extras.bodyType === 'fromVertices') {
        nextBody = Matter.Bodies.fromVertices(LevelConfig.params.playerStartPos.locationX, LevelConfig.params.playerStartPos.locationY, item.vertices, item.extras);
        Matter.Body.setVelocity(nextBody, { x: item.extras.velocity.x, y: item.extras.velocity.y })
        nextBody.parent.velocity.x = 2
    }
    entities = { ...entities, [item.entity.name]: { ...{ body: nextBody }, ...item.entity } }
    Matter.World.add(world, [nextBody])

    for (var key in LevelConfig.things) {
        item = LevelConfig.things[key];
        nextBody;
        if (item.extras.bodyType === 'rectangle') {
            nextBody = Matter.Bodies.rectangle(item.locationX, item.locationY, item.sizeX, item.sizeY, item.extras);
        } else if (item.extras.bodyType === 'fromVertices') {
            nextBody = Matter.Bodies.fromVertices(item.locationX, item.locationY, item.vertices, item.extras);
            Matter.Body.setVelocity(nextBody, { x: item.extras.velocity.x, y: item.extras.velocity.y })
            nextBody.parent.velocity.x = 2
        }
        if (item.extras.label === "enemy") {
            entities.ids.enemies[item.entity.name] = { label: "enemy" }
            if ('jumpSpeed' in nextBody) {
                nextBody.jumpSpeed *= Math.sqrt((Constants.MAX_HEIGHT / 375))
            }
        }
        if (item.isInternalStaticBody) {
            entities.staticBodies.bodies.push(nextBody)
        }
        entities = { ...entities, [item.entity.name]: { ...{ body: nextBody }, ...item.entity } }
        Matter.World.add(world, [nextBody])
    }
    entities.camera.maxOffsetX = LevelConfig.params.camera.maxOffsetX;
    entities.camera.maxOffsetY = LevelConfig.params.camera.maxOffsetY;
    entities = { ...entities, teleporterProps: { ...LevelConfig.params.teleporter } }
    entities = { ...entities, bounds: { ...LevelConfig.params.bounds } }

    if ('training' in LevelConfig.params) {
        for (var key in LevelConfig.params.training) {
            backDrop = LevelConfig.params.training[key]
            entities = { ...entities, [backDrop.name]: { ...backDrop.entity } }
        }
    }
    return entities;
}

export default createLevel