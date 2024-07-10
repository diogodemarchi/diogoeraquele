import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { Link } from "react-router-dom";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function HeroSection() {
  const { i18n, t } = useTranslation();
  const targetDate = new Date("2025-04-26T15:00:00");

  return (
    <div className="hero min-h-screen bg-paris -translate-y-28">
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center mt-24">
        <div className="max-w-screen-lg">
          <Countdown targetDate={targetDate} />
          <h1 className="mb-5 text-8xl font-thin font-fancy">
            Raquele & Diogo
          </h1>
          <div className="flex w-full flex-col lg:flex-row place-items-center justify-center">
            <Link
              to="/wedding"
              className="place-items-center h-20 min-w-96 max-w-xs"
            >
              <div className="card bg-base-200/50 text-base-content rounded-full grid-cols-1 grid h-20 min-w-56 flex-grow items-center">
                <span className="m-auto">
                  {capitalizeFirstLetter(
                    targetDate.toLocaleDateString(i18n.language, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }),
                  )}
                  <br />
                  {targetDate.toLocaleTimeString(i18n.language, {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </span>
              </div>
            </Link>
            <div className="divider lg:divider-horizontal" />
            <Link
              to="/arrival"
              className="flex-grow place-items-center h-20 min-w-96 max-w-xs"
            >
              <div className="card bg-base-200/50 text-base-content rounded-full grid-cols-1 grid h-20 min-w-56 flex-grow items-center">
                <span className="m-auto">
                  Estrada Geral Rio Ada, S/N
                  <br />
                  Rio dos Cedros, SC, Brasil
                </span>
              </div>
            </Link>
          </div>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
