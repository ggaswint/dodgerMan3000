import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GameNavigator } from './mainNavigator';


const AppNavigator = props => {
    return (
        <NavigationContainer>
            <GameNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;