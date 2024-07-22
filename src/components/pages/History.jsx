import { useTranslation } from "react-i18next";

function HistoryItem({ date, title, text, imgSrc, imgSide = "right" }) {
  const { t } = useTranslation();

  return (
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
        className={`timeline-${imgSide === "right" ? "start" : "end"} mb-10 md:text-${imgSide === "right" ? "end" : "start"} h-full mt-12 mx-2`}
      >
        <time className="font-mono italic">
          {new Date(date).toLocaleDateString()}
        </time>
        <div className="text-lg font-black">{title}</div>
        {text}
      </div>
      <div
        className={`timeline-${imgSide === "right" ? "end" : "start"} m-5 mb-10 md:text-${imgSide === "right" ? "start" : "end"}`}
      >
        <img
          className="rounded-xl hover:cursor-pointer"
          src={imgSrc}
          onClick={() => document.getElementById(title).showModal()}
        />
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
      </div>
      <hr />
    </li>
  );
}

function History() {
  const { t } = useTranslation();

  return (
    <div className="justify-center flex items-baseline w-full min-h-screen py-5">
      <div className="xl:max-w-7xl bg-primary-content drop-shadow-xl border border-black/20 w-full rounded-md justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full">
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
              date={new Date().toString()}
              title={t("you_are_reading_this")}
              text={t("thank_you_for_reading_this")}
              imgSrc={process.env.PUBLIC_URL + "/images/paris.jpg"}
              imgSide="right"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default History;
