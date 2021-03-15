import statusEnum from "../../enums/status.enum";

// const getTodos = (state) => state.todos.items;

const getFilteredTodos = (items, filterStr) => {
    // const items = getTodos(state);
    return items.filter((todo) =>
        todo.label.toLowerCase().includes(filterStr.toLowerCase())
    );
}

const showFilters = (items, statusStr) => {
    switch (statusStr) {
        case statusEnum.ALL:
            return items;
        case statusEnum.DONE:
            return items.filter((item) => item.completed);
        case statusEnum.NO_DONE:
            return items.filter((item) => !item.completed);
        default:
            return items;
    }
};

export {
    getFilteredTodos,
    showFilters
}