import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./page/Detail";
import List from "./page/List";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />}>
          <Route path=":aboutham" element={<Detail />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
