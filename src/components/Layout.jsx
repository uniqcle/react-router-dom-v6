import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <header className="navbar navbar-expand-lg bg-body-tertiary">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink to="/" className="nav-link">
              home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/blog" className="nav-link">
              blog
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/about" className="nav-link">
              about
            </NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>2024</footer>
    </div>
  );
};

export default Layout;
