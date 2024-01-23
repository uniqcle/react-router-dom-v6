import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import SinglePage from "./pages/SinglePage";
import Createpost from "./pages/Createpost";
import Editpost from "./pages/Editpost";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Loginpage";

import Layout from "./components/Layout";

import { RequireAuth } from "./hoc/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<SinglePage />} />
          <Route path="blog/:id/edit" element={<Editpost />} />
          <Route
            path="blog/new"
            element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<About />} />
          {/* redirect */}
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
