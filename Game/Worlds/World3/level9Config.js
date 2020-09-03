import Constants from '../../Utils/Constants';
import Wall from '../../Renderers/Wall';
import Enemy from '../../Renderers/Enemy';

const gameScreenX = Constants.MAX_WIDTH + 125;
const gameScreenY = Constants.MAX_HEIGHT * 3 / 2 + 25;
export default LevelInit = {
    things: {
        enemy1: {
            locationX: gameScreenX / 2 - 45,
            locationY: Constants.MAX_HEIGHT - 50, //Constants.MAX_HEIGHT - 76,
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
                // collisionFilter: {
                //     mask: 0x0001,
                //     category: 0x0004
                // },
                bodyType: "rectangle",
                totalHealth: 600,
                currentHealth: 600,
                remove: false,
                friction: 0,
                inertia: Infinity,
                frictionAir: 0.0,
                label: "enemy",
                velocity: { x: 0.5, y: 0 },
                deltaTJump: 0,
                jumpTime: 10000,
                jumpSpeed: 6,
                deltaTMove: 0,
                moveTime: 1300,
                speedX: 1.5,
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
                ai: 'dumb_jump',
                bottom: 7,
                healthBarMarginTop: -20,
                images: {
                    imageName: 'enemy19_',
                    pose: 1,
                    deltaTPose: 0,
                    poseName: 'Walk',
                    initialPoseName: 'Walk',
                    Walk: {
                        poseTime: 200,
                        numPoses: 6,
                    },
                    Death: {
                        poseTime: 300,
                        numPoses: 4,
                    },
                },
                worth: 200,
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
                        bulletSpeed: 2,
                        damage: 70,
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
                image: 'world3_leftWall',
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
                image: 'world3_rightWall',
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
                image: 'world3_topWall',
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
                image: 'world3_floor',
                color: 'green',
                renderer: Wall,
                size: [gameScreenX, 50],
            },
        },
        platform0: {
            locationX: gameScreenX / 2,
            locationY: 0 - Constants.MAX_HEIGHT * 0.25 + 25,
            sizeX: 50,
            sizeY: Constants.MAX_HEIGHT * 0.5,
            isInternalStaticBody: true, // Can body prevent bullet fire
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "floor",
            },
            entity: {
                name: 'platform0',
                image: 'world3_platformV',
                color: 'green',
                renderer: Wall,
                size: [50, Constants.MAX_HEIGHT * 0.5],
            },
        },
        platform0SideL: {
            locationX: gameScreenX / 2 - 25 - Constants.MAX_WIDTH * 0.01 / 2,
            locationY: 0 - Constants.MAX_HEIGHT * 0.25 + 25,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: Constants.MAX_HEIGHT * 0.5 - 1,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform0SideL',
                image: 'world3_platformSideL',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, Constants.MAX_HEIGHT * 0.5 - 1],
            },
        },
        platform0SideR: {
            locationX: gameScreenX / 2 + 25 + Constants.MAX_WIDTH * 0.01 / 2,
            locationY: 0 - Constants.MAX_HEIGHT * 0.25 + 25,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: Constants.MAX_HEIGHT * 0.5 - 1,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform0SideR',
                image: 'world3_platformSideR',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, Constants.MAX_HEIGHT * 0.5 - 1],
            },
        },
        platform1: {
            locationX: gameScreenX / 2,
            locationY: 0 + Constants.MAX_HEIGHT * 0.25 + 25,
            sizeX: 50,
            sizeY: Constants.MAX_HEIGHT * 0.5,
            isInternalStaticBody: true, // Can body prevent bullet fire
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "floor",
            },
            entity: {
                name: 'platform1',
                image: 'world3_platformV',
                color: 'green',
                renderer: Wall,
                size: [50, Constants.MAX_HEIGHT * 0.5],
            },
        },
        platform1SideL: {
            locationX: gameScreenX / 2 - 25 - Constants.MAX_WIDTH * 0.01 / 2,
            locationY: 0 + Constants.MAX_HEIGHT * 0.25 + 25,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: Constants.MAX_HEIGHT * 0.5 - 1,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform1SideL',
                image: 'world3_platformSideL',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, Constants.MAX_HEIGHT * 0.5 - 1],
            },
        },
        platform1SideR: {
            locationX: gameScreenX / 2 + 25 + Constants.MAX_WIDTH * 0.01 / 2,
            locationY: 0 + Constants.MAX_HEIGHT * 0.25 + 25,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: Constants.MAX_HEIGHT * 0.5 - 1,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform1SideR',
                image: 'world3_platformSideR',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, Constants.MAX_HEIGHT * 0.5 - 1],
            },
        },
        platform2: {
            locationX: gameScreenX * 0.75,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_HEIGHT * 0.5 / 2,
            sizeX: 50,
            sizeY: Constants.MAX_HEIGHT * 0.5,
            isInternalStaticBody: true, // Can body prevent bullet fire
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "floor",
            },
            entity: {
                name: 'platform2',
                image: 'world3_platformV',
                color: 'green',
                renderer: Wall,
                size: [50, Constants.MAX_HEIGHT * 0.5],
            },
        },
        platform2SideL: {
            locationX: gameScreenX * 0.75 - 25 - Constants.MAX_WIDTH * 0.01 / 2,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_HEIGHT * 0.5 / 2,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: Constants.MAX_HEIGHT * 0.5 - 1,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform2SideL',
                image: 'world3_platformSideL',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, Constants.MAX_HEIGHT * 0.5 - 1],
            },
        },
        platform2SideR: {
            locationX: gameScreenX * 0.75 + 25 + Constants.MAX_WIDTH * 0.01 / 2,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_HEIGHT * 0.5 / 2,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: Constants.MAX_HEIGHT * 0.5 - 1,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform2SideR',
                image: 'world3_platformSideR',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, Constants.MAX_HEIGHT * 0.5 - 1],
            },
        },
        platform3: {
            locationX: gameScreenX * 0.25,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_HEIGHT * 0.5 / 2,
            sizeX: 50,
            sizeY: Constants.MAX_HEIGHT * 0.5,
            isInternalStaticBody: true, // Can body prevent bullet fire
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "floor",
            },
            entity: {
                name: 'platform3',
                image: 'world3_platformV',
                color: 'green',
                renderer: Wall,
                size: [50, Constants.MAX_HEIGHT * 0.5],
            },
        },
        platform3SideL: {
            locationX: gameScreenX * 0.25 - 25 - Constants.MAX_WIDTH * 0.01 / 2,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_HEIGHT * 0.5 / 2,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: Constants.MAX_HEIGHT * 0.5 - 1,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform3SideL',
                image: 'world3_platformSideL',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, Constants.MAX_HEIGHT * 0.5 - 1],
            },
        },
        platform3SideR: {
            locationX: gameScreenX * 0.25 + 25 + Constants.MAX_WIDTH * 0.01 / 2,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_HEIGHT * 0.5 / 2,
            sizeX: Constants.MAX_WIDTH * 0.01,
            sizeY: Constants.MAX_HEIGHT * 0.5 - 1,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "wall"
            },
            entity: {
                name: 'platform3SideR',
                image: 'world3_platformSideR',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.01, Constants.MAX_HEIGHT * 0.5 - 1],
            },
        },
        platform4: {
            locationX: gameScreenX * 0.25 / 2 + 25 / 2 - 2.5,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_HEIGHT * 0.5 / 2,
            sizeX: Constants.MAX_WIDTH * 0.15,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform4',
                image: 'world3_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.15, 5],
            },
        },
        platform5: {
            locationX: gameScreenX * 0.25 / 2 + gameScreenX * 0.25 - 2.5,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_HEIGHT * 0.5 / 2,
            sizeX: Constants.MAX_WIDTH * 0.15,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform5',
                image: 'world3_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.15, 5],
            },
        },
        platform6: {
            locationX: gameScreenX * 0.25 / 2 + gameScreenX * 0.5 - 2.5,
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_HEIGHT * 0.5 / 2,
            sizeX: Constants.MAX_WIDTH * 0.15,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform6',
                image: 'world3_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.15, 5],
            },
        },
        platform7: {
            locationX: gameScreenX - (gameScreenX * 0.25 / 2 + 25 / 2 - 2.5),
            locationY: Constants.MAX_HEIGHT - 50 - Constants.MAX_HEIGHT * 0.5 / 2,
            sizeX: Constants.MAX_WIDTH * 0.15,
            sizeY: 5,
            isInternalStaticBody: false,
            extras: {
                bodyType: "rectangle",
                isStatic: true,
                label: "halfPlatform",
            },
            entity: {
                name: 'platform7',
                image: 'world3_platform',
                color: 'green',
                renderer: Wall,
                size: [Constants.MAX_WIDTH * 0.15, 5],
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
            locationX: Constants.MAX_WIDTH / 5,
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
                image: 'world3_background',
                color: 'green',
                renderer: Wall,

            },
        },
        teleporter: {
            locationX: gameScreenX - 75,
            locationY: Constants.MAX_HEIGHT - 70,
            sizeX: 25,
            sizeY: 25,
            arrowColor: 'green',
            extras: {
                isStatic: true,
                label: 'teleporter'
            },
            entity: {
                image: 'world3_teleporter',
                size: [50, 40],
                renderer: Wall
            }
        }
    }
}

