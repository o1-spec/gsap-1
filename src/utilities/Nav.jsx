import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="navv">
        <div className="nav-desc">
          <span>One of our specialty is our healthy breakfast</span>
          <span>Health and safety</span>
        </div>
        <div className="nav-logo">ifood</div>
        <div className="nav-links">
          <Link to="/">Offers</Link>
          <Link to="/">Services</Link>
          <Link to="/">menu</Link>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
