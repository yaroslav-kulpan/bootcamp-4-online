import React from "react";

const TodosListItem = ({ id, label, handleRemove }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <span>{label}</span>
        <button data-id={id} className="btn btn-danger" onClick={handleRemove}>
          Удалить
        </button>
      </div>
    </li>
  );
};

export default TodosListItem;
