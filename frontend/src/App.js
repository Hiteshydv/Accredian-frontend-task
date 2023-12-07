import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login  from "./pages/login/Login";
import Register  from "./pages/register/Register";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return(
  <BrowserRouter>
  <ToastContainer />
    <Routes>
        <Route path="login" element={<Login/>}></Route>
        <Route path="signup" element={<Register/>}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
