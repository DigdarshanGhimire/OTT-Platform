import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieInfo from "./pages/MovieInfo";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
