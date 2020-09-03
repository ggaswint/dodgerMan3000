import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Images from '../../assets/Images';

const Training = (props) => {
    const width = props.size[0];
    const height = props.size[1];
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;

    return (
        <View style={{ position: 'absolute', left: x, top: y, width: width, height: height, backgroundColor: props.color }}>
            <Text style={{ ...styles.text, left: props.left, top: props.top }}>{props.wordsContent}</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'disney',
        color: 'rgb(189, 8, 71)',
    },
});

export default Training