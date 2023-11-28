import { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./useCustomFetch";

function App() {
  const postUrl = `https://jsonplaceholder.typicode.com/posts`;
  const commentsUrl = `https://jsonplaceholder.typicode.com/comments`;
  const albumUrl = `https://jsonplaceholder.typicode.com/albums`;

  const { values, err } = useFetch(postUrl);
  const { values: commentValues, err: commentErr } = useFetch(commentsUrl);
  const { values: albaumValues , err: albumErr} = useFetch(albumUrl);
  // console.log(values)
  // console.log(albaumValues)
  return (
    <>
      <h2>Users</h2>
      <div className="post-container">
        {values.map((value) => {
          return (
            <div key={value.id} className="post-api">
              <p>
                <b>Id:</b> {value.id}
              </p>
              <p>
                <b>User Id:</b> {value.userId}
              </p>
              <p>
                <b>Title:</b> {value.title}
              </p>
              <p>
                <b>Post:</b> {value.body}
              </p>
              {/* {console.log(value)} */}
            </div>
          );
        })}
        {err && {commentErr}}
      </div>
      <br />
      <h2>Comments</h2>
      <br />
      <div className="comment-container">
        {
          commentValues.map((value) => (
            <div key={value.id} className="comment-api">
              <p> <b>Name: </b> {value.name}</p>
              <p><b>Email: </b>{value.email}</p>
              <p><b>Comment body: </b>{value.body}</p>
            </div>
          ))
        }
      </div>

      <br />
      <h2>Album</h2>
      <br />
      <div className="album-container">
      {
        albaumValues.map((value) => (
          // {console.log(value.id)}
          <div className="album-api" key={value.id}>
            <p><b>User Id: </b>{value.id}</p>
            <p><b>Album Id: </b>{value.userId}</p>
            <p><b>Album Title </b>{value.title}</p>
          </div>
        ))
      }
      </div>
    </>
  );
}

export default App;
