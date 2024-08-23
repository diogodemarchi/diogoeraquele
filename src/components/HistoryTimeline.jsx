import { useTranslation } from "react-i18next";

function HistoryItem({ date, title, text, imgSrc, imgSide = "right" }) {
  const { i18n, t } = useTranslation();
  const textSide = imgSide === "right" ? "end" : "start";
  const imgSide_ = imgSide === "right" ? "start" : "end";
  return (
    <>
      <dialog id={title} className="modal">
        <div className="modal-box max-w-full md:w-3/5 max-h-full mx-4 my-4 p-4 rounded-lg overflow-y-auto overflow-auto">
          <form method="dialog">
            <button className="btn btn-sm btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4 text-center">{title}</h3>
          <img className="rounded-xl" src={imgSrc} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className={`hidden md:block timeline-${imgSide_} md:mb-10 md:text-${textSide} md:h-full md:mt-12 mx-2`}
        >
          <time className="font-mono italic">
            {new Date(date).toLocaleDateString(i18n.language, {
              timeZone: "UTC",
            })}
          </time>
          <div className="text-lg font-black">{title}</div>
          {text}
        </div>
        <div
          className={`hidden md:block timeline-${textSide} md:text-${imgSide_}`}
        >
          <div className="md:hidden timeline-start mb-10 md:text-end h-full mt-12 mx-2">
            <time className="font-mono italic">
              {new Date(date).toLocaleDateString(i18n.language, {
                timeZone: "UTC",
              })}
            </time>
            <div className="text-lg font-black">{title}</div>
            {text}
          </div>
          <img
            className="rounded-xl hover:cursor-pointer"
            src={imgSrc}
            onClick={() => document.getElementById(title).showModal()}
          />
        </div>
        <div className="md:hidden block timeline-start md:text-start">
          <div className="timeline-start mb-10 md:text-end h-full mt-12 mx-2">
            <time className="font-mono italic">
              {new Date(date).toLocaleDateString(i18n.language, {
                timeZone: "UTC",
              })}
            </time>
            <div className="text-lg font-black">{title}</div>
            {text}
          </div>
          <img
            className="rounded-xl hover:cursor-pointer"
            src={imgSrc}
            onClick={() => document.getElementById(title).showModal()}
          />
        </div>
        <hr />
      </li>
    </>
  );
}

function HistoryTimeline() {
  const { t } = useTranslation();

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <HistoryItem
        date="1996-07-11"
        title={t("diogo_is_born")}
        text={t("diogo_is_born_text")}
        imgSrc={process.env.PUBLIC_URL + "/images/paris.jpg"}
        imgSide="right"
      />
      <HistoryItem
        date="1996-11-21"
        title={t("raquele_is_born")}
        text={t("raquele_is_born_text")}
        imgSrc={process.env.PUBLIC_URL + "/images/paris.jpg"}
        imgSide="left"
      />
      <HistoryItem
        date="2015-03-01"
        title={t("we_first_met")}
        text={t("we_first_met_text")}
        imgSrc={process.env.PUBLIC_URL + "/images/paris.jpg"}
        imgSide="right"
      />
      <HistoryItem
        date="2017-05-19"
        title={t("we_first_kiss")}
        text={t("we_first_kiss_text")}
        imgSrc={process.env.PUBLIC_URL + "/images/paris.jpg"}
        imgSide="left"
      />
      <HistoryItem
        date="2018-08-24"
        title={t("we_first_came_to_germany")}
        text={t("we_first_came_to_germany_text")}
        imgSrc={process.env.PUBLIC_URL + "/images/paris.jpg"}
        imgSide="right"
      />
      <HistoryItem
        date="2023-10-28"
        title={t("we_got_engaged")}
        text={t("we_got_engaged_text")}
        imgSrc={process.env.PUBLIC_URL + "/images/cristo-engaged.jpeg"}
        imgSide="left"
      />
      <HistoryItem
        date={new Date().toString()}
        title={t("you_are_reading_this")}
        text={t("thank_you_for_reading_this")}
        imgSrc={process.env.PUBLIC_URL + "/images/paris.jpg"}
        imgSide="right"
      />
      <HistoryItem
        date={"2024-04-26"}
        title={t("our_wedding")}
        text={t("our_wedding_text")}
        imgSrc={process.env.PUBLIC_URL + "/images/paris.jpg"}
        imgSide="left"
      />
    </ul>
  );
}

export default HistoryTimeline;
