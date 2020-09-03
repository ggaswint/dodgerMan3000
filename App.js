import React, { useState } from 'react';
import AppNavigator from './Navigation/AppNavigator';
import { Asset } from 'expo-asset';
import Images from './assets/Images';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { AppLoading } from 'expo';
import Player from './assets/Player';
import soundLibrary from './assets/sounds';
import * as Font from 'expo-font';
import playerSaveInfoReducer from './store/playerSaveInfo_reducer';
import { init } from './store/db';
import { Provider } from 'react-redux';


init()

const rootReducer = combineReducers({
  playerSaveInfo: playerSaveInfoReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


const cacheImages = (images) => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}



export default function App() {
  const [stateReady, setStateReady] = useState(false);

  const loadAssetsAsync = async () => {
    let images = []
    for (var iD in Images) {
      images.push(Images[iD])
    }
    const imageAssets = cacheImages(images);
    const sounds = Player.load(soundLibrary)

    await Promise.all([
      ...imageAssets,
      ...sounds,
      Font.loadAsync({
        'disney': require('./assets/fonts/waltographUI.ttf'),
      })]);
  }

  if (!stateReady) {
    return <AppLoading startAsync={loadAssetsAsync} onFinish={() => {
      setStateReady(true);
    }} onError={() => { }} />;
  } else {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}