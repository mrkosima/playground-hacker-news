import { combineReducers } from "redux";
import { itemsReducer } from "./items/reducer";
import { storiesReducer } from "./stories/reducer";

export const rootReducer = combineReducers({
    stories: storiesReducer,
    items: itemsReducer,
});