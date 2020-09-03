import React, { useState } from "react";
import { Alert, Text, View, StyleSheet, Button, Image, ImageBackground, TouchableOpacity } from "react-native";
import Images from '../assets/Images';
import Constants from '../Game/Utils/Constants'
import playerStats from '../Game/Worlds/playerStatsConfig';
import lockedConfig from '../Game/Worlds/lockedConfig';
import { useSelector, useDispatch } from 'react-redux';
import * as playerSaveInfoActions from '../store/playerSaveInfo_action';

const CharacterPickerModal = (props) => {
    const playerSaveInfo = useSelector(state => state.playerSaveInfo.data)
    const [isCharacter2Locked, setIsCharacter2Locked] = useState(lockedConfig.players[1])
    const [isCharacter3Locked, setIsCharacter3Locked] = useState(lockedConfig.players[2])
    const character2Price = 15000
    const character3Price = 30000
    const dispatch = useDispatch();

    const saveInfoHandler = (id, midWorld, world, level, powerUps, character, playerStats, lockedStats) => {
        dispatch(playerSaveInfoActions.addInfo(id, midWorld, world, level, powerUps, character, playerStats, lockedStats));
    };

    const unlockCharacter = (character, characterPrice, setIsCharacterLocked) => {
        if (playerStats.money >= characterPrice) {
            Alert.alert('Are you sure you would like to purchase this character?', '',
                [{ text: 'Cancel', style: 'default' },
                {
                    text: 'Yes', style: 'destructive', onPress: () => {
                        playerStats.money -= characterPrice
                        lockedConfig.players[character] = false
                        setIsCharacterLocked(false)
                        saveInfoHandler(playerSaveInfo.id, playerSaveInfo.midWorld, playerSaveInfo.world, playerSaveInfo.level, playerSaveInfo.powerUps, playerSaveInfo.character, JSON.stringify(playerStats), JSON.stringify(lockedConfig))
                    }
                }
                ]);
        }
        else {
            Alert.alert('Insufficient Funds', '',
                [{ text: 'Cancel', style: 'default' }]);
        }
    }

    return (
        <ImageBackground style={styles.container} resizeMode="stretch" source={Images['powerUpContainer']}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', width: '33%' }} onPress={() => props.callback(1)}>
                    <Image
                        style={{ width: Constants.MAX_HEIGHT * 0.3, height: Constants.MAX_HEIGHT * 0.3 }}
                        resizeMode="stretch"
                        source={Images['player1_1Idle']}
                    />
                    <Text style={styles.name}>Destroyer</Text>
                </TouchableOpacity>

                {!isCharacter2Locked && <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', width: '33%' }} onPress={() => props.callback(2)}>
                    <Image
                        style={{ width: Constants.MAX_HEIGHT * 0.3, height: Constants.MAX_HEIGHT * 0.3 }}
                        resizeMode="stretch"
                        source={Images['player2_1Idle']}
                    />
                    <Text style={styles.name}>Oppreser</Text>
                </TouchableOpacity>}

                {isCharacter2Locked &&
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey', width: '33%' }} onPress={() => unlockCharacter(1, character2Price, setIsCharacter2Locked)}>
                        <Image
                            style={{ marginTop: -30, width: Constants.MAX_HEIGHT * 0.3, height: Constants.MAX_HEIGHT * 0.3 }}
                            resizeMode="stretch"
                            source={Images['player2_1Idle']}
                        />
                        <Text style={styles.name}>Oppreser</Text>
                        <View style={styles.earningsView}>
                            <Image style={styles.coinImage} resizeMode="stretch" source={Images['coins']} />
                            <Text style={styles.earningsText}>{character2Price}</Text>
                        </View>
                    </TouchableOpacity>}

                {!isCharacter3Locked &&
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', width: '34%' }} onPress={() => props.callback(3)}>
                        <Image
                            style={{ width: Constants.MAX_HEIGHT * 0.3, height: Constants.MAX_HEIGHT * 0.3 }}
                            resizeMode="stretch"
                            source={Images['player3_1Idle']}
                        />
                        <Text style={styles.name}>Lover</Text>
                    </TouchableOpacity>}

                {isCharacter3Locked &&
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey', width: '34%' }} onPress={() => unlockCharacter(2, character3Price, setIsCharacter3Locked)}>
                        <Image
                            style={{ marginTop: -30, width: Constants.MAX_HEIGHT * 0.3, height: Constants.MAX_HEIGHT * 0.3 }}
                            resizeMode="stretch"
                            source={Images['player3_1Idle']}
                        />
                        <Text style={styles.name}>Lover</Text>
                        <View style={styles.earningsView}>
                            <Image style={styles.coinImage} resizeMode="stretch" source={Images['coins']} />
                            <Text style={styles.earningsText}>{character3Price}</Text>
                        </View>
                    </TouchableOpacity>}

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    items: {
        flexDirection: 'row',
    },
    itemView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Constants.MAX_HEIGHT * 0.1,
    },
    itemText: {
        fontSize: 16,
    },
    name: {
        color: 'white'
    },
    bottomView: {
        marginTop: Constants.MAX_HEIGHT * 0.02,
        marginBottom: Constants.MAX_HEIGHT * 0.1
    },
    bottomText: {
        fontSize: 36,
    },
    earningsView: {
        marginTop: -10,
        marginLeft: -20,
        position: 'absolute',
        //backgroundColor: '#fff',
        left: Constants.MAX_WIDTH * 0.02,
        top: Constants.MAX_HEIGHT * 0.42,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    coinImage: {
        height: Constants.MAX_HEIGHT * 0.1,
        width: Constants.MAX_WIDTH * 0.05,
    },
    earningsText: {
        fontSize: 18,
        fontFamily: 'disney',
        color: 'white'
    },
});

export default CharacterPickerModal;