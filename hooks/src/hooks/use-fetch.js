import { useCallback, useEffect, useState } from "react";

const useFetch = (url = "", showMore = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (showMore) {
        setData((prevState) => [...prevState, ...data.results]);
      } else {
        setData(data.results);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [showMore, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
  }
}

export default useFetch;
