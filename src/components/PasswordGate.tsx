import React, { useState } from "react";

import { useTranslation } from "react-i18next";

const PasswordGate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "2604"; // are you really this petty to "hack" my wedding website?

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert(t("incorrect_password"));
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-paris-small lg:bg-paris bg-cover bg-center">
      <div className="bg-black bg-opacity-50 p-24 rounded-3xl text-center">
        <h1 className="mb-8 text-6xl md:text-8xl font-thin font-fancy text-neutral-content">
          Raquele & Diogo
        </h1>
        <div className="w-full max-w-xs mx-auto">
          <label
            className="block text-xl font-bold mb-4 text-neutral-content"
            htmlFor="password"
          >
            {t("enter_password")}
          </label>
          <input
            type="password"
            id="password"
            className="input input-bordered w-full mb-4 text-center"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handlePasswordSubmit}
            className="btn btn-primary w-full"
          >
            {t("submit")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;
