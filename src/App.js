import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import SinglePage from "./pages/SinglePage";
import Createpost from "./pages/Createpost";
import Editpost from "./pages/Editpost";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<SinglePage />} />
          <Route path="blog/:id/edit" element={<Editpost />} />
          <Route path="blog/new" element={<Createpost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
