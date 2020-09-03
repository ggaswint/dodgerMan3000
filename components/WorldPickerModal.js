import React, { useState } from "react";
import { ScrollView, Alert, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import Images from '../assets/Images';
import Constants from '../Game/Utils/Constants'
import lockedConfig from '../Game/Worlds/lockedConfig';

const WorldPickerModal = (props) => {
    const [isLevel1Locked, setIsLevel1Locked] = useState(lockedConfig.worlds[0])
    const [isLevel2Locked, setIsLevel2Locked] = useState(lockedConfig.worlds[1])
    const [isLevel3Locked, setIsLevel3Locked] = useState(lockedConfig.worlds[2])
    const [isLevel4Locked, setIsLevel4Locked] = useState(lockedConfig.worlds[3])
    const [isLevel5Locked, setIsLevel5Locked] = useState(lockedConfig.worlds[4])
    const [isLevel6Locked, setIsLevel6Locked] = useState(lockedConfig.worlds[5])
    const [isLevel7Locked, setIsLevel7Locked] = useState(lockedConfig.worlds[6])
    const [isLevel8Locked, setIsLevel8Locked] = useState(lockedConfig.worlds[7])
    const [isLevel9Locked, setIsLevel9Locked] = useState(lockedConfig.worlds[8])

    const worldText = [
        'A foresty haven, where the robot resides.',
        'A dry tundra full of poisoneous creatures.',
        'The unstable mines of Great Leria.',
        'Antarctica, the last place you would expect life.',
        'Aha bra, surfs up.',
        'Scuba dive into the deep waters of europa. Note: floating may alter jumping.',
        'Who ruined this place?',
        'Neuschwanstein Castle, where the delirious villian of it all lives.',
        'Join the new era of space exploration, watch out for the aliens. Note: low gravity.'
    ]

    const worldPicker = (isWorldLocked, worldNum) => {
        if (!isWorldLocked) {
            Alert.alert(`Would you like to pick world ${worldNum}?`, worldText[worldNum - 1],
                [{ text: 'Cancel', style: 'default' },
                {
                    text: 'Yes', style: 'destructive', onPress: () => {
                        props.callback(worldNum, true)
                    }
                }
                ]);
        }
        else {
            Alert.alert('World is locked', '',
                [{ text: 'Cancel', style: 'default' }]);
        }
    }

    return (
        <ImageBackground style={styles.container} resizeMode="stretch" source={Images['powerUpContainer']}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
            >
                <View style={styles.worldView}>
                    <TouchableOpacity style={styles.egg} onPress={() => { worldPicker(isLevel1Locked, 1) }}>
                        <ImageBackground style={styles.egg} resizeMode="stretch" source={Images['world1_background']}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.worldText}>World 1</Text>
                </View>

                <View style={styles.worldView}>
                    <TouchableOpacity style={styles.egg} onPress={() => { worldPicker(isLevel2Locked, 2) }}>
                        <ImageBackground style={{ ...styles.egg, opacity: isLevel2Locked ? 0.5 : 1.0 }} resizeMode="stretch" source={Images['world2_background']}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.worldText}>World 2</Text>
                    {isLevel2Locked && <Text style={styles.worldText}>Locked</Text>}
                </View>

                <View style={styles.worldView}>
                    <TouchableOpacity style={styles.egg} onPress={() => { worldPicker(isLevel3Locked, 3) }}>
                        <ImageBackground style={{ ...styles.egg, opacity: isLevel3Locked ? 0.5 : 1.0 }} resizeMode="stretch" source={Images['world3_background']}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.worldText}>World 3</Text>
                    {isLevel3Locked && <Text style={styles.worldText}>Locked</Text>}
                </View>

                <View style={styles.worldView}>
                    <TouchableOpacity style={styles.egg} onPress={() => { worldPicker(isLevel4Locked, 4) }}>
                        <ImageBackground style={{ ...styles.egg, opacity: isLevel4Locked ? 0.5 : 1.0 }} resizeMode="stretch" source={Images['world4_background']}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.worldText}>World 4</Text>
                    {isLevel4Locked && <Text style={styles.worldText}>Locked</Text>}
                </View>

                <View style={styles.worldView}>
                    <TouchableOpacity style={styles.egg} onPress={() => { worldPicker(isLevel5Locked, 5) }}>
                        <ImageBackground style={{ ...styles.egg, opacity: isLevel5Locked ? 0.5 : 1.0 }} resizeMode="stretch" source={Images['world5_background']}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.worldText}>World 5</Text>
                    {isLevel5Locked && <Text style={styles.worldText}>Locked</Text>}
                </View>

                <View style={styles.worldView}>
                    <TouchableOpacity style={styles.egg} onPress={() => { worldPicker(isLevel6Locked, 6) }}>
                        <ImageBackground style={{ ...styles.egg, opacity: isLevel6Locked ? 0.5 : 1.0 }} resizeMode="stretch" source={Images['world6_background']}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.worldText}>World 6</Text>
                    {isLevel6Locked && <Text style={styles.worldText}>Locked</Text>}
                </View>

                <View style={styles.worldView}>
                    <TouchableOpacity style={styles.egg} onPress={() => { worldPicker(isLevel7Locked, 7) }}>
                        <ImageBackground style={{ ...styles.egg, opacity: isLevel7Locked ? 0.5 : 1.0 }} resizeMode="stretch" source={Images['world7_background']}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.worldText}>World 7</Text>
                    {isLevel7Locked && <Text style={styles.worldText}>Locked</Text>}
                </View>

                <View style={styles.worldView}>
                    <TouchableOpacity style={styles.egg} onPress={() => { worldPicker(isLevel8Locked, 8) }}>
                        <ImageBackground style={{ ...styles.egg, opacity: isLevel8Locked ? 0.5 : 1.0 }} resizeMode="stretch" source={Images['world8_background']}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.worldText}>World 8</Text>
                    {isLevel8Locked && <Text style={styles.worldText}>Locked</Text>}
                </View>

                {!isLevel9Locked && <View style={styles.worldView}>
                    <TouchableOpacity style={styles.egg} onPress={() => { worldPicker(isLevel9Locked, 9) }}>
                        <ImageBackground style={{ ...styles.egg, opacity: isLevel9Locked ? 0.5 : 1.0 }} resizeMode="stretch" source={Images['world9_background']}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.worldText}>World 9</Text>
                </View>}

            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    egg: {
        overflow: 'hidden',
        width: Constants.MAX_HEIGHT * 0.7 * 0.7 / 1.3,
        height: Constants.MAX_HEIGHT * 0.7 / 1.3,
        backgroundColor: 'red',
        borderTopLeftRadius: 108 / 1.3,
        borderTopRightRadius: 108 / 1.3,
        borderBottomLeftRadius: 55 / 1.3,
        borderBottomRightRadius: 55 / 1.3
    },
    worldView: {
        flexDirection: 'column',
        marginTop: 10,
        alignItems: 'center',
        marginRight: 40,
    },
    worldText: {
        fontSize: 22,
        marginTop: 5,
        fontFamily: 'disney',
        color: 'black'
    },
});

export default WorldPickerModal;