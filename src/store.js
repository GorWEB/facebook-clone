import {createStore,combineReducers} from 'redux'
import reducer from './reducer'
import themeReducer from './themeReducer'

const reducers=combineReducers({
    reducer,
    themeReducer
});
const store= createStore(reducers)

export default store