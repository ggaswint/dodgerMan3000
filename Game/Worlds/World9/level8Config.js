import Constants from '../../Utils/Constants';
import Wall from '../../Renderers/Wall';
import Enemy from '../../Renderers/Enemy';

const gameScreenX = 2 * (Constants.MAX_WIDTH + 125);
const gameScreenY = 2 * (Constants.MAX_HEIGHT * 3 / 2) + 25;
export default LevelInit = {
    things: {
        enemy1: {
            locationX: gameScreenX * 0.7,
            locationY: Constants.MAX_HEIGHT - 50, //Constants.MAX_HEIGHT - 76,
            sizeX: 50,
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
                // collisionFilter: {
                //     mask: 0x0001,
                //     category: 0x0004
                // },
                bodyType: "rectangle",
                totalHealth: 10000,
                currentHealth: 10000,
                remove: false,
                friction: 0,
                inertia: Infinity,
                frictionAir: 0.0,
                label: "enemy",
                velocity: { x: 0.5, y: 0 },
                deltaTJump: 0,
                jumpTime: 10000,
                jumpSpeed: 12,
                deltaTMove: 0,
                moveTime: 1000,
                moveTime2: 1500,
                speedX: -2.5,
                deltaTFire: 0,
                shootTime: 900,
                damage: 200,
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
                healthBarMarginTop: -60,
                images: {
                    imageName: 'enemy38_',
                    pose: 1,
                    deltaTPose: 0,
                    poseName: 'Walk',
                    initialPoseName: 'Walk',
                    Walk: {
                        poseTime: 100,
                        numPoses: 6,
                    },
                    Death: {
                        poseTime: 200,
                        numPoses: 5,
                    },
                },
                worth: 50000,
                bullet: {
                    sizeX: 20,
                    sizeY: 20,
                    size: [25, 25],
                    image: 'Bullet',
                    numBullets: 1,
                    spreadBullets: true,
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
                        bulletSpeed: 3.5,
                        damage: 400,
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
                image: 'world9_leftWall',
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
                image: 'world9_rightWall',
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
                image: 'world9_topWall',
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
                image: 'world9_floor',
                color: 'green',
                renderer: Wall,
                size: [gameScreenX, 50],
            },
        },
        platform1: {
            locationX: Constants.MAX_WIDTH * 0.75 / 2 + 100,
            locationY: Constants.MAX_HEIGHT / 2 + 50,
            sizeX: Constants.MAX_WIDTH * 0.75,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform1',
                image: 'world9_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.75, 5],
            },
        },
        platform2: {
            locationX: Constants.MAX_WIDTH * 0.75 + 500,
            locationY: Constants.MAX_HEIGHT / 2 - 150,
            sizeX: Constants.MAX_WIDTH * 0.75,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform2',
                image: 'world9_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.75, 5],
            },
        },
        platform3: {
            locationX: Constants.MAX_WIDTH * 0.75 / 2 + 100,
            locationY: Constants.MAX_HEIGHT / 2 - 150,
            sizeX: Constants.MAX_WIDTH * 0.75,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform3',
                image: 'world9_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.75, 5],
            },
        },
        platform4: {
            locationX: Constants.MAX_WIDTH * 0.75 / 2 + 100,
            locationY: Constants.MAX_HEIGHT / 2 - 350,
            sizeX: Constants.MAX_WIDTH * 0.75,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform4',
                image: 'world9_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.75, 5],
            },
        },
        platform5: {
            locationX: gameScreenX - (Constants.MAX_WIDTH * 0.25 / 2 + 50),
            locationY: Constants.MAX_HEIGHT / 3,
            sizeX: Constants.MAX_WIDTH * 0.25,
            sizeY: 50,
            isInternalStaticBody: true, // Can body prevent bullet fire
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "floor",
            },
            entity: {
                name: 'platform5',
                image: 'world9_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.25, 50],
            },
        },
        platform5Side: {
            locationX: gameScreenX - (Constants.MAX_WIDTH * 0.25 + 50),
            locationY: Constants.MAX_HEIGHT / 3,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: 49,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform5Side',
                image: 'world9_platformSideRev',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, 50],
            },
        },
        platform6: {
            locationX: Constants.MAX_WIDTH * 0.75 / 2 + 45,
            locationY: Constants.MAX_HEIGHT / 2 - 550,
            sizeX: Constants.MAX_WIDTH * 0.75,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform6',
                image: 'world9_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.75, 5],
            },
        },
    },
    params: {
        camera: {
            maxOffsetX: Constants.MAX_WIDTH + 250, //right wall location - width plus half of its size
            maxOffsetY: Constants.MAX_HEIGHT * 2 + 25, //top wall location - height plus half of its size  (note 0 is at top of screen)
            //maxOffsetY: gameScreenY / 2 - 75, //top wall location - height plus half of its size  (note 0 is at top of screen)

        },
        gravity: {
            y: 0.35
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
                image: 'world9_background',
                color: 'green',
                renderer: Wall,

            },
        },
        teleporter: {
            locationX: gameScreenX - 75,
            locationY: Constants.MAX_HEIGHT - 75,
            sizeX: 25,
            sizeY: 25,
            arrowColor: 'red',
            extras: {
                isStatic: true,
                label: 'teleporter'
            },
            entity: {
                image: 'world9_teleporter',
                size: [50, 50],
                renderer: Wall
            }
        }
    }
}

