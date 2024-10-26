import React from "react";
import { Trans, useTranslation } from "react-i18next";
import VacationMap from "../VacationMap";

const Vacation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="justify-center flex items-baseline w-full min-h-screen py-5 min-w-96">
      <div className="xl:max-w-7xl bg-primary-content drop-shadow-xl border border-black/20 w-full rounded-md justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full"></div>
        <h1 className="text-3xl text-center mb-8">{t("welcome_to_brazil")}</h1>
        <p className="text-base-content text-base indent-4">
          <Trans i18nKey="brazil_introduction" />
        </p>
        <h1 className="text-3xl text-center mb-8">
          {t("interactive_map.title")}
        </h1>
        <p className="indent-4 text-base text-base-content">
          <Trans i18nKey="interactive_map.description" />
        </p>
        <p className="text-base-content text-xs mt-4 text-center">
          {t("disclaimer")}: {t("interactive_map.disclaimer")}
        </p>
        <VacationMap />
        <div className="p-6 m-4 space-y-8 bg-base-100/20 text-base-content rounded-lg">
          <h1 className="text-3xl font-semibold text-center">
            {t("info.title")}
          </h1>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("info.language.title")}
            </h2>
            <p>{t("info.language.description")}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("info.currency.title")}
            </h2>
            <p>{t("info.currency.description")}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("info.powerOutlets.title")}
            </h2>
            <p>{t("info.powerOutlets.description")}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("info.climate.title")}
            </h2>
            <p>{t("info.climate.description")}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("info.tapWater.title")}
            </h2>
            <p>{t("info.tapWater.description")}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("info.toiletPaper.title")}
            </h2>
            <p>{t("info.toiletPaper.description")}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("info.safety.title")}</h2>
            <ul className="list-disc list-inside">
              {(t("info.safety.tips", { returnObjects: true }) as string[]).map(
                (tip, index) => (
                  <li key={index}>{tip}</li>
                ),
              )}
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("info.visa.title")}</h2>
            <p>{t("info.visa.description")}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("info.travelInsurance.title")}
            </h2>
            <p>{t("info.travelInsurance.description")}</p>
          </section>
        </div>

        <div className="p-6 m-4 space-y-8 bg-base-100/20 text-base-content rounded-lg">
          <h1 className="text-3xl font-semibold text-center">
            {t("transportation.title")}
          </h1>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("transportation.airport.title")}
            </h2>
            <p>{t("transportation.airport.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("transportation.localTransport.title")}
            </h2>
            <p>{t("transportation.localTransport.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("transportation.bigCities.title")}
            </h2>
            <p>{t("transportation.bigCities.description")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("transportation.driving.title")}
            </h2>
            <p>{t("transportation.driving.description")}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Vacation;
