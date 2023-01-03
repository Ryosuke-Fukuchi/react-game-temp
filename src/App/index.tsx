import React from "react";
import { Board } from "./Board";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pinponpan from "./pinponpan";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/pinponpan" element={<Pinponpan />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
