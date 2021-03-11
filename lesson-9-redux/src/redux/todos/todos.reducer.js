import {v4 as uuid} from "uuid";
import {STATUS_CHANGE, REMOVE_TO_DO, OPEN_MODAL, FILTER_CHANGE, CLOSE_MODAL, ADD_TO_DO} from './todos.types';

const initialState = {
    items: [
        {
            id: uuid(),
            label: "learning React!",
            createdAt: Date.now(),
            completed: false,
        },
    ],
    filter: "",
    status: "ALL",
    modal: false,
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case REMOVE_TO_DO:
            const idx = state.items.findIndex((item) => item.id === action.payload);
            const items = [
                ...state.items.slice(0, idx),
                ...state.items.slice(idx + 1),
            ];
            return {
                ...state,
                items,
            }
        case STATUS_CHANGE:
            return {
                ...state,
            }
        case OPEN_MODAL:
            return {
                ...state,
            }
        case FILTER_CHANGE:
            return {
                ...state,
                filter: action.payload,
            }
        case CLOSE_MODAL:
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default rootReducer;