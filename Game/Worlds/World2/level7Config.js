import Constants from '../../Utils/Constants';
import Wall from '../../Renderers/Wall';
import Enemy from '../../Renderers/Enemy';

const gameScreenX = Constants.MAX_WIDTH + 125;
const gameScreenY = Constants.MAX_HEIGHT * 3 / 2 + 25;
export default LevelInit = {
    things: {
        enemy1: {
            locationX: Constants.MAX_WIDTH * 0.9,
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
                totalHealth: 2000,
                currentHealth: 2000,
                remove: false,
                friction: 0,
                inertia: Infinity,
                frictionAir: 0.0,
                label: "enemy",
                velocity: { x: 0.5, y: 0 },
                deltaTMove: 800,
                moveTime: 1500,
                moveTime2: 2000,
                deltaTJump: 0,
                jumpTime: 1500,
                jumpSpeed: 10,
                speedX: -2.1,
                deltaTFire: 0,
                shootTime: 1600,
                damage: 100,
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
                ai: 'move_stop_jump',
                bottom: 7,
                healthBarMarginTop: -30,
                images: {
                    imageName: 'enemy12_',
                    pose: 1,
                    deltaTPose: 0,
                    poseName: 'Walk',
                    initialPoseName: 'Walk',
                    Walk: {
                        poseTime: 300,
                        numPoses: 6,
                    },
                    Death: {
                        poseTime: 300,
                        numPoses: 4,
                    },
                },
                worth: 400,
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
                        damage: 60,
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
        enemy3: {
            locationX: Constants.MAX_WIDTH * 0.9,
            locationY: 0, //Constants.MAX_HEIGHT - 76,
            sizeX: 50 * 0.7,
            sizeY: 50 * 0.5,
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
                totalHealth: 1000,
                currentHealth: 1000,
                remove: false,
                friction: 0,
                inertia: Infinity,
                frictionAir: 0.0,
                label: "enemy",
                velocity: { x: 0.5, y: 0 },
                deltaTMove: 800,
                moveTime: 1500,
                moveTime2: 3000,
                deltaTJump: 0,
                jumpTime: 1500,
                jumpSpeed: 1,
                speedX: 1.5,
                deltaTFire: 0,
                shootTime: 1900,
                damage: 100,
                mass: 100000.0,
                rotationY: 0,
                defense: 1.0,
                collisionFilter: { group: -2 },
                hitsPlatforms: false,
            },
            entity: {
                name: 'enemy3',
                color: 'black',
                renderer: Enemy,
                size: [50, 50],
                ai: 'follow_fly',
                bottom: 15,
                healthBarMarginTop: -5,
                images: {
                    imageName: 'enemy9_',
                    pose: 1,
                    deltaTPose: 0,
                    poseName: 'Walk',
                    initialPoseName: 'Walk',
                    Walk: {
                        poseTime: 300,
                        numPoses: 4,
                    },
                    Death: {
                        poseTime: 300,
                        numPoses: 4,
                    },
                },
                worth: 400,
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
                        damage: 60,
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
                image: 'world2_leftWall',
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
                image: 'world2_rightWall',
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
                image: 'world2_topWall',
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
                image: 'world2_floor',
                color: 'green',
                renderer: Wall,
                size: [gameScreenX, 50],
            },
        },
        platform1: {
            locationX: gameScreenX / 2,
            locationY: Constants.MAX_HEIGHT * 0.2,
            sizeX: Constants.MAX_WIDTH * 0.7,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform1',
                image: 'world2_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.7, 5],
            },
        },
        platform2: {
            locationX: gameScreenX / 2,
            locationY: Constants.MAX_HEIGHT / 1.5 - 45,
            sizeX: Constants.MAX_WIDTH * 0.25,
            sizeY: 50,
            isInternalStaticBody: true, // Can body prevent bullet fire
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "floor",
            },
            entity: {
                name: 'platform2',
                image: 'world2_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.25, 50],
            },
        },
        platform2SideR: {
            locationX: gameScreenX / 2 + Constants.MAX_WIDTH * 0.25 / 2,
            locationY: Constants.MAX_HEIGHT / 1.5 - 45,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: 49,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform2Side',
                image: 'world2_platformSide',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, 50],
            },
        },
        platform2SideL: {
            locationX: gameScreenX / 2 - Constants.MAX_WIDTH * 0.25 / 2,
            locationY: Constants.MAX_HEIGHT / 1.5 - 45,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: 49,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform2SideRev',
                image: 'world2_platformSideRev',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, 50],
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
            locationX: Constants.MAX_WIDTH / 8,
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
                image: 'world2_background',
                color: 'green',
                renderer: Wall,

            },
        },
        props: {
            tree1: {
                name: 'tree1',
                entity: {
                    body: {
                        position: {
                            x: gameScreenX * 0.15,
                            y: Constants.MAX_HEIGHT - 50 - 50,
                        },
                    },
                    size: [100, 100],
                    image: 'world2_tree1',
                    renderer: Wall,
                },
            },
            tree2: {
                name: 'tree2',
                entity: {
                    body: {
                        position: {
                            x: gameScreenX * 0.3,
                            y: Constants.MAX_HEIGHT - 50 - 50,
                        },
                    },
                    size: [100, 100],
                    image: 'world2_tree2',
                    renderer: Wall,
                },
            },
            tree3: {
                name: 'tree3',
                entity: {
                    body: {
                        position: {
                            x: gameScreenX * 0.45,
                            y: Constants.MAX_HEIGHT - 50 - 50,
                        },
                    },
                    size: [100, 100],
                    image: 'world2_tree2',
                    renderer: Wall,
                },
            },
            tree4: {
                name: 'tree4',
                entity: {
                    body: {
                        position: {
                            x: gameScreenX * 0.6,
                            y: Constants.MAX_HEIGHT - 50 - 50,
                        },
                    },
                    size: [100, 100],
                    image: 'world2_tree1',
                    renderer: Wall,
                },
            },
            tree5: {
                name: 'tree5',
                entity: {
                    body: {
                        position: {
                            x: gameScreenX * 0.75,
                            y: Constants.MAX_HEIGHT - 50 - 50,
                        },
                    },
                    size: [100, 100],
                    image: 'world2_tree2',
                    renderer: Wall,
                },
            },
            tree6: {
                name: 'tree6',
                entity: {
                    body: {
                        position: {
                            x: gameScreenX * 0.5,
                            y: Constants.MAX_HEIGHT / 1.5 - 45 - 75,
                        },
                    },
                    size: [100, 100],
                    image: 'world2_tree2',
                    renderer: Wall,
                },
            },
        },
        teleporter: {
            locationX: gameScreenX - 75,
            locationY: Constants.MAX_HEIGHT - 75,
            sizeX: 25,
            sizeY: 25,
            arrowColor: 'black',
            extras: {
                isStatic: true,
                label: 'teleporter'
            },
            entity: {
                image: 'world2_teleporter',
                size: [50, 50],
                renderer: Wall
            }
        }
    }
}

