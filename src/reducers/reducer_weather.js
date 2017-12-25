import { FETCH_WEATHER } from '../actions/index';

// State argument is not application state, only the state
// this reducer is responsible for
// state=null= this reducer not interested state
export default function(state=[], action) {

  switch (action.type) {
    case FETCH_WEATHER:
      // concat does not update state it creates new state...
      // state.concat(action.playload.data)
      // we dont mutate state -> return new
      // return state.concat([action.payload.data]);
      if (!action.payload.data) {
          return state;
      } else {
        return [ action.payload.data, ...state ];
      }
      break;
    default:
      return state;
  }
}
