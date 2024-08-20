import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "../FormInput";
import FormOption from "../FormOption";
import { SubmitForm, SubmitFormModal } from "../SubmitForm";
import { Link } from "react-router-dom";

function VenueCarousel() {
  const carouselRef = useRef(null);

  const carouselScroll = (itemNumber) => {
    const carousel = carouselRef.current;
    const itemWidth = carousel.scrollWidth / 4;
    carousel.scrollTo({
      left: (itemNumber - 1) * itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel items-center" ref={carouselRef}>
      <div id="slide1" className="carousel-item relative w-full">
        <img
          className="rounded-lg m-12 w-11/12 h-fit"
          src={process.env.PUBLIC_URL + "/images/sitio1.jpeg"}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => carouselScroll(8)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => carouselScroll(2)}>
            ❯
          </button>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          className="rounded-lg m-12 w-11/12 h-fit"
          src={process.env.PUBLIC_URL + "/images/sitio2.jpeg"}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => carouselScroll(1)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => carouselScroll(3)}>
            ❯
          </button>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          className="rounded-lg m-12 w-11/12 h-fit"
          src={process.env.PUBLIC_URL + "/images/sitio3.jpg"}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => carouselScroll(2)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => carouselScroll(4)}>
            ❯
          </button>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          className="rounded-lg m-12 w-11/12 h-fit"
          src={process.env.PUBLIC_URL + "/images/sitio4.jpeg"}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => carouselScroll(3)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => carouselScroll(5)}>
            ❯
          </button>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          className="rounded-lg m-12 w-11/12 h-fit"
          src={process.env.PUBLIC_URL + "/images/sitio5.jpeg"}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => carouselScroll(4)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => carouselScroll(6)}>
            ❯
          </button>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img
          className="rounded-lg m-12 w-11/12 h-fit"
          src={process.env.PUBLIC_URL + "/images/sitio6.jpeg"}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => carouselScroll(5)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => carouselScroll(7)}>
            ❯
          </button>
        </div>
      </div>
      <div id="slide7" className="carousel-item relative w-full">
        <img
          className="rounded-lg m-12 w-11/12 h-fit"
          src={process.env.PUBLIC_URL + "/images/sitio7.jpeg"}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => carouselScroll(6)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => carouselScroll(8)}>
            ❯
          </button>
        </div>
      </div>
      <div id="slide8" className="carousel-item relative w-full">
        <img
          className="rounded-lg m-12 w-11/12 h-fit"
          src={process.env.PUBLIC_URL + "/images/sitio8.jpeg"}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => carouselScroll(7)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => carouselScroll(1)}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

function TransportCard() {
  const { t } = useTranslation();
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCoolest, setSelectedCoolest] = useState("Diogo");
  const [selectedTransport, setSelectedTransport] = useState();
  const [selectedAccomodation, setSelectedAccomodation] =
    useState("no_i_am_fine");
  const [amountClicksRaquele, setAmountClicksRaquele] = useState(0);
  const [dietRestrictions, setDietRestrictions] = useState("");
  const [songRequests, setSongRequests] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState("");
  const [message, setMessage] = useState("");
  const [sendingRequest, setSendingRequest] = useState(false);
  const [responseSent, setReponseSent] = useState(false);
  const [numberGuests, setNumberGuests] = useState(1);

  function isFormFilled() {
    return (
      firstName &&
      firstName !== "" &&
      lastName &&
      lastName !== "" &&
      numberGuests > 0 &&
      selectedTransport &&
      selectedTransport !== ""
    );
  }

  return (
    <div className="w-full md:max-w-sm mx-auto bg-secondary shadow-lg rounded-lg overflow-hidden my-12 md:ml-12 flex flex-col">
      <SubmitFormModal
        sendingRequest={sendingRequest}
        responseSent={responseSent}
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {t("need_a_ride")}
        </h2>
        <p className="text-gray-700 mb-4">{t("we_have_transport_text")}</p>
        <div className="flex flex-col gap-3">
          <FormInput
            placeholder={t("first_name")}
            callback={setFirstName}
            value={firstName}
            paintBg={false}
          />
          <FormInput
            placeholder={t("last_name")}
            callback={setLastName}
            value={lastName}
            paintBg={false}
          />
          <FormInput
            placeholder={t("email")}
            type="email"
            callback={setEmail}
            value={email}
            paintBg={false}
          />
          <FormInput
            placeholder={t("n_guests")}
            type="number"
            callback={setNumberGuests}
            value={numberGuests}
            paintBg={false}
          />
          <FormInput
            placeholder={t("message")}
            type="text"
            callback={setMessage}
            value={message}
            paintBg={false}
          />
          <div className="label mb-2">
            <span className="label-text text-lg font-semibold text-secondary-content">
              {t("departing_city")}
            </span>
          </div>
          <div className="grid grid-cols-2 md:flex-row md:flex md:items-center md:justify-center gap-2">
            {["from_timbo", "from_rio_dos_cedros"].map((option, index) => (
              <label key={index} className="flex-wrap items-center">
                <input
                  type="radio"
                  value={option}
                  id={option}
                  key={option}
                  checked={option === selectedTransport}
                  readOnly
                  onClick={() => setSelectedTransport(option)}
                  className="btn btn-secondary-content btn-block flex"
                  aria-label={t(option)}
                />
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto mb-4 flex justify-center">
        <button
          className={`btn btn-info btn-block max-w-36`}
          disabled={!isFormFilled() && !responseSent}
          onClick={() =>
            SubmitForm(
              "ride_request",
              firstName,
              lastName,
              numberGuests,
              email,
              phone,
              selectedCoolest,
              selectedTransport,
              selectedAccomodation,
              amountClicksRaquele,
              dietRestrictions,
              songRequests,
              specialNeeds,
              message,
              setSendingRequest,
              setReponseSent,
            )
          }
        >
          {t("request_transport")}
        </button>
      </div>
    </div>
  );
}

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
