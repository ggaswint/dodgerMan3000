import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, ActivityIndicator, Text, View, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-native-modal';
import Constants from '../Game/Utils/Constants';
import Images from '../assets/Images';
import worldsConfig from '../Game/Worlds/worldsConfig';
import playerConfig from '../Game/Worlds/playerConfig';
import enemyPoses from '../Game/Worlds/enemyPosesConfig';
import playerStats from '../Game/Worlds/playerStatsConfig';
import lockedConfig from '../Game/Worlds/lockedConfig';
import CharacterPickerModal from '../components/CharacterPickerModal';
import WorldPickerModal from '../components/WorldPickerModal';
import UpgradesModal from '../components/UpgradesModal';
import EnemyPickerModal from '../components/EnemyPickerModal';
import SettingsModal from '../components/SettingsModal';
import Player from '../assets/Player'; // Sound Player
import * as startUp from '../Game/startUpHelper';
import * as playerSaveInfoActions from '../store/playerSaveInfo_action';
import { AdMobRewarded, setTestDeviceIDAsync } from 'expo-ads-admob';

//setTestDeviceIDAsync('EMULATOR')

const MainMenu = props => {
    const playerSaveInfo = useSelector(state => state.playerSaveInfo.data)
    const [isCharacterModalVisible, setIsCharacterModalVisible] = useState(false)
    const [isSettingsPicker, setIsSettingsPicker] = useState(false)
    const [isUpgradePicker, setIsUpgradePicker] = useState(false)
    const [isWorldPicker, setIsWorldPicker] = useState(false)
    const [isEnemyPicker, setIsEnemyPicker] = useState(false)
    const [money, setMoney] = useState(playerStats.money)
    const [worldNum, setWorldNum] = useState(playerSaveInfo.world)
    const [stillLoading, setStillLoading] = useState(true);
    const [initialized, setInitialized] = useState(false);
    const [disableRewardedBtn, setDisableRewardedBtn] = useState(false)
    const [isRewarded, setIsRewarded] = useState(false)

    useEffect(() => {
        setMoney(playerStats.money)
    }, [playerStats.money])

    if (!stillLoading && !initialized) {
        setInitialized(true)
        if (playerSaveInfo.character <= 3) {
            playerConfig.player.entity.images.imageName = 'player' + playerSaveInfo.character + '_'
            playerConfig.player.entity.images.Walk.numPoses = 12
            playerConfig.player.entity.images.Walk.poseTime = 50
            playerConfig.player.entity.images.Death.numPoses = 15
            playerConfig.player.entity.images.Death.poseTime = 100
            playerConfig.player.entity.size = [45, 50]
            playerConfig.player.entity.bottom = 3
        } else {
            playerConfig.player.entity.images.imageName = 'enemy' + (playerSaveInfo.character - 3) + '_'
            playerConfig.player.entity.images.Walk.numPoses = enemyPoses['enemy' + (playerSaveInfo.character - 3)].poses.Walk.numPoses
            playerConfig.player.entity.images.Walk.poseTime = enemyPoses['enemy' + (playerSaveInfo.character - 3)].poses.Walk.poseTime
            playerConfig.player.entity.images.Death.numPoses = enemyPoses['enemy' + (playerSaveInfo.character - 3)].poses.Death.numPoses
            playerConfig.player.entity.images.Death.poseTime = enemyPoses['enemy' + (playerSaveInfo.character - 3)].poses.Death.poseTime
            playerConfig.player.entity.size = enemyPoses['enemy' + (playerSaveInfo.character - 3)].size
            playerConfig.player.entity.bottom = enemyPoses['enemy' + (playerSaveInfo.character - 3)].bottom
        }
        startUp.addPlayerStats(JSON.parse(playerSaveInfo.playerStats))
        startUp.addLockedStatus(JSON.parse(playerSaveInfo.lockedStats))
        setMoney(playerStats.money)
        setWorldNum(playerSaveInfo.world)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(playerSaveInfoActions.loadInfo());
        }
        fetchData().then(promise => {
            setStillLoading(false)
        });
    }, [dispatch]);

    const saveInfoHandler = (id, midWorld, world, level, powerUps, character, playerStats, lockedStats) => {
        dispatch(playerSaveInfoActions.addInfo(id, midWorld, world, level, powerUps, character, playerStats, lockedStats));
    };

    const openCharacterModal = () => {
        setIsCharacterModalVisible(true)
    }

    const closeCharacterModal = (characterNum, setCharacter = true) => {
        if (setCharacter) {
            playerConfig.player.entity.images.imageName = 'player' + characterNum + '_'
            playerConfig.player.entity.images.Walk.numPoses = 12
            playerConfig.player.entity.images.Walk.poseTime = 50
            playerConfig.player.entity.images.Death.numPoses = 15
            playerConfig.player.entity.images.Death.poseTime = 100
            playerConfig.player.entity.size = [45, 50]
            playerConfig.player.entity.bottom = 3
            saveInfoHandler(playerSaveInfo.id, playerSaveInfo.midWorld, playerSaveInfo.world, playerSaveInfo.level, playerSaveInfo.powerUps, characterNum, playerSaveInfo.playerStats, playerSaveInfo.lockedStats)
        }
        setIsCharacterModalVisible(false)
    }

    const openEnemyModal = () => {
        setIsEnemyPicker(true)
    }

    const closeEnemyModal = (characterNum, setCharacter = true) => {
        if (setCharacter) {
            playerConfig.player.entity.images.imageName = 'enemy' + characterNum + '_'
            playerConfig.player.entity.images.Walk.numPoses = enemyPoses['enemy' + characterNum].poses.Walk.numPoses
            playerConfig.player.entity.images.Walk.poseTime = enemyPoses['enemy' + characterNum].poses.Walk.poseTime
            playerConfig.player.entity.images.Death.numPoses = enemyPoses['enemy' + characterNum].poses.Death.numPoses
            playerConfig.player.entity.images.Death.poseTime = enemyPoses['enemy' + characterNum].poses.Death.poseTime
            playerConfig.player.entity.size = enemyPoses['enemy' + characterNum].size
            playerConfig.player.entity.bottom = enemyPoses['enemy' + characterNum].bottom
            saveInfoHandler(playerSaveInfo.id, playerSaveInfo.midWorld, playerSaveInfo.world, playerSaveInfo.level, playerSaveInfo.powerUps, characterNum + 3, playerSaveInfo.playerStats, playerSaveInfo.lockedStats)
        }
        setIsEnemyPicker(false)
    }

    const openSettingsModal = () => {
        setIsSettingsPicker(true)
    }

    const closeSettingsModal = (settings) => {
        playerStats.isMusic = settings[0]
        playerStats.isSoundEffects = settings[1]
        saveInfoHandler(playerSaveInfo.id, playerSaveInfo.midWorld, playerSaveInfo.world, playerSaveInfo.level, playerSaveInfo.powerUps, playerSaveInfo.character, JSON.stringify(playerStats), playerSaveInfo.lockedStats)
        setIsSettingsPicker(false)
    }

    const openUpgradeModal = () => {
        setIsUpgradePicker(true)
    }

    const closeUpgradeModal = () => {
        setIsUpgradePicker(false)
    }

    const openWorldModal = () => {
        setIsWorldPicker(true)
    }

    const closeWorldModal = (worldNum, setWorld = false) => {
        setIsWorldPicker(false)
        if (setWorld) {
            setWorldNum(worldNum)
        }
    }

    if (playerSaveInfo.midWorld && playerStats.isStartUp) {
        startUp.addInitialPowerUps(JSON.parse(playerSaveInfo.powerUps))
        playerStats.isStartUp = false
        if (playerStats.isMusic) {
            Player.loopSound(worldsConfig['world' + playerSaveInfo.world].music)
        }
        props.navigation.navigate('backboneGame', {
            world: playerSaveInfo.world,
            level: playerSaveInfo.level,
        });
    }

    const gameHandler = (worldNum) => {
        playerStats.isStartUp = false
        if (playerStats.isMusic) {
            Player.loopSound(worldsConfig['world' + worldNum].music)
        }
        props.navigation.navigate('backboneGame', {
            world: worldNum,
            level: 1,
        });
    };

    const rewardHandler = () => {
        if (!isRewarded) {
            let rewardAmount;
            if (!lockedConfig.worlds[9]) {
                rewardAmount = 200000
            } else if (!lockedConfig.worlds[9]) {
                rewardAmount = 50000
            } else if (!lockedConfig.worlds[8]) {
                rewardAmount = 10000
            } else if (!lockedConfig.worlds[7]) {
                rewardAmount = 9000
            } else if (!lockedConfig.worlds[6]) {
                rewardAmount = 8000
            } else if (!lockedConfig.worlds[5]) {
                rewardAmount = 7000
            } else if (!lockedConfig.worlds[4]) {
                rewardAmount = 6000
            } else if (!lockedConfig.worlds[3]) {
                rewardAmount = 5000
            } else if (!lockedConfig.worlds[2]) {
                rewardAmount = 4000
            } else {
                rewardAmount = 3000
            }

            setIsRewarded(true)
            playerStats.money += rewardAmount
            saveInfoHandler(playerSaveInfo.id, playerSaveInfo.midWorld, worldNum, playerSaveInfo.level, playerSaveInfo.powerUps, playerSaveInfo.character, JSON.stringify(playerStats), JSON.stringify(lockedConfig))
            setMoney(playerStats.money)
        }
    }

    useEffect(() => {
        //setTestDeviceIDAsync('EMULATOR')
        const adModId = Platform.OS === 'ios' ? 'ca-app-pub-1048805960449378/5898885949' : 'ca-app-pub-1048805960449378/1319818002'
        AdMobRewarded.setAdUnitID(adModId)

        AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', rewardHandler)

        AdMobRewarded.addEventListener('rewardedVideoDidClose', () => {
            setIsRewarded(false)
        })

    }, [])

    const showRewarded = async () => {
        try {
            setDisableRewardedBtn(true)
            await AdMobRewarded.requestAdAsync()
            await AdMobRewarded.showAdAsync()
        } catch (error) {
            console.error(error)
        } finally {
            setDisableRewardedBtn(false)
        }
    }

    if (stillLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" />
                <Text style={styles.loadingText}>Loading Your Chat Settings</Text>
            </View>

        );
    } else {
        return (
            <ImageBackground style={styles.background} resizeMode="stretch" source={Images['mainMenu']}>
                <View style={styles.container}>
                    <View style={styles.earningsView}>
                        <Image style={styles.coinImage} resizeMode="stretch" source={Images['coins']} />
                        <Text style={styles.earningsText}>Money: {money}</Text>
                    </View>
                    <TouchableOpacity style={styles.egg} onPress={() => { openWorldModal() }}>
                        <ImageBackground style={styles.egg} resizeMode="stretch" source={Images[`world${worldNum}_background`]}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.worldText}>World {worldNum}</Text>
                    {!disableRewardedBtn && <TouchableOpacity style={styles.buttonContainerAds} onPress={showRewarded}>
                        <ImageBackground style={styles.buttonAdsImage} resizeMode="stretch" source={Images['characterButton']}>
                            <Text style={styles.buttonAdsText}>'ad' coins</Text>
                        </ImageBackground>
                    </TouchableOpacity>}
                    <TouchableOpacity style={styles.buttonContainerUpgrades} onPress={openUpgradeModal}>
                        <ImageBackground style={styles.buttonUpgradesImage} resizeMode="stretch" source={Images['characterButton']}>
                            <Text style={styles.buttonUpgradesText}>Upgrades</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainerCharacter} onPress={openCharacterModal}>
                        <ImageBackground style={styles.buttonCharacterImage} resizeMode="stretch" source={Images['characterButton']}>
                            <Text style={styles.buttonCharacterText}>Character</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainerSettings} onPress={openSettingsModal}>
                        <ImageBackground style={styles.buttonSettingsImage} resizeMode="stretch" source={Images['playButton']}>
                            <Text style={styles.buttonSettingsText}>Settings</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainerControls} onPress={() => { gameHandler(0) }}>
                        <ImageBackground style={styles.buttonControlsImage} resizeMode="stretch" source={Images['playButton']}>
                            <Text style={styles.buttonControlsText}>Controls</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainerPlay} onPress={() => { gameHandler(worldNum) }}>
                        <ImageBackground style={styles.buttonPlayImage} resizeMode="stretch" source={Images['playButton']}>
                            <Text style={styles.buttonPlayText}>Play</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    {!lockedConfig.worlds[8] && <TouchableOpacity style={styles.buttonContainerEnemy} onPress={openEnemyModal}>
                        <ImageBackground style={styles.buttonEnemyImage} resizeMode="stretch" source={Images['playButton']}>
                            <Text style={styles.buttonEnemyText}>More Characters</Text>
                        </ImageBackground>
                    </TouchableOpacity>}

                </View>

                <Modal animationIn="slideInLeft" animationOut="slideOutLeft" onBackdropPress={() => closeCharacterModal(1, false)} isVisible={isCharacterModalVisible} style={styles.modal}>
                    <CharacterPickerModal callback={closeCharacterModal.bind(this)} />
                </Modal>

                <Modal animationIn="slideInUp" animationOut="slideOutUp" onBackdropPress={() => closeWorldModal(1, false)} isVisible={isWorldPicker} style={styles.modalMiddle}>
                    <WorldPickerModal callback={closeWorldModal.bind(this)} />
                </Modal>

                <Modal animationIn="slideInRight" animationOut="slideOutRight" onBackdropPress={() => closeEnemyModal(1, false)} isVisible={isEnemyPicker} style={styles.modalRight}>
                    <EnemyPickerModal callback={closeEnemyModal} />
                </Modal>

                <Modal animationIn="slideInRight" animationOut="slideOutRight" isVisible={isSettingsPicker} style={styles.modalRight}>
                    <SettingsModal callback={closeSettingsModal} />
                </Modal>

                <Modal animationIn="slideInLeft" animationOut="slideOutLeft" onBackdropPress={() => closeUpgradeModal()} isVisible={isUpgradePicker} style={styles.modal}>
                    <UpgradesModal callback={closeUpgradeModal} />
                </Modal>

            </ImageBackground >
        );
    }
}

