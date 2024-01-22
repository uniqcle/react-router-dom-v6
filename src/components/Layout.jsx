import { NavLink, Outlet } from "react-router-dom";

const setActiveLink = ({ isActive }) => {
  return isActive ? "nav-link  link-primary" : "nav-link";
};

const Layout = () => {
  return (
    <div className="container">
      <header className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className={setActiveLink}>
              home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className={setActiveLink}>
              blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={setActiveLink}>
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
