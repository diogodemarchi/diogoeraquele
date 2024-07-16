import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";

function closeDrawer() {
  document.getElementById("mobile-drawer").click();
}

function DefaultItems({ callback }) {
  const { t } = useTranslation();
  return (
    <>
      <li className="h-20">
        <Link
          to="/diogoeraquele"
          className="text-base-content flex items-center p-2 h-full focus:bg-transparent"
          onClick={callback}
        >
          {t("home")}
        </Link>
      </li>
      <li className="h-20">
        <Link
          to="/arrival"
          className="text-base-content flex items-center p-2 h-full focus:bg-transparent"
          onClick={callback}
        >
          {t("arrival")}
        </Link>
      </li>
      <li className="h-20">
        <Link
          to="/wedding"
          className="text-base-content flex items-center p-2 h-full focus:bg-transparent"
          onClick={callback}
        >
          {t("wedding")}
        </Link>
      </li>
      <li className="h-20">
        <Link
          to="/our-history"
          className="text-base-content flex items-center p-2 h-full focus:bg-transparent"
          onClick={callback}
        >
          {t("our_history")}
        </Link>
      </li>
      <li className="h-20">
        <Link
          to="/vacation"
          className="text-base-content flex items-center p-2 h-full focus:bg-transparent"
          onClick={callback}
        >
          {t("vacation")}
        </Link>
      </li>
      <li className="h-20">
        <Link
          to="/info"
          className="text-base-content flex items-center p-2 h-full focus:bg-transparent"
          onClick={callback}
        >
          {t("info")}
        </Link>
      </li>
    </>
  );
}

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <div className="drawer z-50">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar min-w-fit sticky top-0 z-2 min-h-28">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="mobile-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="navbar-start">
            <Link
              to="/diogoeraquele"
              className="text-primary-content text-2xl flex items-center cursor-pointer"
              onClick={closeMobileMenu}
            >
              <img src={process.env.PUBLIC_URL + "/images/logo.png"} />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              <DefaultItems callback={closeMobileMenu} />
            </ul>
          </div>
          <div className="navbar-end">
            <div className="hidden md:flex">
              <ThemeSelector />
              <LanguageSelector />
            </div>
            <Link
              to="/rsvp"
              className="text-primary-content flex items-center p-2 h-full"
              onClick={closeMobileMenu}
            >
              <button className="btn">{t("rsvp")}</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="drawer-side drawer-overlay">
        <label
          htmlFor="mobile-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-100 min-h-full w-80 p-4">
          <li onClick={closeDrawer}>
            <Link
              to="/diogoeraquele"
              className="text-primary-content text-2xl flex items-center cursor-pointer"
              onClick={closeMobileMenu}
            >
              <img src={process.env.PUBLIC_URL + "/images/logo.png"} />
            </Link>
          </li>
          <DefaultItems callback={closeDrawer} />
          <div class="grow text-start hover:bg-transparent" />
          <div className="grid grid-cols-2 items-center justify-center m-auto">
            <ThemeSelector />
            <div className="dropdown-top">
              <LanguageSelector />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
