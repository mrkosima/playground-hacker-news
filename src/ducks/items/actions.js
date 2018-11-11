import { ITEM_LOADING, ITEM_LOADED, ITEM_REMOVE } from "./consts";
import { fetchItem } from "../../api/HackerService";

export const loading = id => ({
  type: ITEM_LOADING,
  payload: id
});

export const clearItem = id => ({
  type: ITEM_REMOVE,
  payload: id
});

export const itemLoaded = item => ({
  type: ITEM_LOADED,
  payload: item
});

export const loadItem = id => dispatch => {
  dispatch(loading(id));
  fetchItem(id).then(item => dispatch(itemLoaded(item)));
};
