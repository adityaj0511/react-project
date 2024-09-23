
import React from 'react';

import { Provider } from 'react-redux';
import Theme from './Components/Theme';
import Counter from './Components/Counter';
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Theme />
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
