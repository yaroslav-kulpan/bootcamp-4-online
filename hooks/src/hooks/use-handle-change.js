import { useState } from "react";

const useHandleChange = (initialState) => {
  const [field, setField] = useState(initialState);

  const handleChange = ({ target }) => {
    const { value } = target;
    setField(value);
  };

  return { field, handleChange, setField };
};

export default useHandleChange;
