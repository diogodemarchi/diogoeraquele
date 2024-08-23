import { useTranslation } from "react-i18next";
import VenueCarousel from "../VenueCarousel";
import TransportCard from "../TransportCard";

function Maps() {
  const { t } = useTranslation();
  return (
    <div className="mapouter flex-1 block justify-center my-12 md:mr-12 w-full">
      <div className="gmap_canvas w-full h-full">
        <iframe
          className="w-full md:h-full rounded-lg h-[50vh] min-h-[30vh] min-w-[25vw] shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10518.588891489038!2d9.141667!3d48.76953285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db74294d6225%3A0xb482d483028cda73!2sSkatepark%20Botnang!5e0!3m2!1spt-BR!2sde!4v1721662354894!5m2!1spt-BR!2sde"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

function Arrival() {
  const { t } = useTranslation();

  return (
    <div className="justify-center flex items-baseline w-full min-h-screen py-5">
      <div className="xl:max-w-7xl bg-primary-content drop-shadow-xl border border-black/20 w-full rounded-md justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full">
          <div className="flex flex-col md:mx-12">
            <h1 className="text-3xl text-center mb-8">{t("the_venue")}</h1>
            <p className="text-base-content text-base indent-4">
              {t("venue_text")}
            </p>
            <VenueCarousel />
          </div>
          <div className="divider"></div>
          <div className="text md:mx-12">
            <h1 className="text-3xl text-center my-8">{t("getting_there")}</h1>
            <p className="text-base-content text-base indent-4">
              {t("how_to_get_there_text")}
            </p>
            <p className="text-base-content text-base indent-4">
              {t("how_to_get_there_text_2")}
            </p>
            <h2 className="alert text-xl text-left my-4">
              {t("direction_instructions")}
            </h2>
            <div className="alert bg-transparent">
              <h2 className="text-lg text-left sm:my-4 sm:w-min lg:w-40">
                {t("arriving_by_car")}
              </h2>
              <div className="hidden sm:divider sm:divider-horizontal"></div>
              <ul className="list-disc list-inside">
                <div className="divider mt-0 sm:hidden"></div>
                <li className="list-item text-left">
                  <span className="font-bold">Timbó:</span>{" "}
                  {t("hot_to_get_there_from_timbo")}
                </li>
                <div className="divider"></div>
                <li className="list-item text-left">
                  <span className="font-bold">Blumenau:</span>{" "}
                  {t("hot_to_get_there_from_blumenau")}
                </li>
                <div className="divider"></div>
                <li className="list-item text-left">
                  <span className="font-bold">Jaraguá do Sul:</span>{" "}
                  {t("hot_to_get_there_from_jaragua")}
                </li>
              </ul>
            </div>
            <div className="alert bg-transparent mt-4 flex w-full flex-col sm:grid">
              <div className="text-lg text-left sm:my-4 sm:w-min lg:w-40">
                {t("arriving_by_shuttle")}
              </div>
              <div className="hidden sm:divider sm:divider-horizontal"></div>
              <div className="divider my-0 sm:hidden"></div>
              <p className="text-base-content text-base text-left">
                {t("how_to_get_there_text_3")}
              </p>
            </div>
            <div className="flex flex-col-reverse md:flex-row">
              <TransportCard />
              <div className="divider-horizontal mx-1" />
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrival;
