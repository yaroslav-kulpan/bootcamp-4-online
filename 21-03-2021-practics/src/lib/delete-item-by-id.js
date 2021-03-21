const deleteItemById = (arr, propName, payload) => {
  const idx = arr.findIndex((item) => item[propName] === payload);
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
};

export default deleteItemById;
