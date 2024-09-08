import { useTranslation } from "react-i18next";
import Countdown from "./Countdown";
import { Link } from "react-router-dom";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function HeroSection() {
  const { i18n, t } = useTranslation();
  const targetDate = new Date("2025-04-26T15:00:00");

  return (
    <div className="hero min-h-screen bg-paris-small lg:bg-paris -translate-y-28">
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center mt-24">
        <div className="max-w-screen-lg">
          <h1 className="mt-5 mb-5 text-6xl md:text-8xl font-thin font-fancy">
            Raquele & Diogo
          </h1>
          <div className="flex w-full flex-col lg:flex-row place-items-center justify-center">
            <Link
              to="/wedding"
              className="place-items-center h-fit md:h-20 min-w-96 max-w-xs"
            >
              <div className="card bg-base-200/50 text-base-content rounded-full grid-cols-1 grid h-fit md:h-20 min-w-56 flex-grow items-center">
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
            <div className="divider lg:divider-horizontal my-1 md:my-4 divider-primary justify-center items-center" />
            <Link
              to="/arrival"
              className="flex-grow place-items-center h-fit md:h-20 min-w-96 max-w-xs"
            >
              <div className="card bg-base-200/50 text-base-content rounded-full grid-cols-1 grid h-fit md:h-20 min-w-56 flex-grow items-center">
                <span className="m-auto">
                  {t("address_street")}
                  <br />
                  {t("address_city")}
                </span>
              </div>
            </Link>
          </div>
          <h1 className="my-2 md:my-5 text-xl md:text-3xl">
            {t("home_page_text_title")}
          </h1>
          <Countdown targetDate={targetDate} />
          <p className="my-2 md:my-5">
            {t("home_page_text", {
              wedding_date: targetDate.toLocaleDateString(i18n.language, {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            })}
          </p>
          <p className="alert text-center bg-base-200/50 border-base-200/50">
            {t("website_explanation")}
          </p>
          <p className="my-5">{t("click_button_to_confirm")}</p>
          <Link to="/rsvp" className="btn btn-wide btn-lg btn- btn-primary">
            {t("rsvp")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
