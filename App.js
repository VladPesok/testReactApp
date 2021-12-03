import React from 'react';

import {ApplicationNavigation} from './navigation/ApplicationNavigation';

import {createStore, combineReducers} from 'redux';

import mealsReducer from './store/reducer/meals';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <ApplicationNavigation/>
    </Provider>
  );
}

export default App;