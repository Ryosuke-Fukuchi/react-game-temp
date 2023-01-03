import React from "react";
import { Board } from "./Board";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pinponpan from "./pinponpan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/pinponpan" element={<Pinponpan />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
