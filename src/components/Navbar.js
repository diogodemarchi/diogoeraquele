import Hamburger from "hamburger-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setOpen(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div>
          <div className="navbar-container">
            <Link
              to="/raqueleediogo"
              className="navbar-logo"
              onClick={closeMobileMenu}
            >
              TRVL
            </Link>
            <div className="menu-icon">
              <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
            </div>
            <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/raqueleediogo"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
