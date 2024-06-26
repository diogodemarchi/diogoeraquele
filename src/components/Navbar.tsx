import Hamburger from "hamburger-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants";

interface Language {
  code: string;
  label: string;
}

interface NavbarProps {
  closeMobileMenu: () => void;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  button: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ closeMobileMenu, isOpen, setOpen, button }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const onChangeLang = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedLang = (e.target as HTMLButtonElement).value;
    i18n.changeLanguage(selectedLang);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 h-20 flex justify-center items-center text-xl sticky top-0 z-50">
      <div className="flex justify-between items-center h-20 max-w-6xl w-full px-4">
        <Link
          to="/diogoeraquele"
          className="text-white text-2xl flex items-center cursor-pointer"
          onClick={closeMobileMenu}
        >
          TRVL
        </Link>
        <div className="flex items-center">
          <div className="menu-icon block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          </div>
          <ul className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'flex flex-col items-center absolute top-20 left-0 w-full bg-gray-800' : 'hidden'}`}>
            <li className="nav-item h-20">
              <Link
                to="/diogoeraquele"
                className="text-white flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                {t("home")}
              </Link>
            </li>
            <li className="nav-item h-20">
              <Link
                to="/services"
                className="text-white flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item h-20">
              <Link
                to="/products"
                className="text-white flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item h-20 md:hidden">
              <Link
                to="/sign-up"
                className="text-white flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <div className="hidden md:block">
              <Button buttonStyle="btn--outline">Sign Up</Button>
            </div>
          )}
          <div className="relative inline-block text-left ml-4">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={toggleDropdown}
            >
              {LANGUAGES.find(lang => lang.code === i18n.language)?.label || 'Select Language'}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  {LANGUAGES.map(({ code, label }: Language) => (
                    <button
                      key={code}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={(e) => onChangeLang(e)}
                      value={code}
                    >
                      {label}
                    </button>
                    
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;