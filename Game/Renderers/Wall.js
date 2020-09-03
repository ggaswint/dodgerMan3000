import React from 'react';
import { Animated } from 'react-native';
import Images from '../../assets/Images';

const Wall = (props) => {
    const width = props.size[0];
    const height = props.size[1];
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;
    let image = Images[props.image];

    return (
        <Animated.Image
            style={{
                position: 'absolute', left: x, top: y, width: width, height: height
            }}
            resizeMode="stretch"
            source={image}
        />
    )
}

export default Wall