import { RESTAURANT_LIST_FAIL, RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_REQUEST } from "../Constants/restaurantConstants";

export const restaurantListReducer = (state = { restaurant: [] }, action) => {
    switch (action.type) {
        case RESTAURANT_LIST_SUCCESS:
            return { restaurant: action.payload }
        case RESTAURANT_LIST_FAIL:
            return { restaurant: action.payload }
        default: return state
    }
}