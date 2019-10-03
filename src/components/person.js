import React, {useContext} from 'react';

// import {NameContext} from '../state/context/people/people-context.js';


import {connect} from 'react-redux';

import * as actions from '../state/store/person.store.js';

function Person(props) {
// @722 context empty wont throw errors
  // const context = {};

  return (
    <header>
      <h1>{props.person.name}</h1>
      <button onClick={props.upper}>Upper</button>
      <button onClick={props.lower}>Lower</button>
      <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={(e) => props.set(e.target.value)} />
      </form>
    </header>
  );

}

const mapStatetoProps=(state)=>({person:state.person});

const mapDispatchtoProps=(dispatch,getState)=>({set:(newName)=>dispatch(actions.set(newName)),upper:()=>dispatch(actions.uppercase()),lower:()=>dispatch(actions.lowercase())})

export default connect(mapStatetoProps,mapDispatchtoProps)(Person);
