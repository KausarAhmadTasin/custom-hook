import { useState, useEffect } from "react";

/* eslint-disable no-undef */
export const useFetch = (url) => {
  const [values, setValues] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    //   fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setValues(data))
    //     .catch((err) => setErr(err.message));
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data!");
        }
        const data = await response.json();
        setValues(data);
      } catch (error) {
        setErr(error.message);
      }
    };
    fetchData();
  }, [url]);

  return {
    values,
    err,
  };
};
