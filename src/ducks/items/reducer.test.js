import { itemsReducer } from "./reducer";
import * as types from "./consts";

describe("ducks/items/reducer", () => {
    it("should return initialState", () => {
        const actualState = itemsReducer(undefined, {type: "noop"});

        expect(actualState).toEqual({});
    });

    it("should return loaded state", () => {
        const initialState = {"222": {id: 222, text: "text222"}};
        const expectedState = {
            "111": {id: 111, text: "text111"},
            "222": {id: 222, text: "text222"},
        };
        const actualState = itemsReducer(initialState, {type: types.ITEM_LOADED, payload: {id: 111, text: "text111"}});
        expect(actualState).toEqual(expectedState);
    });

    it("should remove element", () => {
        const initialState = {
            "111": {id: 111, text: "text111"},
            "222": {id: 222, text: "text222"},
        };
        const expectedState = {"222": {id: 222, text: "text222"}};
        const actualState = itemsReducer(initialState, {type: types.ITEM_REMOVE, payload: 111});
        expect(actualState).toEqual(expectedState);

    });

    it("should not modify state for not items action", () => {
        const expectedState = {test: 123};
        const actualState = itemsReducer(expectedState, {type: "noop"});

        expect(actualState).toBe(expectedState);
    });

    xdescribe("loadItem", () => {

    });
});
