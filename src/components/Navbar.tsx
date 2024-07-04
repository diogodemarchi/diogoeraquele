import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="bg-primary h-20 flex justify-center items-center text-xl sticky top-0 z-50">
      <div className="flex justify-between items-center h-20 max-w-full pr-12 w-full px-4">
        <Link
          to="/diogoeraquele"
          className="text-primary-content text-2xl flex items-center cursor-pointer"
          onClick={closeMobileMenu}
        >
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} />
        </Link>
        <div className="flex items-center">
          <label className="md:hidden btn btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={(e) => setIsOpen(!isOpen)} />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <ul
            className={`md:flex md:items-center md:space-x-4 ${isOpen ? "flex flex-col items-center absolute top-20 left-0 w-full bg-gray-800" : "hidden"}`}
          >
            <li className="h-20">
              <Link
                to="/diogoeraquele"
                className="text-primary-content flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                {t("home")}
              </Link>
            </li>
            <li className="h-20">
              <Link
                to="/services"
                className="text-primary-content flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="h-20">
              <Link
                to="/products"
                className="text-primary-content flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            {/* this only shows when hamburger is active */}
            <li className="h-20">
              <Link
                to="/rsvp"
                className="text-primary-content flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                <button className="btn">{t("rsvp")}</button>
              </Link>
            </li>
            <li className="h-20">
              <LanguageSelector />
            </li>
            <li className="h-20">
              <ThemeSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
