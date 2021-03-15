// import {combineReducers} from "redux";
import todosReducer from "./todos/todos.reducer";

const rootReducer = {
    todos: todosReducer,
    // auth: (state) => state,
    // example: (state) => state,
}

export default rootReducer;