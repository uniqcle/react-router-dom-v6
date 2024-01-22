import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={match ? "nav-link  link-primary" : "nav-link"}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
