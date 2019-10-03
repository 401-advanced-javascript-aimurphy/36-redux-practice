  const initialState = { name: '' };


  export default (state= initialState, action)=> {
    switch (action.type) {
      case 'SET':
        return {name: action.payload};
      case 'UPPER':
        return { name: state.name.toUpperCase() };
      case 'LOWER':
        return { name: state.name.toLowerCase() };
      default:
        return state;
    }
  }

  export const set = (newName) => {
    return{type:'SET', payload:newName}
  };

  export const uppercase = () => {
    return{type:'UPPER'}
  };

  export const lowercase = () => {
    return{type:'LOWER'}
  };
