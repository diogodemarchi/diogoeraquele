import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Language {
  code: string;
  label: string;
  countryCode: string;
}

export const LANGUAGES = [
  { label: "Portugues", code: "pt", countryCode: "br" },
  { label: "English", code: "en", countryCode: "us" },
  { label: "Deutsch", code: "de", countryCode: "de" },
];

const LanguageSelector: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    if (dropdownOpen && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setDropdownOpen(!dropdownOpen);
  };
  const onChangeLang = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedLang = (e.target as HTMLButtonElement).value;
    console.log(e);
    console.log(`Changing language to ${selectedLang}`);
    i18n.changeLanguage(selectedLang);
    setDropdownOpen(false);
  };

  const onChangeLangByImg = (e: React.MouseEvent<HTMLImageElement>) => {
    const selectedLang = (e.target as HTMLImageElement).alt;
    console.log(`Changing language to ${selectedLang}`);
    i18n.changeLanguage(selectedLang);
    setDropdownOpen(false);
  };

  const onClickOutside = (e: Event) => {
    console.log(e.target);
    if (!(e.target as HTMLElement).id.includes("options-menu")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", onClickOutside, false);

    return () => {
      document.body.removeEventListener("click", onClickOutside, false);
    };
  }, []);

  return (
    <div className="text-white flex-grow-0 items-center p-4 h-full">
      <button
        type="button"
        className="inline-flex justify-center w-full shadow-sm px-4 py-2 text-sm font-medium hover:bg-slate-800 focus:bg-slate-800 rounded-t-lg"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={toggleDropdown}
      >
        {(
          <img
            id="options-menu-flag"
            className="object-cover h-8 w-8"
            src={`${process.env.PUBLIC_URL}/images/${LANGUAGES.find((lang) => lang.code === i18n.language)?.countryCode}.png`}
          />
        ) ||
          LANGUAGES.find((lang) => lang.code === i18n.language)?.countryCode ||
          "Select Language"}
      </button>
      {dropdownOpen && (
        <div
          className="z-10 bg-white divide-y divide-gray-100 rounded-b-lg shadow dark:bg-slate-800"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {LANGUAGES.filter(
              (item: Language) => !(item.code === i18n.language),
            ).map(({ code, label, countryCode }: Language) => (
              <button
                key={code}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={(e) => onChangeLang(e)}
                value={code}
              >
                <img
                  id="options-menu-inner-flag"
                  alt={code}
                  className="object-cover h-8 w-8"
                  src={`${process.env.PUBLIC_URL}/images/${countryCode}.png`}
                  onClick={(e) => onChangeLangByImg(e)}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default LanguageSelector;