export const screenOptions = navData => {
    return {
        headerTitle: 'Menu',
        headerStyle: {
            backgroundColor: '#ffedff',
            shadowColor: 'transparent',
        }
    };
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_HEIGHT
    },
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    earningsView: {
        marginTop: 0,
        marginLeft: -20,
        position: 'absolute',
        //backgroundColor: '#fff',
        left: Constants.MAX_WIDTH * 0.05,
        top: Constants.MAX_HEIGHT * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    coinImage: {
        height: Constants.MAX_HEIGHT * 0.2,
        width: Constants.MAX_WIDTH * 0.1,
    },
    earningsText: {
        fontSize: 20,
        fontFamily: 'disney',
        color: 'white'
    },
    worldText: {
        fontSize: 20,
        fontFamily: 'disney',
        color: 'white'
    },
    buttonContainerCharacter: {
        position: 'absolute',
        //backgroundColor: '#fff',
        left: Constants.MAX_WIDTH * 0.0,
        top: Constants.MAX_HEIGHT * 0.7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCharacterImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Constants.MAX_WIDTH * 0.2,
        height: Constants.MAX_HEIGHT * 0.15,
        marginLeft: Constants.MAX_WIDTH * 0.05
    },
    buttonCharacterText: {
        fontSize: 20,
        fontFamily: 'disney',
        color: 'white'
    },
    buttonContainerAds: {
        position: 'absolute',
        //backgroundColor: '#fff',
        left: Constants.MAX_WIDTH * 0.0,
        top: Constants.MAX_HEIGHT * 0.7 - Constants.MAX_HEIGHT * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAdsImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Constants.MAX_WIDTH * 0.2,
        height: Constants.MAX_HEIGHT * 0.15,
        marginLeft: Constants.MAX_WIDTH * 0.05
    },
    buttonAdsText: {
        fontSize: 22,
        fontFamily: 'disney',
        color: 'white'
    },
    buttonContainerUpgrades: {
        position: 'absolute',
        //backgroundColor: '#fff',
        left: Constants.MAX_WIDTH * 0.0,
        top: Constants.MAX_HEIGHT * 0.7 - Constants.MAX_HEIGHT * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonUpgradesImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Constants.MAX_WIDTH * 0.2,
        height: Constants.MAX_HEIGHT * 0.15,
        marginLeft: Constants.MAX_WIDTH * 0.05
    },
    buttonUpgradesText: {
        fontSize: 20,
        fontFamily: 'disney',
        color: 'white'
    },
    buttonContainerControls: {
        position: 'absolute',
        //backgroundColor: '#fff',
        right: Constants.MAX_WIDTH * 0.0,
        top: Constants.MAX_HEIGHT * 0.7 - Constants.MAX_HEIGHT * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonControlsImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Constants.MAX_WIDTH * 0.2,
        height: Constants.MAX_HEIGHT * 0.15,
        marginRight: Constants.MAX_WIDTH * 0.05
    },
    buttonControlsText: {
        fontSize: 20,
        fontFamily: 'disney',
        color: 'white'
    },
    buttonContainerSettings: {
        position: 'absolute',
        //backgroundColor: '#fff',
        right: Constants.MAX_WIDTH * 0.0,
        top: Constants.MAX_HEIGHT * 0.7 - 2 * Constants.MAX_HEIGHT * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSettingsImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Constants.MAX_WIDTH * 0.2,
        height: Constants.MAX_HEIGHT * 0.15,
        marginRight: Constants.MAX_WIDTH * 0.05
    },
    buttonSettingsText: {
        fontSize: 20,
        fontFamily: 'disney',
        color: 'white'
    },
    buttonContainerEnemy: {
        position: 'absolute',
        //backgroundColor: '#fff',
        right: Constants.MAX_WIDTH * 0.0,
        top: Constants.MAX_HEIGHT * 0.7 - 3 * Constants.MAX_HEIGHT * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonEnemyImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Constants.MAX_WIDTH * 0.2,
        height: Constants.MAX_HEIGHT * 0.15,
        marginRight: Constants.MAX_WIDTH * 0.05
    },
    buttonEnemyText: {
        fontSize: 18,
        fontFamily: 'disney',
        textAlign: 'center',
        color: 'white'
    },
    buttonContainerPlay: {
        position: 'absolute',
        //backgroundColor: '#fff',
        right: Constants.MAX_WIDTH * 0.0,
        top: Constants.MAX_HEIGHT * 0.7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPlayImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Constants.MAX_WIDTH * 0.2,
        height: Constants.MAX_HEIGHT * 0.15,
        marginRight: Constants.MAX_WIDTH * 0.05
    },
    buttonPlayText: {
        fontSize: 20,
        fontFamily: 'disney',
        color: 'white'
    },
    gradient: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    egg: {
        overflow: 'hidden',
        width: Constants.MAX_HEIGHT * 0.7 * 0.7,
        height: Constants.MAX_HEIGHT * 0.7,
        backgroundColor: 'red',
        borderTopLeftRadius: 108,
        borderTopRightRadius: 108,
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55
    },
    modal: {
        backgroundColor: 'white',
        marginTop: Constants.MAX_HEIGHT * 0.25,
        marginBottom: Constants.MAX_HEIGHT * 0.25,
        height: Constants.MAX_HEIGHT,
        width: Constants.MAX_WIDTH * 0.5,
    },
    modalRight: {
        backgroundColor: 'white',
        marginTop: Constants.MAX_HEIGHT * 0.25,
        marginBottom: Constants.MAX_HEIGHT * 0.25,
        marginLeft: Constants.MAX_WIDTH * 0.4,
        height: Constants.MAX_HEIGHT,
        width: Constants.MAX_WIDTH * 0.5,
    },
    modalMiddle: {
        backgroundColor: 'white',
        marginTop: Constants.MAX_HEIGHT * 0.1,
        marginBottom: Constants.MAX_HEIGHT * 0.1,
        marginLeft: Constants.MAX_WIDTH * 0.1,
        height: Constants.MAX_HEIGHT,
        width: Constants.MAX_WIDTH * 0.8,
    }
});

export default MainMenu;