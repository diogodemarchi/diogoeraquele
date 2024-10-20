import React from "react";
import { useTranslation } from "react-i18next";
import VacationMap from "../VacationMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faWater,
  faHouse,
  faLandmark,
  faPalette,
  faMonument,
  // Add other icons here as needed
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faWater,
  faHouse,
  faLandmark,
  faPalette,
  faMonument,
  // Add other icons here
);

const Vacation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="justify-center flex items-baseline w-full min-h-screen py-5">
      <div className="xl:max-w-7xl bg-primary-content drop-shadow-xl border border-black/20 w-full rounded-md justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full"></div>
        <h1 className="text-3xl text-center mb-8">{t("wedding_title")}</h1>
        <VacationMap />
      </div>
    </div>
  );
};
export default Vacation;
