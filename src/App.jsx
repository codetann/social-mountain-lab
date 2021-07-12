import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import NavBar from "./components/NavBar/NavBar";
import Status from "./components/Status/Status";
import Post from "./components/Post/Post";
import useApi from "./hooks/useApi";

export default function App() {
  const [posts, post, put, del] = useApi(
    "https://practiceapi.devmountain.com/api/posts"
  );

  if (!posts) return <h1>Loading...</h1>;

  return (
    <Application>
      <NavBar />
      <Status post={post} />
      {posts &&
        posts.map((i) => (
          <Post
            key={i.id}
            date={i.date}
            text={i.text}
            id={i.id}
            del={del}
            put={put}
          />
        ))}
    </Application>
  );
}

const Application = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  background: #f2f2f2;
`;
