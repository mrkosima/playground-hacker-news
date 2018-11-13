import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([ thunk ]);
const store = mockStore({});

jest.mock("../../api/HackerService", () => ({
    fetchItem: jest.fn().mockImplementation(() => new Promise((resolve) => {
            resolve({id: 777, text: "test123"});
        })),
}));

import { itemLoading, removeItem, itemLoaded, loadItem } from "./actions";
import { fetchItem } from "../../api/HackerService";
import * as types from "./consts";

describe("ducks/items/actions", () => {
    it("should create a loading action", () => {
        expect(itemLoading(123)).toEqual({type: types.ITEM_LOADING, payload: 123});
    });

    it("should create a removeItem action", () => {
        expect(removeItem(123)).toEqual({type: types.ITEM_REMOVE, payload: 123});
    });

    it("should create a itemLoaded action", () => {
        expect(itemLoaded({id: 123, text: "test123"})).toEqual({
                type: types.ITEM_LOADED,
                payload: {id: 123, text: "test123"},
        });
    });

    describe("loadItem", () => {
        const ID = 777;

        beforeEach(() => {
            store.clearActions();
            store.dispatch(loadItem(ID));
        });

        it("should dispatch loading action", () => {
            expect(store.getActions()).toContainEqual(itemLoading(ID));
        });

        it("should fetch item data", () => {
            expect(fetchItem).toHaveBeenCalledWith(ID);
        });

        it("should dispatch item loaded after fetch resolved", () => {
            return fetchItem().then(() => {
                expect(store.getActions()).toContainEqual(itemLoaded({id: 777, text: "test123"}));
            });
        });
    });
});
