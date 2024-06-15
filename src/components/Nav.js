import {Link} from "react-router-dom";

const Nav = () => (
  <div>
   <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">Contact</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>

</ul>

  </div>
);

export default Nav;
