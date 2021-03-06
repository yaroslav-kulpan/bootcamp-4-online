import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToDo,
  handleFilterChange,
  removeToDo,
  handleStatusChange,
} from "../../redux/todos/todos.actions";
import {
  getFilteredTodos,
  showFilters,
} from "../../redux/todos/todos.selectors";

import AddToForm from "../AddToDoForm";
import TodosList from "../TodosList";
import Filters from "../Filters";
import Search from "../Search";
import Modal from "../../shared/components/Modal";

import PlusIcon from "../../shared/icons/PlusIcon";

// Todo: 1. [X] Нам нужно создать store + подключить redux.
// Todo: 2. [-] Нам нужно создать root-reducer и reducers.
// Todo: 3. [X] Reducer будет следующего вида items: Array<{  id: string, label: string, createdAt: number, completed: boolean }>
// Todo: 4. [X] избавиться от didUpdate и didMount
// Todo: 5. [X] подключить redux devtools
// ToDO: 6. [-] Перенести методы

class Todos extends Component {
  id = 1;

  constructor(props) {
    super(props);
    this.state = {
      items: [
        // {
        //   id: this.generateId(),
        //   label: "learning React!",
        //   createdAt: Date.now(),
        //   completed: false,
        // },
      ],
      // filter: "",
      // status: statusEnum.ALL,
      modal: false,
    };
    console.log("[THIS.PROPS]", this.props);
    console.log("[CONSTRUCTOR]");
  }

  // componentDidMount() {
  //     console.log("[COMPONENT_DID_MOUNT]");
  //     const items = localStorage.getItem("todos");
  //     // if (items && parsedItems?.length) {
  //     //   this.setState({ items: parsedItems });
  //     // }
  //     // window.addEventListener("online", () => this.setState({ online: true }));
  //     // window.addEventListener("offline", () => this.setState({ online: false }));
  //     if (items) {
  //         const parsedItems = JSON.parse(items);
  //         this.setState({items: parsedItems});
  //     }
  // }
  //
  // componentDidUpdate(_, prevState, snapshot) {
  //     console.log("[COMPONENT_DID_UPDATE]");
  //     const oldItems = prevState.items;
  //     const newItems = this.state.items;
  //
  //     if (oldItems !== newItems) {
  //         console.log("[TODOS_CHANGED]");
  //         localStorage.setItem("todos", JSON.stringify(newItems));
  //     }
  // }
  //
  // componentWillUnmount() {
  //     // window.removeEventListener("online", () => this.setState({ online: true }));
  //     // window.removeEventListener("offline", () =>
  //     //   this.setState({ online: false })
  //     // );
  // }

  // generateId() {
  //     return this.id++;
  // }

  createTodo = (label) => {
    // const todo = {
    //     id: this.generateId(),
    //     label,
    //     createdAt: Date.now(),
    //     completed: false,
    // };

    // this.setState((prevState) => ({
    //     items: [...prevState.items, todo],
    //     filter: '',
    //     status: "All"
    // }));
    this.props.addToDo(label);
    this.handleToggleModal();
  };

  handleRemove = (event) => {
    const { target } = event;
    const id = target.dataset.id;
    this.props.removeToDo(id);
    // this.setState((prevState) => {
    //     const items = prevState.items.filter((item) => item.id !== id);
    //     return {
    //         items,
    //     };
    // });
  };

  // handleStatusChange = (status) => {
  //     this.setState({status});
  // };

  // handleFilterChange = (filter) => {
  //     this.setState({filter});
  // };

  handleToggleModal = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  render() {
    console.log("[RENDER]");
    const { modal } = this.state;
    const {
      items,
      status,
      handleFilterChange,
      handleStatusChange,
      isItemsIncludes,
      filteredNotFound,
    } = this.props;
    // const visibleItems = this.showFilters(
    //     this.getFilteredTodos(items, filter),
    //     status
    // );

    return (
      <div className="container mt-5">
        <Modal open={modal} onClose={this.handleToggleModal}>
          <AddToForm createTodo={this.createTodo} />
        </Modal>
        <div className="row my-4">
          <div className="col-6">
            {isItemsIncludes && (
              <Search handleFilterChange={handleFilterChange} />
            )}
          </div>
          <div className="col-6 d-flex justify-content-end">
            <Filters handleStatusChange={handleStatusChange} status={status} />
          </div>
        </div>
        <TodosList
          filteredNotFound={filteredNotFound}
          isItemsIncludes={isItemsIncludes}
          visibleItems={items}
          handleRemove={this.handleRemove}
        />
        <button
          className="btn btn-lg btn-primary rounded-circle"
          onClick={this.handleToggleModal}
          style={{
            position: "fixed",
            right: "15%",
            bottom: "15%",
          }}
        >
          <PlusIcon />
        </button>
      </div>
    );
  }
}

// <Consumer>
//     {store => (
//         <AnyComponent {...store}/>
//     )}
// </Consumer>

// const mapStateToProps = ({items, filter, status}) => {
//     return {items, filter, status};
// }

const mapStateToProps = ({ todos: { items, filter, status } }) => {
  const visibleItems = showFilters(getFilteredTodos(items, filter), status);
  const isItemsIncludes = !!items.length;
  const filteredNotFound = !visibleItems.length;
  return {
    items: visibleItems,
    isItemsIncludes,
    filteredNotFound,
    filter,
    status,
  };
};

// const mapDispatchToProps = (dispatch) => {
//     // console.log(dispatch, '[dispatch]')
//     return {
//         removeToDo: (id) => dispatch(removeToDo(id)),
//         addToDo: (label) => dispatch(addToDo(label)),
//     }
// }

const mapDispatchToProps = {
  removeToDo,
  addToDo,
  handleFilterChange,
  handleStatusChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
