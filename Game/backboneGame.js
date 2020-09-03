import React, { useState, useEffect, useRef } from 'react';
import { AppState, StyleSheet, Text, View, StatusBar, Alert, Image, Animated, TouchableOpacity } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Constants from './Utils/Constants'
import Physics from './Physics/Physics';
import CameraRenderer from './Camera/CameraRenderer';
import Camera from './Camera/Camera';
import createLevel from './createLevel';
import { setupBaseWorld } from './SetupBaseWorld';
import CustomHeaderBar from './Renderers/CustomHeaderBar'
import PauseMenu from './Renderers/PauseMenu'
import GameOverMenu from './Renderers/GameOverMenu'
import WorldOverMenu from './Renderers/WorldOverMenu'
import powerUpsConfig from './Worlds/powerUpsConfig';
import defaultState from './Physics/defaultState';
import worldsConfig from './Worlds/worldsConfig';
import itemsWheelConfig from './Worlds/itemsWheelConfig';
import itemWheelBaseConfig from './Worlds/itemWheelBaseConfig';
import * as playerSaveInfoActions from '../store/playerSaveInfo_action';
import { useSelector, useDispatch } from 'react-redux';
import appliedPowerUps from './Worlds/appliedPowerUps'
import lockedConfig from './Worlds/lockedConfig'
import playerStats from './Worlds/playerStatsConfig'

import Player from '../assets/Player'; // Sound Player

import Modal from 'react-native-modal';
import RandomItemsModal from '../components/RandomItemsModal';

