import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import fade from '../../shared/components/Modal/fade.module.css';
import TodosListItem from "../TodosListItem";

const TodosList = ({
  visibleItems = [],
  handleRemove,
  isItemsIncludes,
  filteredNotFound,
}) => {
  if (!isItemsIncludes) {
    return <p>Not found Todos!</p>;
  }

  if (filteredNotFound) {
    return <p>Filtered Not Found!</p>;
  }

  const items = visibleItems.map(({ id, label }) => (
    <CSSTransition timeout={300} classNames={fade} key={id}>
      <TodosListItem id={id} label={label} handleRemove={handleRemove} />
    </CSSTransition>
  ));

  return (
    <TransitionGroup component="ul" className="list-group mt-3">
      {items}
    </TransitionGroup>
  );
};

export default TodosList;
