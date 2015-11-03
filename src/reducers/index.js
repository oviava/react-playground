import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import {types} from '../actions';


function slideIndex(state = 1, action) {
  switch (action.type) {
  case types.PREV_SLIDE:
    return state - 1;
  case types.NEXT_SLIDE:
    return state + 1;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  router: routerStateReducer,
  slideIndex,
});

export default rootReducer;
