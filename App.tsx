import {Provider} from 'react-redux';

import {Screen} from './src/Screen';

import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
};

export default App;
