import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">home</Link>
        <Link to="/blog">blog</Link>
        <Link to="/about">about</Link>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer>2024</footer>
    </>
  );
};

export default Layout;
