import React from 'react';
import { View } from 'react-native';
import HealthBar from './HealthBar';
import Images from '../../assets/Images';
import { NoFlickerImage } from 'react-native-no-flicker-image';

const Enemy = (props) => {
    const width = props.size[0];
    const height = props.size[1];
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;
    const currentHealth = props.body.currentHealth
    const totalHealth = props.body.totalHealth
    let image = Images[props.images.imageName + props.images.pose + props.images.poseName]
    let rotation = props.body.rotationY + 'deg'

    return (
        <View style={{ alignItems: 'center', position: 'absolute', left: x, top: y, width: width, height: height }}>
            <HealthBar currentHealth={currentHealth} totalHealth={totalHealth} width={width} styles={{ width: width, marginTop: props.healthBarMarginTop }} />
            <NoFlickerImage
                style={{ position: 'absolute', transform: [{ rotateY: rotation }], bottom: props.bottom }}
                resizeMethod="scale"
                resizeMode={Platform.OS === 'android' ? "cover" : "stretch"}
                source={image}
            />
        </View>
    )
}

export default React.memo(Enemy)
