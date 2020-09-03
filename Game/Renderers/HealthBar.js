import React, { useState, useRef, useEffect } from "react";
import { View, Animated } from "react-native";


const HealthBar = (props) => {
    const available_width = props.width;

    const [myCurrentHealth, setMyCurrentHealth] = useState(props.currentHealth);

    const currentHealth = new Animated.Value(props.currentHealth);

    const prevHealthRef = useRef();
    useEffect(() => {
        prevHealthRef.current = currentHealth;
    });
    const prevHealth = prevHealthRef.current;

    useEffect(() => {
        if (prevHealth !== myCurrentHealth) {
            currentHealth.addListener(progress => {
                setMyCurrentHealth(progress.value);
            });
            currentHealth.setValue(props.currentHealth);
        }
    })


    const getCurrentHealthStyles = () => {
        var animated_width = currentHealth.interpolate({
            inputRange: [0, props.totalHealth / 2, props.totalHealth],
            outputRange: [0, available_width / 2, available_width]
        });

        const color_animation = currentHealth.interpolate({
            inputRange: [0, props.totalHealth / 2, props.totalHealth],
            outputRange: [
                "rgb(199, 45, 50)",
                "rgb(224, 150, 39)",
                "rgb(101, 203, 25)"
            ]
        });

        return {
            width: animated_width,
            height: 8, // height of the health bar
            backgroundColor: color_animation,
            borderRadius: 2,
        };
    };


    return (
        <View>
            <View style={{ ...styles.container, ...props.styles }}>
                <View style={{ ...styles.rail, width: props.width + 2 }}>
                    <Animated.View style={[getCurrentHealthStyles()]} />
                </View>
            </View>
        </View>
    );
}


const styles = {
    container: {
        height: 10,
        marginTop: -15,
        flexDirection: "row"
    },
    rail: {
        height: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#616161"
    },
    healthOK: {
        backgroundColor: "#5db56d"
    },
    healthWarning: {
        backgroundColor: "#fcc419"
    },
    healthCritical: {
        backgroundColor: "#fa5252"
    },
    percent: {
        paddingLeft: 3,
    },
    percentText: {
        fontSize: 10,
        color: "black",
    }
};

export default HealthBar;