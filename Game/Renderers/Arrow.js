import React from 'react';
import { View, StyleSheet } from 'react-native';

const Arrow = (props) => {
    return (
        <View style={{ ...styles.curvedTailArrow, left: props.body.position.x, top: props.body.position.y }}>
            <View style={{ ...styles.curvedTailArrowTail, borderTopColor: props.color }} />
            <View style={{ ...styles.curvedTailArrowTriangle, borderRightColor: props.color }} />
        </View>
    )
}

const styles = StyleSheet.create({

    curvedTailArrow: {
        backgroundColor: 'transparent',
        overflow: 'visible',
        position: 'absolute',
        width: 30,
        height: 25
    },
    curvedTailArrowTriangle: {
        backgroundColor: 'transparent',
        width: 0,
        height: 0,
        borderTopWidth: 18,
        borderTopColor: 'transparent',
        borderRightWidth: 18,
        borderRightColor: 'red',
        borderStyle: 'solid',
        transform: [
            { rotate: '10deg' }
        ],
        position: 'absolute',
        bottom: 4,
        right: 1,
        overflow: 'visible'
    },
    curvedTailArrowTail: {
        backgroundColor: 'transparent',
        position: 'absolute',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 6,
        borderTopColor: 'red',
        borderStyle: 'solid',
        borderTopLeftRadius: 12,
        top: -13,
        left: -37,
        width: 50,
        height: 50,
        transform: [
            { rotate: '45deg' }
        ]
    }
});

export default Arrow