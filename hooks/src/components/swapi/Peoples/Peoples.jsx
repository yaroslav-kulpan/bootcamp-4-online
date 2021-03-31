import React, { useState } from "react";
import useFetch from "../../../hooks/use-fetch";

const Peoples = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `http://swapi.dev/api/people/?page=${page}`,
    true
  );

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
      <button onClick={nextPage}>ShowMore</button>
    </ul>
  );
};

export default Peoples;
