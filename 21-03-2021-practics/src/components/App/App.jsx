import React, { PureComponent } from "react";
import Loader from "../Loader";
import TrashIcon from "../../icons/TrashIcon";
import { deleteItems } from "../../redux/todos/todos-actions";

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
    const {
      completedCount,
      noCompletedCount,
      todoCount,
      selectedItemsCount,
      deleteItems,
      selectItems,
    } = this.props;
    return (
      <div className="grid grid-cols-2">
        <div className="mt-3 shadow-sm">
          <h3>
            Выполнено {completedCount} осталось {noCompletedCount}
          </h3>
          <h3>Всего: {todoCount}</h3>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex">
            <h3>Выбрано: {selectedItemsCount}</h3>
            <button
              className="bg-red-500 text-white px-2 py-2"
              onClick={() => deleteItems(selectItems)}
            >
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    );
  };

  handleChangeCheckbox = ({ target }) => {
    const { checked, name } = target;
    const { unselectItem, selectItem } = this.props;
    if (checked) {
      selectItem(name);
    } else {
      unselectItem(name);
    }
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
            {this.props.error && <h3>Error</h3>}
            {this.props.todos.map(({ label, id, completed }) => (
              <div key={id} className="flex justify-between mb-4 items-center">
                <div className="flex">
                  <label className="inline-flex items-center">
                    <input
                      name={id}
                      type="checkbox"
                      className="form-checkbox"
                      onChange={this.handleChangeCheckbox}
                    />
                    <span className="ml-2" />
                  </label>
                  <p className="text-grey-darkest">{label}</p>
                </div>
                <div>
                  <button
                    className={`flex-no-shrink flex-nowrap p-2 ml-2 border-2 rounded ${
                      !completed
                        ? "hover:text-white text-green-400 border-green-400 hover:bg-green-400"
                        : "hover:text-white text-blue-400 border-blue-400 hover:bg-blue-400"
                    }`}
                    onClick={() => this.props.toggleCompleted(id, !completed)}
                  >
                    {!completed ? "Done" : "Not done"}
                  </button>
                  <button
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
                    data-id={id}
                    onClick={this.onHandleDelete}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            {this.props.loading && <Loader />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
