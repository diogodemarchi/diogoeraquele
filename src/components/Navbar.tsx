import Hamburger from "hamburger-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

interface NavbarProps {
  closeMobileMenu: () => void;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  button: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  closeMobileMenu,
  isOpen,
  setOpen,
  button,
}) => {
  const { t } = useTranslation();

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 h-20 flex justify-center items-center text-xl sticky top-0 z-50">
      <div className="flex justify-between items-center h-20 max-w-full pr-12 w-full px-4">
        <Link
          to="/diogoeraquele"
          className="text-white text-2xl flex items-center cursor-pointer"
          onClick={closeMobileMenu}
        >
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} />
        </Link>
        <div className="flex items-center">
          <div className="menu-icon block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          </div>
          <ul
            className={`md:flex md:items-center md:space-x-4 ${isOpen ? "flex flex-col items-center absolute top-20 left-0 w-full bg-gray-800" : "hidden"}`}
          >
            <li className="h-20">
              <Link
                to="/diogoeraquele"
                className="text-white flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                {t("home")}
              </Link>
            </li>
            <li className="h-20">
              <Link
                to="/services"
                className="text-white flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="h-20">
              <Link
                to="/products"
                className="text-white flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            {/* this only shows when hamburger is active */}
            <li className="h-20 md:hidden">
              <Link
                to="/rsvp"
                className="text-white flex items-center p-2 h-full"
                onClick={closeMobileMenu}
              >
                {t("rsvp")}
              </Link>
            </li>
            <li className="h-20">
              <LanguageSelector />
            </li>
          </ul>
          {button && (
            <div className="hidden md:block">
              <Button buttonStyle="btn--outline">{t("rsvp")}</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
