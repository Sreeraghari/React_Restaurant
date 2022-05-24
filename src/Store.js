import { combineReducers, applyMiddleware,createStore } from "redux"
import thunk from 'redux-thunk'
import { restaurantListReducer } from './Reducers/restaurantReducers'


const reducers = combineReducers({
    restaurantReducer:restaurantListReducer
})

const middleware = [thunk]

const store = createStore(reducers, applyMiddleware(...middleware))

export default store