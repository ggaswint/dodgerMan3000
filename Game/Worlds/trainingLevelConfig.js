import Constants from '../Utils/Constants';
import Wall from '../Renderers/Wall';
import Training from '../Renderers/Training';
import Enemy from '../Renderers/Enemy';

const gameScreenX = Constants.MAX_WIDTH;
const gameScreenY = Constants.MAX_HEIGHT;
export default Level1Init = {
    things: {
        enemy1: {
            locationX: Constants.MAX_WIDTH * 3.0 / 4.0,
            locationY: Constants.MAX_HEIGHT - 50,
            sizeX: 50 * 0.7,
            sizeY: 50 * 0.7,
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
                bodyType: "rectangle",
                totalHealth: 50000,
                currentHealth: 50000,
                remove: false,
                friction: 0,
                inertia: Infinity,
                frictionAir: 0.0,
                label: "enemy",
                velocity: { x: 0.0, y: 0 },
                deltaTMove: 0,
                moveTime: 3000,
                speedX: 0.0,
                deltaTFire: 0,
                shootTime: 3000,
                damage: 0,
                mass: 100000.0,
                rotationY: 0,
                defense: 1.0,
            },
            entity: {
                name: 'enemy1',
                image: 'enemy1_',
                color: 'black',
                renderer: Enemy,
                size: [50, 50],
                ai: 'training',
                bottom: 7,
                images: {
                    imageName: 'enemy1_',
                    pose: 1,
                    deltaTPose: 0,
                    poseName: 'Sneer',
                    initialPoseName: 'Sneer',
                    Walk: {
                        poseTime: 300,
                        numPoses: 4,
                    },
                    Sneer: {
                        poseTime: 300,
                        numPoses: 6,
                    },
                    Death: {
                        poseTime: 400,
                        numPoses: 4,
                    },
                },
                worth: 0,
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
                    bulletVelX: -1,
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
                        bulletSpeed: 1,
                        damage: 0,
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
                image: 'trainingSurfaces',
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
                image: 'trainingSurfaces',
                color: 'green',
                renderer: Wall,
                size: [50, gameScreenY],
            },
        },
        topWall: {
            locationX: gameScreenX / 2,
            locationY: Constants.MAX_HEIGHT - gameScreenY + 24,
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
                image: 'trainingSurfaces',
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
                image: 'trainingSurfaces',
                color: 'green',
                renderer: Wall,
                size: [gameScreenX, 50],
            },
        },
        platform1: {
            locationX: Constants.MAX_WIDTH * 0.25 / 2 + 50,
            locationY: Constants.MAX_HEIGHT / 2,
            sizeX: Constants.MAX_WIDTH * 0.25,
            sizeY: 50,
            isInternalStaticBody: true, // Can body prevent bullet fire
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "floor",
            },
            entity: {
                name: 'platform1',
                image: 'trainingSurfaces',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.25, 50],
            },
        },
        platform1Side: {
            locationX: Constants.MAX_WIDTH * 0.25 + 50,
            locationY: Constants.MAX_HEIGHT / 2,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: 49,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform1Side',
                image: 'trainingSurfaces',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, 50],
            },
        },
        platform3: {
            locationX: Constants.MAX_WIDTH * 0.5 - 5,
            locationY: Constants.MAX_HEIGHT / 5 + 60,
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
                image: 'trainingSurfaces',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.25, 5],
            },
        },
        platform4: {
            locationX: Constants.MAX_WIDTH * 0.5 - 5,
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
                name: 'platform4',
                image: 'trainingSurfaces',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.25, 5],
            },
        },
        platform5: {
            locationX: Constants.MAX_WIDTH * 0.5 - 5,
            locationY: Constants.MAX_HEIGHT / 5 + 180,
            sizeX: Constants.MAX_WIDTH * 0.25,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform5',
                image: 'trainingSurfaces',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.25, 5],
            },
        },
    },
    params: {
        camera: {
            maxOffsetX: 0, //right wall location - width plus half of its size
            maxOffsetY: 0, //top wall location - height plus half of its size  (note 0 is at top of screen)
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
        training: {
            moveLeft: {
                name: 'trainingBackgroundLeft',
                entity: {
                    body: {
                        position: {
                            x: (Constants.MAX_WIDTH / 812) * 75,
                            y: Constants.MAX_HEIGHT - gameScreenY / 2,
                        },
                    },
                    size: [(Constants.MAX_WIDTH / 812) * 150, gameScreenY],
                    image: 'trainingBackground',
                    color: 'rgba(111, 252, 3, 0.2)',
                    renderer: Training,
                    wordsContent: 'Move Left',
                    left: Constants.MAX_WIDTH * 0.065,
                    top: Constants.MAX_HEIGHT * 0.15
                },
            },
            moveRight: {
                name: 'trainingBackgroundRight',
                entity: {
                    body: {
                        position: {
                            x: (Constants.MAX_WIDTH / 812) * 225,
                            y: Constants.MAX_HEIGHT - gameScreenY / 2,
                        },
                    },
                    size: [(Constants.MAX_WIDTH / 812) * 150, gameScreenY],
                    image: 'trainingBackground',
                    color: 'rgba(128, 147, 242, 0.2)',
                    renderer: Training,
                    wordsContent: 'Move Right',
                    left: Constants.MAX_WIDTH * 0.03,
                    top: Constants.MAX_HEIGHT * 0.15
                },
            },
            jump: {
                name: 'trainingBackgroundJumo',
                entity: {
                    body: {
                        position: {
                            x: gameScreenX - (gameScreenX - (Constants.MAX_WIDTH / 812) * 500) / 2,
                            y: gameScreenY - (Constants.MAX_HEIGHT / 375) * 87.5,
                        },
                    },
                    size: [(gameScreenX - (Constants.MAX_WIDTH / 812) * 500), (Constants.MAX_HEIGHT / 375) * 175],
                    image: 'trainingBackground',
                    color: 'rgba(227, 207, 75, 0.2)',
                    renderer: Training,
                    wordsContent: 'Jump',
                    left: Constants.MAX_WIDTH * 0.15,
                    top: Constants.MAX_HEIGHT * 0.15
                },
            },
            duck: {
                name: 'trainingBackgroundDuck',
                entity: {
                    body: {
                        position: {
                            x: gameScreenX - (gameScreenX - (Constants.MAX_WIDTH / 812) * 500) / 2,
                            y: (gameScreenY - (Constants.MAX_HEIGHT / 375) * 175) / 2,
                        },
                    },
                    size: [(gameScreenX - (Constants.MAX_WIDTH / 812) * 500), gameScreenY - (Constants.MAX_HEIGHT / 375) * 175],
                    image: 'trainingBackground',
                    color: 'rgba(252, 210, 250, 0.2)',
                    renderer: Training,
                    wordsContent: 'Move Under Flat Platform',
                    left: Constants.MAX_WIDTH * 0.015,
                    top: Constants.MAX_HEIGHT * 0.15
                },
            },
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
                image: 'trainingBackground',
                color: 'green',
                renderer: Wall,

            },
        },
        teleporter: {
            locationX: gameScreenX - 75,
            locationY: Constants.MAX_HEIGHT - 75,
            sizeX: 25,
            sizeY: 25,
            arrowColor: 'blue',
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

