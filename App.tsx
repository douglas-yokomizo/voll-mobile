import React from 'react';
import {NativeBaseProvider} from 'native-base'
import { Themes } from './src/styles/themes';
import Routes from './src/Routes';

export default function App() {
  return (
    <NativeBaseProvider theme={Themes}>
      <Routes/>
    </NativeBaseProvider>
  );
}
