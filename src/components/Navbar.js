import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
            <ul>
              <li>sub item</li>
            </ul>
          </li>
          <li>
            <Link to="/français">Français</Link>
          </li>
          <li>
            <Link to="/cinema">Cinema</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
