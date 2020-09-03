import Constants from '../../Utils/Constants';
import Wall from '../../Renderers/Wall';
import Enemy from '../../Renderers/Enemy';

const gameScreenX = Constants.MAX_WIDTH + 125;
const gameScreenY = Constants.MAX_HEIGHT * 3 / 2 + 25;
export default LevelInit = {
    things: {
        enemy1: {
            locationX: Constants.MAX_WIDTH * 3.0 / 4.0,
            locationY: Constants.MAX_HEIGHT - 50, //Constants.MAX_HEIGHT - 76,
            sizeX: 50 * 0.7,
            sizeY: 50 * 0.7,
            // vertices: [
            //     { x: 0, y: 0 },
            //     { x: 0, y: 50 },
            //     { x: 25, y: 50 },
            //     { x: 25, y: 25 },
            //     { x: 50, y: 25 },
            //     { x: 50, y: 0 }
            // ],
            vertices: [
                { x: 0, y: 0 },
                { x: 25, y: 0 },
                { x: 25, y: 25 },
                { x: 50, y: 25 },
                { x: 50, y: 50 },
                { x: 0, y: 50 }
            ],
            isInternalStaticBody: false,
            extras: {
                // collisionFilter: {
                //     mask: 0x0001,
                //     category: 0x0004
                // },
                bodyType: "rectangle",
                totalHealth: 400,
                currentHealth: 400,
                remove: false,
                friction: 0,
                inertia: Infinity,
                frictionAir: 0.0,
                label: "enemy",
                velocity: { x: 0.5, y: 0 },
                deltaTMove: 0,
                moveTime: 2000,
                speedX: 2.5,
                deltaTFire: 0,
                shootTime: 2000,
                damage: 50,
                mass: 100000.0,
                rotationY: 0,
                defense: 1.0,
                collisionFilter: { group: -2 },
                hitsPlatforms: true,
            },
            entity: {
                name: 'enemy1',
                color: 'black',
                renderer: Enemy,
                size: [50, 50],
                ai: 'dumb',
                bottom: 7,
                healthBarMarginTop: 0,
                images: {
                    imageName: 'enemy1_',
                    pose: 1,
                    deltaTPose: 0,
                    poseName: 'Walk',
                    initialPoseName: 'Walk',
                    Walk: {
                        poseTime: 300,
                        numPoses: 4,
                    },
                    Sneer: {
                        poseTime: 300,
                        numPoses: 6,
                    },
                    Death: {
                        poseTime: 300,
                        numPoses: 4,
                    },
                },
                worth: 300,
                bullet: {
                    sizeX: 20,
                    sizeY: 20,
                    size: [25, 25],
                    image: 'Bullet',
                    numBullets: 1,
                    spreadBullets: false,
                    numSpreadBullets: 1,
                    launchAngle: null,
                    signX: 1,
                    signY: 1,
                    bulletDeltaX: 0,
                    bulletDeltaY: 0,
                    bulletVelX: -2,
                    bulletVelY: 0,
                    extras: {
                        piercingShot: false,
                        hasLifeTime: false,
                        lifeTime: 2000,
                        deltaTLifeTime: 0,
                        homing: false,
                        perfectHoming: false,
                        hasHomingTime: false,
                        HomingTime: 1000,
                        deltaTHomingTime: 0,
                        homingDeltaAngle: 10,
                        numBounces: 1,
                        bulletSpeed: 2,
                        damage: 50,
                        rotation: 0,
                        remove: false,
                        label: 'enemyBullet',
                        friction: 0,
                        inertia: Infinity,
                        frictionAir: 0.0,
                        isSensor: true,
                    }
                },
            },
        },
        enemy2: {
            locationX: Constants.MAX_WIDTH,
            locationY: Constants.MAX_HEIGHT - 50, //Constants.MAX_HEIGHT - 76,
            sizeX: 50 * 0.7,
            sizeY: 50 * 0.7,
            // vertices: [
            //     { x: 0, y: 0 },
            //     { x: 0, y: 50 },
            //     { x: 25, y: 50 },
            //     { x: 25, y: 25 },
            //     { x: 50, y: 25 },
            //     { x: 50, y: 0 }
            // ],
            vertices: [
                { x: 0, y: 0 },
                { x: 25, y: 0 },
                { x: 25, y: 25 },
                { x: 50, y: 25 },
                { x: 50, y: 50 },
                { x: 0, y: 50 }
            ],
            isInternalStaticBody: false,
            extras: {
                // collisionFilter: {
                //     mask: 0x0001,
                //     category: 0x0004
                // },
                bodyType: "rectangle",
                totalHealth: 300,
                currentHealth: 300,
                remove: false,
                friction: 0,
                inertia: Infinity,
                frictionAir: 0.0,
                label: "enemy",
                velocity: { x: 0.5, y: 0 },
                deltaTMove: 0,
                moveTime: 3000,
                speedX: 1.5,
                deltaTFire: 300,
                shootTime: 1900,
                damage: 50,
                mass: 100000.0,
                rotationY: 0,
                defense: 1.0,
                collisionFilter: { group: -2 },
                hitsPlatforms: true,
            },
            entity: {
                name: 'enemy2',
                color: 'black',
                renderer: Enemy,
                size: [50, 50],
                ai: 'dumb',
                bottom: 7,
                healthBarMarginTop: 0,
                images: {
                    imageName: 'enemy1_',
                    pose: 1,
                    deltaTPose: 0,
                    poseName: 'Walk',
                    initialPoseName: 'Walk',
                    Walk: {
                        poseTime: 300,
                        numPoses: 4,
                    },
                    Sneer: {
                        poseTime: 300,
                        numPoses: 6,
                    },
                    Death: {
                        poseTime: 300,
                        numPoses: 4,
                    },
                },
                worth: 300,
                bullet: {
                    sizeX: 20,
                    sizeY: 20,
                    size: [25, 25],
                    image: 'Bullet',
                    numBullets: 1,
                    spreadBullets: false,
                    numSpreadBullets: 1,
                    launchAngle: null,
                    signX: 1,
                    signY: 1,
                    bulletDeltaX: 0,
                    bulletDeltaY: 0,
                    bulletVelX: -2,
                    bulletVelY: 0,
                    extras: {
                        piercingShot: false,
                        hasLifeTime: false,
                        lifeTime: 2000,
                        deltaTLifeTime: 0,
                        homing: false,
                        perfectHoming: false,
                        hasHomingTime: false,
                        HomingTime: 1000,
                        deltaTHomingTime: 0,
                        homingDeltaAngle: 10,
                        numBounces: 1,
                        bulletSpeed: 2,
                        damage: 50,
                        rotation: 0,
                        remove: false,
                        label: 'enemyBullet',
                        friction: 0,
                        inertia: Infinity,
                        frictionAir: 0.0,
                        isSensor: true,
                    }
                },
            },
        },
        leftWall: {
            locationX: 25,
            locationY: Constants.MAX_HEIGHT - gameScreenY / 2,
            sizeX: 50,
            sizeY: gameScreenY,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'leftWall',
                image: 'world1_leftWall',
                color: 'green',
                renderer: Wall,
                size: [50, gameScreenY],
            },
        },
        rightWall: {
            locationX: gameScreenX - 25,
            locationY: Constants.MAX_HEIGHT - gameScreenY / 2,
            sizeX: 50,
            sizeY: gameScreenY,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'rightWall',
                image: 'world1_rightWall',
                color: 'green',
                renderer: Wall,
                size: [50, gameScreenY],
            },
        },
        topWall: {
            locationX: gameScreenX / 2,
            locationY: Constants.MAX_HEIGHT - gameScreenY + 25,
            sizeX: gameScreenX,
            sizeY: 50,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall",
            },
            entity: {
                name: 'topWall',
                image: 'world1_topWall',
                color: 'green',
                renderer: Wall,
                size: [gameScreenX, 50],
            },
        },
        floor: {
            locationX: gameScreenX / 2,
            locationY: Constants.MAX_HEIGHT - 25,
            sizeX: gameScreenX,
            sizeY: 50,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "floor"
            },
            entity: {
                name: 'floor',
                image: 'world1_floor',
                color: 'green',
                renderer: Wall,
                size: [gameScreenX, 50],
            },
        },
        platform1: {
            locationX: Constants.MAX_WIDTH * 0.4,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_WIDTH * 0.25 / 2,
            sizeX: 50,
            sizeY: Constants.MAX_WIDTH * 0.25,
            isInternalStaticBody: true, // Can body prevent bullet fire
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "floor",
            },
            entity: {
                name: 'platform1',
                image: 'world1_platformV',
                color: 'green',
                renderer: Wall,
                size: [50, Constants.MAX_WIDTH * 0.25],
            },
        },
        platform1SideL: {
            locationX: Constants.MAX_WIDTH * 0.4 - 25 - Constants.MAX_WIDTH * 0.01 / 2,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_WIDTH * 0.25 / 2,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: Constants.MAX_WIDTH * 0.25 - 1,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform1SideL',
                image: 'world1_platformSideL',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, Constants.MAX_WIDTH * 0.25 - 1],
            },
        },
        platform1SideR: {
            locationX: Constants.MAX_WIDTH * 0.4 + 25 + Constants.MAX_WIDTH * 0.01 / 2,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_WIDTH * 0.25 / 2,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: Constants.MAX_WIDTH * 0.25 - 1,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform1SideR',
                image: 'world1_platformSideR',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, Constants.MAX_WIDTH * 0.25 - 1],
            },
        },
        platform2: {
            locationX: Constants.MAX_WIDTH * 0.2,
            locationY: Constants.MAX_HEIGHT / 5 + 120,
            sizeX: Constants.MAX_WIDTH * 0.25,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform2',
                image: 'world1_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.25, 5],
            },
        },
        platform3: {
            locationX: Constants.MAX_WIDTH * 0.7,
            locationY: Constants.MAX_HEIGHT / 5,
            sizeX: Constants.MAX_WIDTH * 0.25,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform3',
                image: 'world1_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.25, 5],
            },
        },
        platform4: {
            locationX: Constants.MAX_WIDTH * 0.7,
            locationY: Constants.MAX_HEIGHT / 5 + 140,
            sizeX: Constants.MAX_WIDTH * 0.25,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform4',
                image: 'world1_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.25, 5],
            },
        },
    },
    params: {
        camera: {
            maxOffsetX: 125, //right wall location - width plus half of its size
            maxOffsetY: Constants.MAX_HEIGHT / 2 + 25, //top wall location - height plus half of its size  (note 0 is at top of screen)
            //maxOffsetY: gameScreenY / 2 - 75, //top wall location - height plus half of its size  (note 0 is at top of screen)

        },
        gravity: {
            y: 1.0
        },
        playerStartPos: {
            locationX: Constants.MAX_WIDTH / 4,
            locationY: Constants.MAX_HEIGHT - 50,
        },
        bounds: {
            minX: 50,
            maxX: gameScreenX - 50,
            minY: Constants.MAX_HEIGHT - 50,
            maxY: Constants.MAX_HEIGHT - gameScreenY + 50,
        },
        background: {
            entity: {
                body: {
                    position: {
                        x: gameScreenX / 2,
                        y: Constants.MAX_HEIGHT - gameScreenY / 2,
                    },
                },
                size: [gameScreenX, gameScreenY],
                name: 'background',
                image: 'world1_background',
                color: 'green',
                renderer: Wall,

            },
        },
        props: {
            moveLeft: {
                name: 'tree',
                entity: {
                    body: {
                        position: {
                            x: Constants.MAX_WIDTH * 0.25,
                            y: Constants.MAX_HEIGHT - 50 - 100,
                        },
                    },
                    size: [200, 200],
                    image: 'world1_tree',
                    renderer: Wall,
                    left: Constants.MAX_WIDTH * 0.07,
                    top: Constants.MAX_HEIGHT * 0.15
                },
            },
        },
        teleporter: {
            locationX: gameScreenX - 75,
            locationY: Constants.MAX_HEIGHT - 75,
            sizeX: 25,
            sizeY: 25,
            arrowColor: 'white',
            extras: {
                isStatic: true,
                label: 'teleporter'
            },
            entity: {
                image: 'world1_teleporter',
                size: [50, 50],
                renderer: Wall
            }
        }
    }
}

