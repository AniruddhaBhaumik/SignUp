import "./App.css";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //   <SignUp />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
