import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/rsvp">How it works</Link>
            <Link to="/diogoeraquele">Testimonials</Link>
            <Link to="/diogoeraquele">Careers</Link>
            <Link to="/diogoeraquele">Investors</Link>
            <Link to="/diogoeraquele">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/diogoeraquele">Contact</Link>
            <Link to="/diogoeraquele">Support</Link>
            <Link to="/diogoeraquele">Destinations</Link>
            <Link to="/diogoeraquele">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/diogoeraquele">Submit Video</Link>
            <Link to="/diogoeraquele">Ambassadors</Link>
            <Link to="/diogoeraquele">Agency</Link>
            <Link to="/diogoeraquele">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/diogoeraquele">Instagram</Link>
            <Link to="/diogoeraquele">Facebook</Link>
            <Link to="/diogoeraquele">Youtube</Link>
            <Link to="/diogoeraquele">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/diogoeraquele" className="social-logo">
              TRVL
            </Link>
          </div>
          <small className="website-wrights">TRVL C 2024</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/diogoeraquele"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/diogoeraquele"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className="social-icon-link twiiter"
              to="/diogoeraquele"
              target="_blank"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/diogoeraquele"
              target="_blank"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
