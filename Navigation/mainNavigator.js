import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import backboneGame from '../Game/backboneGame';
import MainMenu from '../Screen/MainMenu';

const GameStackNavigator = createStackNavigator();

export const GameNavigator = () => {
    return (
        <GameStackNavigator.Navigator screenOptions={{
            headerShown: false
        }}>
            <GameStackNavigator.Screen
                name="mainMenu"
                component={MainMenu}
                options={{ gestureEnabled: false }}
            />
            <GameStackNavigator.Screen
                name="backboneGame"
                component={backboneGame}
                options={{ gestureEnabled: false }}
            />
        </GameStackNavigator.Navigator>
    );
};
