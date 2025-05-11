import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError("Something went wrong…");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, error, getJoke };
};

export default useFetch;
