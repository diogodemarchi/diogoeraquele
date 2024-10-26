import React from "react";
import { Trans, useTranslation } from "react-i18next";
import VacationMap from "../VacationMap";

const Vacation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="justify-center flex items-baseline w-full min-h-screen py-5 min-w-96">
      <div className="xl:max-w-7xl bg-primary-content drop-shadow-xl border border-black/20 w-full rounded-md justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full"></div>
        <h1 className="text-3xl text-center mb-8">{t("brazil")}</h1>
        <p className="text-base-content text-base indent-4 space-y-4">
          <Trans i18nKey="brazil_introduction" />
        </p>
        <h1 className="text-3xl text-center my-8">
          {t("interactive_map.title")}
        </h1>
        <p className="indent-4 text-base text-base-content">
          <Trans i18nKey="interactive_map.description" />
        </p>
        <p className="text-base-content text-xs mt-4 text-center">
          {t("disclaimer")}: {t("interactive_map.disclaimer")}
        </p>
        <VacationMap />
      </div>
    </div>
  );
};
export default Vacation;
