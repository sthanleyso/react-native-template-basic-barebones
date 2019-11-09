import React from 'react';
import { StatusBar } from 'react-native';

import Routes from '~/routes';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </>
  );
}

export default App;
