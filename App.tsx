import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationRouter from './src/NavigationRouter';

export default (): JSX.Element => {
  return (
    <React.Fragment>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaProvider>
        <NavigationRouter />
      </SafeAreaProvider>
    </React.Fragment>
  );
};
