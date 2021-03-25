import React, { useState, useEffect } from "react";
import useHandleChange from "../../../hooks/use-handle-change";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const { field, handleChange } = useHandleChange("5");

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecrementCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    document.title = counter;
  }, [counter]);

  const handleKeyChange = ({ code }) => {
    if (code === "Enter") {
      setCounter(counter + Number(field));
    }
  };

  return (
    <section className="container">
      <div className="col-6 offset-3">
        <h3>Counter</h3>
        <p className="mx-3">
          <span>{counter}</span>
        </p>
        <div className="d-flex">
          <button
            className="btn btn-primary mx-3"
            data-id="jjhjhjhhj"
            onClick={handleIncrementCounter}
          >
            +
          </button>
          <input
            type="text"
            onKeyDown={handleKeyChange}
            onChange={handleChange}
            className="form-control"
            value={field}
          />
          <button
            data-id="11"
            className="btn btn-danger mx-3"
            onClick={handleDecrementCounter}
          >
            -
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
