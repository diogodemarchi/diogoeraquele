import Hamburger from "hamburger-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants";

function Navbar() {
  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

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
              to="/diogoeraquele"
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
                  to="/diogoeraquele"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {t("home")}
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
        <div className="text-red-500 space-x-100">
        <select defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      </div>
      </nav>
    </>
  );
}

export default Navbar;
