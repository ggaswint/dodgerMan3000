import React from 'react';
import { View, Platform } from 'react-native';
import HealthBar from './HealthBar';
import Images from '../../assets/Images';
import { NoFlickerImage } from 'react-native-no-flicker-image';


const Player = (props) => {
    const width = props.size[0];
    const height = props.size[1];
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;
    const currentHealth = props.body.currentHealth
    const totalHealth = props.body.totalHealth
    let image = Images[props.images.imageName + props.images.pose + props.images.poseName]
    const rescale = 0.8
    let rotation = props.body.rotationY + 'deg'

    return (
        <View style={{ alignItems: 'center', position: 'absolute', left: x, top: y, width: width, height: height }}>
            <HealthBar currentHealth={currentHealth} totalHealth={totalHealth} width={width * rescale} styles={{ width: width * rescale, marginTop: -10 }} />
            <NoFlickerImage
                style={{ position: 'absolute', width: width, height: height, transform: [{ rotateY: rotation }], bottom: props.bottom }}
                resizeMethod="scale"
                resizeMode={Platform.OS === 'android' ? "cover" : "stretch"}
                source={image}
            />
        </View>
    )
}

export default React.memo(Player)
