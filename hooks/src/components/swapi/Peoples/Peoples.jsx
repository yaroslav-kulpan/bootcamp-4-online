import React, { useState } from "react";
import useFetch from "../../../hooks/use-fetch";

const Peoples = () => {
  // const [next, setNext] = useState(null);
  // const [prev, setPrev] = useState(null);
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `http://swapi.dev/api/people/?page=${page}`,
      true
  );
  // console.log(data)
  // const prevPage = () => {
  //   setPage(page - 1);
  // };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <ul>
      {data.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>Errors</p>}
      {/*<button onClick={prevPage}>Prev</button>*/}
      <button onClick={nextPage}>ShowMore</button>
    </ul>
  );
};

export default Peoples;
