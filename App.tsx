import React from 'react';
import Signup from './src/Signup';
import {NativeBaseProvider, StatusBar} from 'native-base'
import { Themes } from './src/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={Themes}>
      <StatusBar backgroundColor={Themes.colors.blue[800]} />
    <Signup/>
    </NativeBaseProvider>
  );
}
