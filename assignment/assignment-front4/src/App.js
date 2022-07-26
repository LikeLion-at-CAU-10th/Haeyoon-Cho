import React from "react";
import styled from "styled-components";
import "/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StyledApp></StyledApp>}></Route>
      </Routes>
    </>
  );
}

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
