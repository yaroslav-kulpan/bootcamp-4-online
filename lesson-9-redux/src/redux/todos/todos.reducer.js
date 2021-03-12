import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

// import {STATUS_CHANGE, REMOVE_TO_DO, FILTER_CHANGE, ADD_TO_DO} from './todos.types';
import {addToDo, removeToDo, handleFilterChange, handleStatusChange} from './todos.actions';

const initialState = {
    items: [],
    filter: "",
    status: "ALL",
    modal: false,
};

// const addItem = (state, action) => [...state, action.payload]

// const removeItemId = (state, action) => {
//     const idx = state.findIndex((item) => item.id === action.payload);
//     return [
//         ...state.slice(0, idx),
//         ...state.slice(idx + 1),
//     ];
// }

// createReducer arg 1 = initialState is Array
const items = createReducer(initialState.items, {
    // if call action addToDo returned type 'ADD_TO_DO';
    // oldState or action --- make something ---> new State
    // (state, action) => state
    [addToDo.type]: (state, action) => [...state, action.payload],
    [removeToDo.type]: (state, action) => {
        const idx = state.findIndex((item) => item.id === action.payload);
        return [
            ...state.slice(0, idx),
            ...state.slice(idx + 1),
        ];
    },
})

// const itemsReducer = (state = initialState.items, action) => {
//     switch (action.type) {
//         case ADD_TO_DO:
//             return [...state, action.payload];
//         case REMOVE_TO_DO:
//             const idx = state.findIndex((item) => item.id === action.payload);
//             return [
//                 ...state.slice(0, idx),
//                 ...state.slice(idx + 1),
//             ];
//         default:
//             return state;
//     }
// }

// const itemsFilterReducer = (state = initialState.filter, action) => {
//     switch (action.type) {
//         case FILTER_CHANGE:
//             return action.payload;
//         default:
//             return state;
//     }
// }

const filter = createReducer(initialState.filter, {
    [handleFilterChange.type]: (_, action) => action.payload,
});

const status = createReducer(initialState.status, {
    [handleStatusChange]: (_, action) => action.payload,
});

// const statusFilterReducer = (state = initialState.status, action) => {
//     switch (action.type) {
//         case STATUS_CHANGE:
//             return action.payload;
//         default:
//             return state;
//     }
// }


// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TO_DO:
//             return {
//                 ...state,
//                 items: [...state.items, action.payload]
//             }
//         case REMOVE_TO_DO:
//             const idx = state.items.findIndex((item) => item.id === action.payload);
//             const items = [
//                 ...state.items.slice(0, idx),
//                 ...state.items.slice(idx + 1),
//             ];
//             return {
//                 ...state,
//                 items,
//             }
//         case STATUS_CHANGE:
//             return {
//                 ...state,
//             }
//         case OPEN_MODAL:
//             return {
//                 ...state,
//             }
//         case FILTER_CHANGE:
//             return {
//                 ...state,
//                 filter: action.payload,
//             }
//         case CLOSE_MODAL:
//             return {
//                 ...state,
//             }
//
//         default:
//             return state;
//     }
// }

const todosReducer = combineReducers({
    items,
    filter,
    status,
});

export default todosReducer;