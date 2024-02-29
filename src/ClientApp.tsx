import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import App from './App';
import config from './config';

const ClientApp = () => {
  return (
    <StoreProvider store={config.store}>
      <App />
    </StoreProvider>
  );
};

export default ClientApp;
