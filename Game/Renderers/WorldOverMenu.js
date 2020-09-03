import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated, ImageBackground, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native';
import Images from '../../assets/Images';
import Constants from '../Utils/Constants';

const WorldOverMenu = (props) => {
    const coins = useRef(new Animated.Value(0)).current;
    const [numCoins, setNumCoins] = useState(0);
    const [isExtraText, setIsExtraText] = useState(false)
    const [extraText, setExtraText] = useState('')
    let TouchableCmp = TouchableOpacity;

    useEffect(() => {
        if (props.worldNum < 8) {
            setExtraText(`World ${props.worldNum + 1} Unlocked.`)
            setIsExtraText(true)
        }
        else if (props.worldNum === 8) {
            setExtraText('Extra World 9 Unlocked. Can choose enemy as character now. Can reset HP/PP under settings')
            setIsExtraText(true)
        } else if (props.worldNum === 9) {
            setExtraText('Alien characters are now playable')
            setIsExtraText(true)
        }
    })

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

        <ImageBackground style={styles.container} resizeMode="stretch" source={Images['worldOverBackground']}>
            <View style={styles.worldOverContainer}>
                <Text style={styles.worldOverText}>World Complete!</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ ...styles.worldOverIcon, marginRight: isExtraText ? 0 : 40 }} resizeMode="stretch" source={Images['winnerIcon']} />
                    {isExtraText && <Text style={styles.extraText}>{extraText}</Text>}
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
    worldOverContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    worldOverText: {
        fontSize: 36,
        fontFamily: 'disney',
    },
    worldOverIcon: {
        height: Constants.MAX_HEIGHT * 0.3,
        width: Constants.MAX_WIDTH * 0.2,
    },
    earnings: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: -30
    },
    coinImage: {
        height: Constants.MAX_HEIGHT * 0.2,
        width: Constants.MAX_WIDTH * 0.1,
    },
    coinsEarned: {
        fontSize: 24,
        fontFamily: 'disney',
        textAlignVertical: 'center'
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
        marginLeft: Platform.OS === 'android' ? 50 : 0, // added this to android
    },
    extraText: {
        fontSize: 16,
        fontFamily: 'disney',
        marginTop: 20,
        flexWrap: "wrap",
        flex: 1,
    }
});
export default WorldOverMenu