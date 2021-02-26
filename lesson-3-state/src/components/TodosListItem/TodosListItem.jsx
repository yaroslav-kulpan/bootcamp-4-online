import React from "react";

const TodosListItem = ({ id, label, handleRemove }) => {
  return (
    <li className="list-group-item">
      <span>{label}</span>
      <button data-id={id} onClick={handleRemove}>
        Удалить
      </button>
    </li>
  );
};

export default TodosListItem;
