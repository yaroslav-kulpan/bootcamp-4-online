import {createAction, nanoid} from '@reduxjs/toolkit';

// import {ADD_TO_DO, REMOVE_TO_DO, FILTER_CHANGE, STATUS_CHANGE} from "./todos.types";

const ADD_TO_DO = 'ADD_TO_DO';
const REMOVE_TO_DO = 'REMOVE_TO_DO';
const FILTER_CHANGE = 'FILTER_CHANGE';
const STATUS_CHANGE = 'STATUS_CHANGE';

//
// const status = Symbol(87887);
// const filter = Symbol('GO_IT');
// console.log(status, filter);

// const addAction = {
//     type: ADD_TO_DO,
//     payload: {
//         id: uuid(),
//         label: 'Actions',
//         createdAt: Date.now(),
//         completed: false,
//     }
// }

const addToDo = createAction(ADD_TO_DO, (label) => {
    return {
        payload: {
            id: nanoid(),
            label,
            createdAt: Date.now(),
            completed: false,
        }
    }
});

// console.log(addToDo('addToDo'))

// const addToDo = (label) => ({
//     type: ADD_TO_DO,
//     payload: {
//         id: nanoid(),
//         label,
//         createdAt: Date.now(),
//         completed: false,
//     },
// })

// const removeToDo = (id) => ({
//     type: REMOVE_TO_DO,
//     // payload: {
//     //     id
//     // }
//     payload: id,
// })

const removeToDo = createAction(REMOVE_TO_DO);

// console.log(removeToDo('_GqcNx27ggD_Ql6YJKSff'));

// const callAction = (id) => {
//     return {
//         type: REMOVE_TO_DO,
//         payload: id,
//     }
// }
// console.log(callAction('_GqcNx27ggD_Ql6YJKSff'), '[CALL_ACTION]')
// const handleFilterChange = (payload) => ({
//     type: FILTER_CHANGE,
//     payload
// })

const handleFilterChange = createAction(FILTER_CHANGE);

const handleStatusChange = createAction(STATUS_CHANGE);
// console.log(handleStatusChange('ALL'));

export {
    addToDo,
    removeToDo,
    handleFilterChange,
    handleStatusChange
}