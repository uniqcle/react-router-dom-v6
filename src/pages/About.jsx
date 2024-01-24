import { Outlet, Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-5 mb-5">
      <h1>About...</h1>
      <p>about block</p>
      <ul>
        <li>
          <Link to="contacts">Our contacts </Link>
        </li>
        <li>
          <Link to="team">Our team</Link>
        </li>
      </ul>
      {/* <Routes>
        <Route path="contacts" element={<p>Out contacts</p>} />
        <Route path="team" element={<p> Our team</p>} />
      </Routes> */}

      {<Outlet />}
    </div>
  );
};

export default About;
