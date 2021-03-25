import React from "react";
import { Button } from "../../../shared/components";
import useHandleChange from "../../../hooks/use-handle-change";

const AddToForm = ({ createTodo }) => {
  const { field, handleChange, setField } = useHandleChange("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(field);
    setField("");
  };

  return (
    <form className="row mt-3" onSubmit={handleSubmit}>
      <div className="col-9">
        <input
          name="trim"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={field}
        />
      </div>
      <div className="col-3">
        <Button type="submit" className="btn w-100 btn-primary">
          Добавить
        </Button>
      </div>
    </form>
  );
};

export default AddToForm;
