import React from 'react';
import {Provider} from 'react-redux';

import Routes from './src/Routes/routes';
import Store from './src/Store/store';

export default function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}
