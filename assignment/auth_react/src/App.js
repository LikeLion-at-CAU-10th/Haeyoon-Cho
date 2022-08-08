import "./App";
import LoginPage from "./LoginPage";
import { Route, Routes } from "react-router-dom";
import Success from "./Success";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} exact={true} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
};
