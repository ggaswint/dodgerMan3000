import React from "react";
import { Alert, Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import Images from '../assets/Images';
import Constants from '../Game/Utils/Constants'
import * as playerSaveInfoActions from '../store/playerSaveInfo_action';
import { useSelector, useDispatch } from 'react-redux';
import * as startUp from '../Game/startUpHelper';

const UpgradesModal = (props) => {
    const playerSaveInfo = useSelector(state => state.playerSaveInfo.data)
    const dispatch = useDispatch();
    const healthCost = 5000
    const damageCost = 5000

    const saveInfoHandler = (id, midWorld, world, level, powerUps, character, playerStats, lockedStats) => {
        dispatch(playerSaveInfoActions.addInfo(id, midWorld, world, level, powerUps, character, playerStats, lockedStats));
    };

    const buyMoreHealth = () => {
        if (playerStats.money >= healthCost) {
            if (playerStats.money > 25000) {
                playerStats.money -= healthCost
                playerStats.maxHealth += 50
                startUp.addPlayerStats(playerStats)
                saveInfoHandler(playerSaveInfo.id, playerSaveInfo.midWorld, playerSaveInfo.world, playerSaveInfo.level, playerSaveInfo.powerUps, playerSaveInfo.character, JSON.stringify(playerStats), playerSaveInfo.lockedStats)
            } else {
                Alert.alert('Are you sure you would like to purchase more health?', '',
                    [{ text: 'Cancel', style: 'default' },
                    {
                        text: 'Yes', style: 'destructive', onPress: () => {
                            playerStats.money -= healthCost
                            playerStats.maxHealth += 50
                            startUp.addPlayerStats(playerStats)
                            saveInfoHandler(playerSaveInfo.id, playerSaveInfo.midWorld, playerSaveInfo.world, playerSaveInfo.level, playerSaveInfo.powerUps, playerSaveInfo.character, JSON.stringify(playerStats), playerSaveInfo.lockedStats)
                        }
                    }
                    ]);
            }
        }
        else {
            Alert.alert('Insufficient Funds', '',
                [{ text: 'Cancel', style: 'default' }]);
        }
    }

    const buyMoreDamage = () => {
        if (playerStats.money >= healthCost) {
            if (playerStats.money > 25000) {
                playerStats.money -= damageCost
                playerStats.maxDamage += 5
                startUp.addPlayerStats(playerStats)
                saveInfoHandler(playerSaveInfo.id, playerSaveInfo.midWorld, playerSaveInfo.world, playerSaveInfo.level, playerSaveInfo.powerUps, playerSaveInfo.character, JSON.stringify(playerStats), playerSaveInfo.lockedStats)
            } else {
                Alert.alert('Are you sure you would like to purchase more damage?', '',
                    [{ text: 'Cancel', style: 'default' },
                    {
                        text: 'Yes', style: 'destructive', onPress: () => {
                            playerStats.money -= damageCost
                            playerStats.maxDamage += 5
                            startUp.addPlayerStats(playerStats)
                            saveInfoHandler(playerSaveInfo.id, playerSaveInfo.midWorld, playerSaveInfo.world, playerSaveInfo.level, playerSaveInfo.powerUps, playerSaveInfo.character, JSON.stringify(playerStats), playerSaveInfo.lockedStats)
                        }
                    }
                    ]);
            }
        }
        else {
            Alert.alert('Insufficient Funds', '',
                [{ text: 'Cancel', style: 'default' }]);
        }
    }

    let sourceImage;
    let rotation;
    let width;
    let height;
    let marginLeft;
    if (playerSaveInfo.character <= 3) {
        sourceImage = 'player' + playerSaveInfo.character + '_1Idle'
        rotation = '0deg'
        width = Constants.MAX_HEIGHT * 0.3
        height = Constants.MAX_HEIGHT * 0.3
        marginLeft = -20
    } else {
        sourceImage = 'enemy' + (playerSaveInfo.character - 3) + '_1Walk'
        rotation = '180deg'
        width = Constants.MAX_HEIGHT * 0.2
        height = Constants.MAX_HEIGHT * 0.2
        marginLeft = -7
    }

    return (
        <ImageBackground style={styles.container} resizeMode="stretch" source={Images['powerUpContainer']}>
            <Image
                style={{ width: width, height: height, transform: [{ rotateY: rotation }] }}
                resizeMode="stretch"
                source={Images[sourceImage]}
            />
            <View style={styles.textView}>
                <Text style={{ ...styles.text, marginLeft: marginLeft }}> Max Health: {playerStats.maxHealth} </Text>
                <Text style={{ ...styles.text, marginLeft: marginLeft }}> Damage: {playerStats.maxDamage}</Text>
            </View>

            <View style={styles.upgradeView}>
                <Text style={styles.textUpgrade}>Buy More</Text>
                <TouchableOpacity style={{ marginLeft: -45, marginBottom: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '33%' }} onPress={() => buyMoreHealth()}>
                    <Image style={styles.coinImage} resizeMode="stretch" source={Images['coins']} />
                    <Text style={styles.moneyUpgrade}>{healthCost}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: -45, marginTop: -10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '33%' }} onPress={() => buyMoreDamage()}>
                    <Image style={styles.coinImage} resizeMode="stretch" source={Images['coins']} />
                    <Text style={styles.moneyUpgrade}>{damageCost}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textView: {
        flexDirection: 'column',
        width: '50%',
    },
    text: {
        fontSize: 16,
        marginTop: 20,
        fontFamily: 'disney',
    },
    upgradeView: {
        flexDirection: 'column',
        width: 400,
    },
    textUpgrade: {
        fontSize: 16,
        marginBottom: 0,
        marginLeft: -25,
        fontFamily: 'disney',
    },
    moneyUpgrade: {
        fontSize: 16,
        fontFamily: 'disney',
    },
    coinImage: {
        height: Constants.MAX_HEIGHT * 0.1,
        width: Constants.MAX_WIDTH * 0.05,
    },
});

export default UpgradesModal;