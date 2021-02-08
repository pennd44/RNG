import { StatusBar } from 'expo-status-bar';


import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react'
// import { MenuProvider } from 'react-native-popup-menu';


import { StyleSheet, Text, View } from 'react-native';

import rootReducer from './reducers'
import Main from './Main'

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}
      // loading={ }
      >
        {/* <MenuProvider> */}
        <Main />
        {/* </MenuProvider> */}
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
