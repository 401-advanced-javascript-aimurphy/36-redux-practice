// @705pm onward

import {createStore, combineReducers} from 'redux';

import counterReducer from './counter.store.js';

import personReducer from './person.store.js';
// this imports the default

let reducers = combineReducers({
  counter:counterReducer,
  person:personReducer
  // this is your marketplace, you can add more merchants into here, but for now we only have one, the counter
});
// key is counter, components are using this as magicto gain access @ 7:13

export default ()=>createStore(reducers);
