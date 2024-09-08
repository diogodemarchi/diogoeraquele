import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import DefaultItems from "./DefaultItems";

function closeDrawer() {
  document.getElementById("mobile-drawer").click();
}

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="drawer z-50">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar min-w-fit sticky top-0 z-2 min-h-28 shadow-lg backdrop-blur-sm backdrop-brightness-125 backdrop-contrast-125 backdrop-hue-rotate-15 glass">
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
          <div className="navbar-start relative z-1">
            <Link
              to="/diogoeraquele"
              className="text-primary-content text-2xl flex flex-shrink-0 items-center cursor-pointer"
            >
              <img
                alt=""
                className="w-full h-16 object-contain"
                src={process.env.PUBLIC_URL + "/images/logo.png"}
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              <DefaultItems />
            </ul>
          </div>
          <div className="navbar-end">
            <div className="hidden md:flex">
              <ThemeSelector />
              <LanguageSelector />
            </div>
            <Link to="/rsvp" className="btn flex items-center p-4 h-full">
              {t("rsvp")}
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
            >
              <img alt="" src={process.env.PUBLIC_URL + "/images/logo.png"} />
            </Link>
          </li>
          <DefaultItems callback={closeDrawer} />
          <div className="grow text-start hover:bg-transparent" />
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