const backboneGame = (props) => {
    const [running, setRunning] = useState(true);
    let [gameEngine, setGameEngine] = useState(null);
    const [isItemPickerModal, setIsItemPickerModal] = useState(false);
    const [isGameOverModal, setIsGameOverModal] = useState(false);
    const [isWorldOverModal, setIsWorldOverModal] = useState(false);
    const [isPauseModal, setIsPauseModal] = useState(false);
    const [isPauseDisabled, setIsPauseDisabled] = useState(false);
    const [levelText, setLevelText] = useState(props.route.params.level);
    const [earnings, setEarnings] = useState(0);
    const playerSaveInfo = useSelector(state => state.playerSaveInfo.data)

    const worldNum = props.route.params.world

    let entities = setupBaseWorld(worldNum, levelText);
    if (levelText > worldsConfig['world' + worldNum].numLevels) {
        entities = createLevel(entities, worldsConfig['world' + worldNum]['level' + 1]);
    } else {
        entities = createLevel(entities, worldsConfig['world' + worldNum]['level' + levelText]);
    }
    entities = { ...entities, gameEngine: { ...gameEngine } }

    const dispatch = useDispatch();
    const saveInfoHandler = (id, midWorld, world, level, powerUps, character, playerStats, lockedStats) => {
        dispatch(playerSaveInfoActions.addInfo(id, midWorld, world, level, powerUps, character, playerStats, lockedStats));
    };

    useEffect(() => {
        AppState.addEventListener('change', handleChange);

        return () => {
            AppState.removeEventListener('change', handleChange);
        }
    }, []);


    const handleChange = (newState) => {
        if (newState === "active") {
            setRunning(true);
        } else {
            setRunning(false)
        }
    }

    const onEvent = (e) => {
        if (e.type === "powerUp") {
            setIsPauseDisabled(true)
            setTimeout(() => {
                powerUpsConfig.isPowerUpSet = true
                setRunning(false)
                setIsItemPickerModal(true)
            }, 1200);
        } else if (e.type === "endOfWorld") {
            setEarnings(e.earnings)
            setRunning(false)
            setIsWorldOverModal(true)
        } else if (e.type === "gameOver") {
            setIsPauseDisabled(true)
            setTimeout(() => {
                setEarnings(e.earnings)
                setRunning(false)
                setIsGameOverModal(true)
            }, 2000);
        } else if (e.type === "nextLevel") {
            setLevelText(levelText + 1);
        } else if (e.save === "saveGameState") {
            saveInfoHandler(playerSaveInfo.id, 1, worldNum, e.level, JSON.stringify(appliedPowerUps), playerSaveInfo.character, playerSaveInfo.playerStats, playerSaveInfo.lockedStats)
        }
    }

    const finishItemPicker = (result) => {
        try {
            powerUpsConfig[result.key].isSet = true
            powerUpsConfig[result.key].value = result.value

        } catch (error) { console.log(error) }
        setRunning(true)
        setIsItemPickerModal(false)
        setIsPauseDisabled(false)
    }

    const menuLevelOverHandler = () => {
        if (playerStats.isMusic) {
            Player.pauseSound(worldsConfig['world' + worldNum].music)
        }
        setIsGameOverModal(false)
        defaultState()
        playerStats.money += earnings
        itemsWheelConfig.items = JSON.parse(JSON.stringify(itemWheelBaseConfig.items))
        JSON.stringify(playerStats)
        saveInfoHandler(playerSaveInfo.id, 0, worldNum, levelText, JSON.stringify(appliedPowerUps), playerSaveInfo.character, JSON.stringify(playerStats), playerSaveInfo.lockedStats)
        setIsPauseDisabled(false)
        props.navigation.navigate('mainMenu')
    }

    const menuWorldOverHandler = () => {
        if (playerStats.isMusic) {
            Player.pauseSound(worldsConfig['world' + worldNum].music)
        }
        setIsWorldOverModal(false)
        defaultState()
        lockedConfig.worlds[worldNum] = false
        playerStats.money += earnings
        itemsWheelConfig.items = JSON.parse(JSON.stringify(itemWheelBaseConfig.items))
        saveInfoHandler(playerSaveInfo.id, 0, worldNum, levelText, JSON.stringify(appliedPowerUps), playerSaveInfo.character, JSON.stringify(playerStats), JSON.stringify(lockedConfig))
        props.navigation.navigate('mainMenu')
    }

    const pauseHandler = () => {
        setRunning(false)
        setIsPauseModal(true)
    };

    const menuPauseHandler = () => {
        Alert.alert('Are you sure?', 'You will lose all progress from this round',
            [{ text: 'Cancel', style: 'default' },
            {
                text: 'Yes', style: 'destructive', onPress: () => {
                    if (playerStats.isMusic) {
                        Player.pauseSound(worldsConfig['world' + worldNum].music)
                    }
                    setIsPauseModal(false)
                    defaultState()
                    itemsWheelConfig.items = JSON.parse(JSON.stringify(itemWheelBaseConfig.items))
                    saveInfoHandler(playerSaveInfo.id, 0, playerSaveInfo.world, playerSaveInfo.level, playerSaveInfo.powerUps, playerSaveInfo.character, playerSaveInfo.playerStats, playerSaveInfo.lockedStats)
                    props.navigation.navigate('mainMenu');
                }
            }
            ]);
    };

    const finishPause = () => {
        setRunning(true)
        setIsPauseModal(false)
    }


    return (
        <View style={styles.container}>
            {/* <Image source={Images['world1_background']} style={styles.backgroundImage} resizeMode="stretch" /> */}
            <GameEngine
                ref={(ref) => { gameEngine = ref; }}
                style={styles.gameContainer}
                running={running}
                entities={entities}
                onEvent={onEvent}
                systems={[Physics, Camera]}
                renderer={CameraRenderer}
            >
                <StatusBar hidden={true} />
            </GameEngine>
            <CustomHeaderBar disablePause={isPauseDisabled} callback={pauseHandler.bind(this)} worldLevelText={'world ' + worldNum + ' level ' + levelText} style={styles.header} />

            <Modal animationIn="slideInUp" animationInTiming={1} animationOut="slideOutUp" isVisible={isItemPickerModal} style={styles.modal}>
                <RandomItemsModal startAnimation={isItemPickerModal} callback={finishItemPicker.bind(this)} />
            </Modal>

            <Modal animationIn="slideInUp" animationOut="slideOutUp" isVisible={isPauseModal} style={styles.modal}>
                <PauseMenu startAnimation={isItemPickerModal} callback={menuPauseHandler.bind(this)} callback2={finishPause.bind(this)} />
            </Modal>

            <Modal animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={isGameOverModal} style={styles.modal}>
                <GameOverMenu worldNum={worldNum} numLevels={worldsConfig['world' + worldNum].numLevels} curLevel={levelText} earnings={earnings} startAnimation={true} callback={menuLevelOverHandler.bind(this)} />
            </Modal>

            <Modal animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={isWorldOverModal} style={styles.modal}>
                <WorldOverMenu worldNum={worldNum} earnings={earnings} startAnimation={true} callback={menuWorldOverHandler.bind(this)} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        position: 'absolute',
        fontSize: 72,
        top: 0,
        left: 0,
        textShadowColor: '#444444',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
    gameContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Constants.MAX_WIDTH + 100,
        height: Constants.MAX_HEIGHT,
    },
    modal: {
        backgroundColor: 'white',
        marginLeft: Constants.MAX_WIDTH * 0.25,
        marginTop: Constants.MAX_HEIGHT * 0.25,
        marginBottom: Constants.MAX_HEIGHT * 0.25,
        height: Constants.MAX_HEIGHT,
        width: Constants.MAX_WIDTH * 0.5,
    }
});

export default React.memo(backboneGame)
