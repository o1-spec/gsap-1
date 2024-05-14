import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="footer-head">
          <h6 className="fonts">Lets connect with us</h6>
          <div>
            <input type="text" placeholder="enter your mail" />
            <button>Subscribe Now</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-link-head">
            <h6>ifood</h6>
            <span>A restaurant is a buisness that prepares and serve food</span>
          </div>
          <div className="footer-link-box">
            <Link to="/">About Us</Link>
            <Link to="/">Dishes</Link>
            <Link to="/">Contact</Link>
          </div>
          <div className="footer-link-box">
            <Link to="/">Coorporate plans</Link>
            <Link to="/">Resources</Link>
            <Link to="/">Health and safety</Link>
          </div>
          <div className="footer-link-box">
            <Link to="/">Terms of service</Link>
            <Link to="/">Privacy & Policy</Link>
            <Link to="/">Request Beta</Link>
          </div>
          <div className="footer-link-box">
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
        <p className="copyright">&copy; ifood All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
