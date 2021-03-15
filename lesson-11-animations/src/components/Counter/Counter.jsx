import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  static defaultProps = {
    value: 5,
  };

  static propTypes = {
    value: PropTypes.number,
  };

  state = {
    counter: this.props.value,
  };

  handleIncrementCounter = () => {
    // this.setState({ counter: this.state.counter + 1 });
    for (let i = 0; i < 3; i += 1) {
      /*
       * Если посмотреть состояние, на всех итерациях будет 0
       * Потому что это синхронный код и обновление состояния еще не произошло
       */
      console.log(this.state.counter);

      // this.setState({ counter: this.state.counter + 1 });

      this.setState((prevState) => {
        return {
          counter: prevState.counter + 1,
        };
      });
    }
    // console.log(event.target.dataset.id, "event");
  };

  handleDecrementCounter = () => {
    // console.log(event.target.dataset.id, "event");
    if (this.state.counter === 0) {
      return;
    }

    this.setState((prevState) => ({
      // data: val === 5 ? sum1 : sum2,
      counter: prevState.counter - 1,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <section>
        <h3>Counter</h3>
        <button
          className="btn btn-primary"
          data-id="jjhjhjhhj"
          onClick={this.handleIncrementCounter}
        >
          +
        </button>
        <span>{counter}</span>
        <input type="text" className="form-control" />
        <button
          data-id="11"
          className="btn btn-danger"
          onClick={this.handleDecrementCounter}
        >
          -
        </button>
      </section>
    );
  }
}

export default Counter;
