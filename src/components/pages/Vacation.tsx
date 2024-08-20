import React from "react";
import { useTranslation } from "react-i18next";

const Vacation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {t("coming_soon")}
        </h1>
      </div>
    </div>
  );
};

export default Vacation;
