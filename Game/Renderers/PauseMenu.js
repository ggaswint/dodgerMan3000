import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Images from '../../assets/Images';
import Constants from '../Utils/Constants';

const PauseMenu = (props) => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }


    return (

        <ImageBackground style={styles.container} resizeMode="stretch" source={Images['powerUpContainer']}>
            <View style={styles.topView}>
                <Text style={styles.topText}>Game Paused</Text>
            </View>
            <View style={styles.items}>
                <TouchableCmp onPress={() => { props.callback() }}>
                    <View style={styles.itemView}>
                        <Text style={{ ...styles.itemText }}>Main Menu</Text>
                    </View>
                </TouchableCmp>
                <TouchableCmp onPress={() => { props.callback2() }}>
                    <View style={styles.itemView}>
                        <Text style={{ ...styles.itemText }}>Continue Game</Text>
                    </View>
                </TouchableCmp>
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
        marginLeft: Constants.MAX_HEIGHT * 0.1,
        marginRight: Constants.MAX_HEIGHT * 0.1,
        marginTop: Constants.MAX_HEIGHT * 0.01,
    },
    itemText: {
        fontSize: 16
    },
    topView: {
        marginTop: Constants.MAX_HEIGHT * 0.02,
        marginBottom: Constants.MAX_HEIGHT * 0.1
    },
    topText: {
        fontSize: 36,
    }
});

export default React.memo(PauseMenu)