import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <header>
        <a href="/">home</a>
        <a href="/blog">blog</a>
        <a href="/about">about</a>
      </header>
      <div>
        <h2>get started...</h2>
      </div>
    </>
  );
}

export default App;
