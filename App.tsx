import React from 'react';
import {StatusBar} from 'react-native';

export default (): JSX.Element => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
    </React.Fragment>
  );
};
