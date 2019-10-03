import React from 'react';

import {Provider} from 'react-redux';

import CounterProvider from './state/context/counter/counter-context.js'
import NameProvider from './state/context/people/people-context.js'
import Counter from './components/counter.js';
import Person from './components/person.js';

import createStore from './state/store/index.js';
const store=createStore();
// store is the default export from that file, which is already been fed the reducers

function App() {
  return (
   <Provider store={store}>

        <Person />
      <Counter />

    </Provider>
  );
}
// redux is context but super complicated
export default App;
