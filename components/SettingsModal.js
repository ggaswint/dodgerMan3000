import React, { useState } from "react";
import { Alert, Text, View, StyleSheet, Switch, ImageBackground, TouchableOpacity, Platform } from "react-native";
import Images from '../assets/Images';
import playerStats from '../Game/Worlds/playerStatsConfig';
import * as startUp from '../Game/startUpHelper';
import { useSelector, useDispatch } from 'react-redux';
import * as playerSaveInfoActions from '../store/playerSaveInfo_action';
import lockedConfig from '../Game/Worlds/lockedConfig';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.filterText}>{props.label}</Text>
            <Switch
                value={props.state}
                onValueChange={props.onChange}
                trackColor={{ true: '#C2185B' }}
                thumbColor={Platform.OS === 'android' ? '#C2185B' : ''}
            />
        </View>
    );
};

const CharacterPickerModal = (props) => {
    const playerSaveInfo = useSelector(state => state.playerSaveInfo.data)
    const [isMusic, setIsMusic] = useState(playerStats.isMusic)
    const [isSoundEffects, setIsSoundEffects] = useState(playerStats.isSoundEffects)
    const dispatch = useDispatch();

    const saveInfoHandler = (id, midWorld, world, level, powerUps, character, playerStats, lockedStats) => {
        dispatch(playerSaveInfoActions.addInfo(id, midWorld, world, level, powerUps, character, playerStats, lockedStats));
    };

    const reset = ([isMusic, isSoundEffects]) => {
        Alert.alert('Are you sure you would like to reset your Health and Damage? You will keep your coins', '',
            [{ text: 'Cancel', style: 'default' },
            {
                text: 'Yes', style: 'destructive', onPress: () => {
                    playerStats.maxHealth = 500
                    playerStats.maxDamage = 50
                    startUp.addPlayerStats(playerStats)
                    saveInfoHandler(playerSaveInfo.id, playerSaveInfo.midWorld, playerSaveInfo.world, playerSaveInfo.level, playerSaveInfo.powerUps, playerSaveInfo.character, JSON.stringify(playerStats), playerSaveInfo.lockedStats)
                    props.callback([isMusic, isSoundEffects])
                }
            }
            ]);
    }

    return (
        <ImageBackground style={styles.container} resizeMode="stretch" source={Images['powerUpContainer']}>
            <FilterSwitch label='Music' state={isMusic} onChange={value => setIsMusic(value)} />
            <FilterSwitch label='Sound Effects' state={isSoundEffects} onChange={value => setIsSoundEffects(value)} />
            <View style={styles.viewText}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: '33%' }} onPress={() => props.callback([isMusic, isSoundEffects])}>
                    <Text style={styles.goBackText}>Go Back</Text>
                </TouchableOpacity>
                {!lockedConfig.worlds[8] && <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: '33%' }} onPress={() => reset([isMusic, isSoundEffects])}>
                    <Text style={styles.resetText}>Reset HP/PP</Text>
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
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10,
    },
    filterText: {
        fontSize: 24,
        marginTop: 0,
        fontFamily: 'disney',
    },
    goBackText: {
        fontSize: 24,
        marginTop: 20,
        fontFamily: 'disney',
    },
    resetText: {
        fontSize: 18,
        marginTop: 20,
        paddingHorizontal: 20,
        fontFamily: 'disney',
    },
    viewText: {
        flexDirection: 'row',
    }
});

export default CharacterPickerModal;