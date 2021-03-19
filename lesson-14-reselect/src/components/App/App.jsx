import React, { PureComponent } from "react";
// import { connect } from "react-redux";
// import {
//   // addToDo,
//   // removeToDo,
//   filterChange,
// } from "../../redux/todos/todos-actions";
// import {
//   fetchTodos,
//   addToDo,
//   deleteTodo,
// } from "../../redux/todos/todos-operations";
import Loader from "../Loader";
// import {
//   getFilteredTodos,
//   getError,
//   getLoading,
//   getFilter,
// } from "../../redux/todos/todos-selectors";

class App extends PureComponent {
  state = {
    label: "",
  };

  componentDidMount() {
    // const { fetchTodos } = this.props;
    this.props.fetchTodos();
  }

  handleChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { label } = this.state;
    this.props.addToDo(label);
    this.setState({
      label: "",
    });
  };

  onHandleDelete = (event) => {
    const { id } = event.target.dataset;
    this.props.deleteTodo(id);
  };

  onFilterChange = (event) => {
    const { value } = event.target;
    const { filterChange } = this.props;
    filterChange(value);
  };

  renderStats = () => {
    const { completedCount, noCompletedCount, todoCount } = this.props;
    return (
      <div className="mt-3 shadow-sm">
        <h3>
          Выполнено {completedCount} осталось {noCompletedCount}
        </h3>
        <h3>Всего: {todoCount}</h3>
      </div>
    );
  };

  render() {
    return (
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-4 m-4 w-full lg:w-3/4 lg:max-w-2xl">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todos List:</h1>
            {this.renderStats()}
            <form className="flex mt-4" onSubmit={this.onSubmit}>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                onChange={this.handleChange}
                value={this.state.label}
              />
              <button className="flex-no-shrink p-2 border-2 rounded text-blue-500 border-blue-400 hover:text-white hover:bg-blue-400">
                Add
              </button>
            </form>
          </div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker mb-6"
            placeholder="Filter Todo"
            onChange={this.onFilterChange}
            value={this.props.filter}
          />
          <div>
            {this.props.error && (
              <div className="flex bg-red-500 max-w-sm mb-4">
                <div className="w-16 bg-red">
                  <div className="p-4">
                    <svg
                      className="h-8 w-8 text-white fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M437.019 74.981C388.667 26.629 324.38 0 256 0S123.333 26.63 74.981 74.981 0 187.62 0 256s26.629 132.667 74.981 181.019C123.332 485.371 187.62 512 256 512s132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.668-74.981-181.019zM256 470.636C137.65 470.636 41.364 374.35 41.364 256S137.65 41.364 256 41.364 470.636 137.65 470.636 256 374.35 470.636 256 470.636z"
                        fill="#FFF"
                      />
                      <path
                        d="M341.22 170.781c-8.077-8.077-21.172-8.077-29.249 0L170.78 311.971c-8.077 8.077-8.077 21.172 0 29.249 4.038 4.039 9.332 6.058 14.625 6.058s10.587-2.019 14.625-6.058l141.19-141.191c8.076-8.076 8.076-21.171 0-29.248z"
                        fill="#FFF"
                      />
                      <path
                        d="M341.22 311.971l-141.191-141.19c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.076-8.077 21.171 0 29.248l141.19 141.191a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058c8.075-8.077 8.075-21.172-.001-29.249z"
                        fill="#FFF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-auto text-black opacity-75 items-center p-4">
                  <span className="text-lg font-bold pb-4">Heads Up!</span>
                  <p className="leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, nemo!
                  </p>
                </div>
              </div>
            )}

            {this.props.todos.map(({ label, id }) => (
              <div key={id} className="flex mb-4 items-center">
                <p className="w-full text-grey-darkest">{label}</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-400 hover:bg-green-400">
                  Done
                </button>
                <button
                  className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
                  data-id={id}
                  onClick={this.onHandleDelete}
                >
                  Remove
                </button>
              </div>
            ))}
            {this.props.loading && <Loader />}
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   todos: getFilteredTodos(state),
//   filter: getFilter(state),
//   loading: getLoading(state),
//   error: getError(state),
// });
//
// // const fetchTodos = (dispatch) => async () => {
// //   const f = await fetch(`http://localhost:3004/todos`);
// //   const data = await f.json();
// //   dispatch(fetchTodosAction());
// // };
//
// const mapDispatchToProps = {
//   addToDo,
//   deleteTodo,
//   fetchTodos,
//   filterChange,
// };
//
// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     fetchTodos: () => fetchTodos(dispatch)(),
// //   };
// // };

export default App;
