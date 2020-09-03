import Constants from '../Utils/Constants';
import Player from '../Renderers/Player';

export default playerConfig = {
    player: {
        locationX: Constants.MAX_WIDTH / 4,
        locationY: Constants.MAX_HEIGHT - 50,
        sizeX: 45 * 0.6,
        sizeY: 50 * 0.8,
        isInternalStaticBody: false,
        extras: {
            bodyType: "rectangle",
            shouldShoot: false,
            totalHealth: 500,
            currentHealth: 500,
            friction: 0,
            inertia: Infinity,
            frictionAir: 0.0,
            label: "player",
            hasJumped: 0,
            jumpSpeed: 8.1 * Math.sqrt((Constants.MAX_HEIGHT / 375)),
            maxNumJumps: 2,
            moveSpeed: 2.50, // X direction
            deltaTFire: 0,
            shootTime: 1000, // milliseconds
            rotationY: 0,
            nextLevel: false,
            defense: 1.0,
            halfWayPlatformSensor: false,
            halfWayPlatformHasMoved: false,
        },
        entity: {
            name: 'player',
            color: 'red',
            size: [45, 50],
            renderer: Player,
            hasDispatched: false,
            selectedPowerUp: false,
            earningsMultiplier: 1,
            earnings: 0,
            plusHealthLevel: 0,
            plusHealthKill: 0,
            finishedSelectingPowerUp: false,
            hasTriggeredPowerUp: false,
            bottom: 3,
            images: {
                imageName: 'player1_',
                poseName: 'Walk',
                deltaTPose: 0,
                pose: 1,
                Idle: {
                    poseTime: 100,
                    numPoses: 9,
                },
                Walk: {
                    poseTime: 50,
                    numPoses: 12,
                },
                Death: {
                    poseTime: 100,
                    numPoses: 15,
                }
            },
            pressBounds: {
                bound1: (Constants.MAX_WIDTH / 812) * 150, // vertical seperation between move left and move right
                bound2: (Constants.MAX_WIDTH / 812) * 300, // vertical seperation between move right and nothing
                bound3: (Constants.MAX_WIDTH / 812) * 500, // vertical seperation between nothing and jump
                bound4: (Constants.MAX_HEIGHT / 375) * 175, // Horizontal seperation between jump and go under
            },
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
                bulletVelX: 3,
                bulletVelY: 0,
                extras: {
                    piercingShot: false,
                    targetEnemy: null,
                    homing: false,
                    perfectHoming: false,
                    hasHomingTime: false,
                    HomingTime: 1000,
                    deltaTHomingTime: 0,
                    homingDeltaAngle: 0.5,
                    numBounces: 1,
                    bulletWidth: 25,
                    bulletSpeed: 4,
                    damage: 50,
                    rotation: 0,
                    remove: false,
                    label: 'playerBullet',
                    friction: 0,
                    inertia: Infinity,
                    frictionAir: 0.0,
                    isSensor: true,
                }
            },
        },
    },
}

