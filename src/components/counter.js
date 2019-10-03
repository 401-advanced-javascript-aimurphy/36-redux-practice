import React, {useContext} from 'react';
// @725
// import {CounterContext} from '../state/context/counter/counter-context.js';


import {connect} from 'react-redux';

import * as actions from '../state/store/counter.store.js';
// @727 ignores other because default
function Counter(props) {

  // const context = useContext(CounterContext);
// context.actions.decrement=props.dec@735
  return (
    <>
      <button onClick={props.dec}>-</button>
      <span>{props.counter.count}</span>
      <button onClick={props.inc}>+</button>
    </>
  );

}
// @ 729
const mapStatetoProps=(state)=>({counter:state.counter});

const mapDispatchtoProps=(dispatch,getState)=>({inc:()=>dispatch(actions.increment()),dec:()=>dispatch(actions.decrement())})

// @ 733
export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);
