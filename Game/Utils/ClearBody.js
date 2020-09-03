import Matter from 'matter-js';

const remove = (id, type, entities) => {
    Matter.Composite.remove(entities.physics.world, entities[id].body);
    delete entities[id];
    delete entities['ids'][type][id];
}

export default remove