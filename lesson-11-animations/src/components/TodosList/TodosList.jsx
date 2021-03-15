import React from "react";
import TodosListItem from "../TodosListItem";

const TodosList = ({visibleItems = [], handleRemove, isItemsIncludes, filteredNotFound}) => {
    if (!isItemsIncludes) {
        return <p>Not found Todos!</p>;
    }

    if (filteredNotFound) {
        return <p>Filtered Not Found!</p>
    }

    const items = visibleItems.map(({id, label}) => (
        <TodosListItem key={id} id={id} label={label} handleRemove={handleRemove}/>
    ));

    return <ul className="list-group mt-3">{items}</ul>;
};

export default TodosList;
