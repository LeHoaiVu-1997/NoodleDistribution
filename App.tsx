import React from 'react';
import RootNavigator from './src/presentation/navigation/root_navigation';
import {registerDependencies} from './src/di/AppModule';
import {Provider} from 'react-redux';
import {store} from './src/presentation/redux/store';

registerDependencies();

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
