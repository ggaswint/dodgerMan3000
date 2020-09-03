import React from "react";
import { ScrollView, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import Images from '../assets/Images';
import Constants from '../Game/Utils/Constants'
import lockedConfig from '../Game/Worlds/lockedConfig';

const enemyPickerModal = (props) => {

    const enemyPicker = (enemyNum) => {
        props.callback(enemyNum)
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
                <View style={styles.enemyView}>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(1) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy1_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(2) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy2_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(3) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy3_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(4) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy4_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(5) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy5_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(6) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy6_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(7) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy7_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(8) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy8_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(9) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy9_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(10) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy10_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(11) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy11_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(12) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy12_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(13) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy13_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(14) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy14_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(15) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy15_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(16) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy16_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(17) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy17_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(18) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy18_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(19) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy19_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(20) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy20_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(21) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy21_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(22) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy22_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(23) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy23_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(24) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy24_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(25) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy25_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(26) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy26_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(27) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy27_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(28) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy28_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(29) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy29_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(30) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy30_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(31) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy31_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(32) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy32_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(33) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy33_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(34) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy34_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(35) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy35_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(36) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy36_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(37) }}>
                        <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy37_1Walk']}>
                        </Image>
                    </TouchableOpacity>
                    {!lockedConfig.worlds[9] &&
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(38) }}>
                                <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy38_1Walk']}>
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.enemyContainer} onPress={() => { enemyPicker(39) }}>
                                <Image style={styles.enemyImage} resizeMode="stretch" source={Images['enemy39_1Walk']}>
                                </Image>
                            </TouchableOpacity>
                        </View>}
                </View>


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
    enemyContainer: {
        overflow: 'hidden',
        paddingHorizontal: 10
    },
    enemyImage: {
        width: Constants.MAX_HEIGHT * 0.2,
        height: Constants.MAX_HEIGHT * 0.2,
    },
    enemyView: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40,
    },
});

export default enemyPickerModal;