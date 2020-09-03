import React from 'react';
import { View, StyleSheet, Text, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Constants from '../Utils/Constants';

const CustomHeaderBar = (props) => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.container}>
            {!props.disablePause &&
                <View style={styles.menu}>
                    <TouchableCmp style={styles.menu} onPress={() => { if (!props.disablePause) { props.callback() } }} >
                        <Text style={styles.pauseText}>Pause</Text>
                    </TouchableCmp>
                </View>
            }
            <Text style={styles.level}>{props.worldLevelText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        height: 25
    },
    menu: {
        position: 'absolute',
        color: 'black',
        fontFamily: 'disney',
        fontSize: 16,
        top: 0,
        marginTop: 0,
        left: Constants.MAX_WIDTH * 0.05,
        textShadowColor: '#444444',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
    pauseText: {
        fontSize: 24,
        marginTop: 2,
        fontFamily: 'disney',
        textShadowColor: '#444444',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
    exp: {
        position: 'absolute',
        color: 'black',
        fontFamily: 'disney',
        fontSize: 16,
        top: 0,
        marginTop: 0,
        left: Constants.MAX_WIDTH * 0.2,
        textShadowColor: '#444444',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
    level: {
        position: 'absolute',
        color: 'black',
        fontFamily: 'disney',
        fontSize: 24,
        top: 0,
        marginTop: 2,
        left: Constants.MAX_WIDTH * 0.4,
        textShadowColor: '#444444',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
});


export default CustomHeaderBar