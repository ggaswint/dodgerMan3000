import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Animated, ImageBackground, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native';
import Images from '../../assets/Images';
import Constants from '../Utils/Constants';
import HealthBar from './HealthBar';

const GameOverMenu = (props) => {
    const coins = useRef(new Animated.Value(0)).current;
    const [numCoins, setNumCoins] = useState(0);
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    if (props.startAnimation) {
        coins.addListener(({ value }) => { setNumCoins(Math.round(value)) });
        Animated.timing(coins, {
            toValue: props.earnings,
            duration: 100
        }).start()
    }

    return (

        <ImageBackground style={styles.container} resizeMode="stretch" source={Images['gameOverBackground']}>
            <View style={styles.gameOverContainer}>
                <Text style={styles.gameOverText}>Game Over!</Text>
                <View style={styles.middleView}>
                    <Image style={styles.gameOverIcon} resizeMode="stretch" source={Images['gameOverIcon']} />
                    <View style={styles.worldLevelView}>
                        <Text style={styles.worldLevelText}>World {props.worldNum}</Text>
                        <Text style={styles.worldLevelText}>Level {props.curLevel} of {props.numLevels} </Text>
                    </View>
                </View>
            </View>
            <View style={styles.earnings}>
                <Image style={styles.coinImage} resizeMode="stretch" source={Images['coins']} />
                <Animated.Text style={styles.coinsEarned}>{numCoins}</Animated.Text>
                <TouchableCmp style={styles.touchable} onPress={() => { props.callback() }}>
                    <Text style={styles.menuText}>Main Menu</Text>
                </TouchableCmp>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gameOverContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    gameOverText: {
        fontSize: 36,
        fontFamily: 'disney',
    },
    gameOverIcon: {
        height: Constants.MAX_HEIGHT * 0.3,
        width: Constants.MAX_WIDTH * 0.2,
        marginTop: -8,
        marginLeft: 10, // added this android
    },
    worldLevelView: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    worldLevelText: {
        fontSize: 20,
        fontFamily: 'disney',
        marginRight: Constants.MAX_WIDTH * 0.0,
        marginLeft: Constants.MAX_WIDTH * 0.05
    },
    middleView: {
        flexDirection: 'row',
        alignItems: "center",
    },
    earnings: {
        flexDirection: 'row',
        alignItems: "center",
    },
    coinImage: {
        height: Constants.MAX_HEIGHT * 0.2 * 0.8, // added this to android
        width: Constants.MAX_WIDTH * 0.1 * 0.8,
        marginTop: -10,
        marginLeft: 10,
    },
    coinsEarned: {
        fontSize: 24,
        fontFamily: 'disney',
        textAlignVertical: 'center',
        marginTop: 0,
    },
    touchable: {
        flex: 1,
        alignItems: 'flex-end'
    },
    containerView: {
        height: Constants.MAX_HEIGHT * 0.5,
        width: Constants.MAX_WIDTH * 0.5,
        backgroundColor: 'yellow'
    },
    menuText: {
        fontSize: 24,
        fontFamily: 'disney',
        marginRight: Constants.MAX_WIDTH * 0.05,
        marginLeft: Platform.OS === 'android' ? 100 : 0, // added this to android
        marginTop: 0,
    },
});

export default GameOverMenu