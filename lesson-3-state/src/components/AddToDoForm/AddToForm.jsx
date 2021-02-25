import React from "react";
import { Button } from "../../shared/components";

const AddToForm = () => {
  return (
    <form>
      <input type="text" className="form-control" />
      <Button className="btn btn-primary">Добавить</Button>
    </form>
  );
};

export default AddToForm;
