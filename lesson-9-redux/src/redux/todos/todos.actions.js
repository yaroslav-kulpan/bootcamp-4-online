import {v4 as uuid} from "uuid";
import {ADD_TO_DO, REMOVE_TO_DO, FILTER_CHANGE} from "./todos.types";

const addToDo = (label) => ({
    type: ADD_TO_DO,
    payload: {
        id: uuid(),
        label,
        createdAt: Date.now(),
        completed: false,
    },
})

const removeToDo = (id) => ({
    type: REMOVE_TO_DO,
    // payload: {
    //     id
    // }
    payload: id,
})

const handleFilterChange = (payload) => ({
    type: FILTER_CHANGE,
    payload
})

export {
    addToDo,
    removeToDo,
    handleFilterChange
}