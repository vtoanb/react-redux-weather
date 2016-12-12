import FETCH_WEATHER from '../actions/index';

export default function(state = [], action){
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // return [ action.payload.data ]; , just signle city
      // return state.push(action.payload.data); multiple cities, mutating state
      // return [ action.payload.data, ...state ] this one like concat
      return state.concat(action.payload.data); // return new instance state
  }
  return state;
}