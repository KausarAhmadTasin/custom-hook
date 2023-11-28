import { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./useCustomFetch";

function App() {
  const postUrl = `https://jsonplaceholder.typicode.com/posts`;
  const commentsUrl = `https://jsonplaceholder.typicode.com/comments`;

  const { values, err } = useFetch(postUrl);
  const { values: commentValues, err: commentErr } = useFetch(commentsUrl);
  // console.log(values)
  return (
    <>
      {values.map((value) => {
        return (
          <div key={value.id} className="post-api">
            <p>{value.userid}</p>
            <p>{value.id}</p>
            <p>{value.title}</p>
            <p>{value.body}</p>
          </div>
        );
      })}
      {
        commentValues.map((value)=> 
          <div key={value.id} className="comment-api">
            <p>{value.name}</p>
            <p>{value.email}</p>
            <p>{value.body}</p>
          </div>
        )
      }

    </>
  );
}

export default App;
