import { useState, useEffect } from "react";

/* eslint-disable no-undef */
export const useFetch = (url) => {
  const [values, setValues] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setValues(data))
      .catch((err) => setErr(err.message));
  }, [url]);

  return { 
    values,
    err
  };
};
