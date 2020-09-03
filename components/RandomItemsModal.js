import React, { useRef, useEffect, useState } from "react";
import { Animated, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Platform, TouchableNativeFeedback } from "react-native";
import Images from '../assets/Images';
import Constants from '../Game/Utils/Constants'
import itemsWheelConfig from '../Game/Worlds/itemsWheelConfig'

const RandomItemsModal = (props) => {
    const item1 = useRef(new Animated.Value(0)).current;
    const item2 = useRef(new Animated.Value(0)).current;
    const item3 = useRef(new Animated.Value(0)).current;

    const [item1Props, setItem1Props] = useState([])
    const [item2Props, setItem2Props] = useState([])
    const [item3Props, setItem3Props] = useState([])

    const [item1Idx, setItem1Idx] = useState(0)
    const [item2Idx, setItem2Idx] = useState(0)
    const [item3Idx, setItem3Idx] = useState(0)

    let items = itemsWheelConfig.items
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    const setRandomItems = (randNum, availableItems, setHookItem, setHookIdx) => {
        const item = availableItems[randNum]
        const itemIdx = item.itemIdx;
        setHookIdx(randNum)
        setHookItem(item.items[itemIdx])
    }

    const handleCallback = (itemIdx, itemProps) => {
        const item = items[itemIdx]
        item.itemIdx++;
        if (item.itemIdx >= item.totalItems) {
            items.splice(itemIdx, 1);
        }
        props.callback(itemProps[2])
    }

    useEffect(() => {
        var arr = [];
        while (arr.length < 3) {
            var r = Math.floor(Math.random() * items.length);
            var r2 = Math.random();
            if (r2 < items[r].weight) {
                if (arr.indexOf(r) === -1) arr.push(r);
            }
        }
        setRandomItems(arr[0], items, setItem1Props, setItem1Idx)
        setRandomItems(arr[1], items, setItem2Props, setItem2Idx)
        setRandomItems(arr[2], items, setItem3Props, setItem3Idx)
    }, [])

    if (props.startAnimation) {
        Animated.sequence([
            Animated.timing(item1, {
                toValue: 1,
                duration: 1000
            }),
            Animated.timing(item2, {
                toValue: 1,
                duration: 1000
            }),
            Animated.timing(item3, {
                toValue: 1,
                duration: 1000
            })
        ]).start()
    }

    return (

        <ImageBackground style={styles.container} resizeMode="stretch" source={Images['powerUpContainer']}>
            <View style={styles.items}>
                <TouchableCmp onPress={() => { handleCallback(item1Idx, item1Props) }}>
                    <View style={styles.itemView}>
                        <Animated.Image
                            style={{ ...styles.image, opacity: item1 }}
                            resizeMode="stretch"
                            source={Images[item1Props[0]]}
                        />
                        <Animated.Text style={{ ...styles.itemText, opacity: item1 }}>{item1Props[1]}</Animated.Text>
                    </View>
                </TouchableCmp>
                <TouchableCmp onPress={() => { handleCallback(item2Idx, item2Props) }}>
                    <View style={styles.itemView}>
                        <Animated.Image
                            style={{ ...styles.image, opacity: item2 }}
                            resizeMode="stretch"
                            source={Images[item2Props[0]]}
                        />
                        <Animated.Text style={{ ...styles.itemText, opacity: item2 }}>{item2Props[1]}</Animated.Text>
                    </View>
                </TouchableCmp>
                <TouchableCmp onPress={() => { handleCallback(item3Idx, item3Props) }}>
                    <View style={styles.itemView}>
                        <Animated.Image
                            style={{ ...styles.image, opacity: item3 }}
                            resizeMode="stretch"
                            source={Images[item3Props[0]]}
                        />
                        <Animated.Text style={{ ...styles.itemText, opacity: item3 }}>{item3Props[1]}</Animated.Text>
                    </View>
                </TouchableCmp>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.bottomText}>Pick Your Power Up</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 100,
        width: 100,
    },
    items: {
        flexDirection: 'row',
    },
    itemView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Constants.MAX_HEIGHT * 0.1,
        marginHorizontal: 10
    },
    itemText: {
        fontSize: 12
    },
    bottomView: {
        marginTop: Constants.MAX_HEIGHT * 0.02,
        marginBottom: Constants.MAX_HEIGHT * 0.1
    },
    bottomText: {
        fontSize: 36,
    }
});

export default RandomItemsModal;