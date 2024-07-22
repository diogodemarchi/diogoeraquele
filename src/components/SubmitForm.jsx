import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function SubmitFormModal(sendingRequest, responseSent) {
  const { t } = useTranslation();
  return (
    <dialog id="modal_finish" className="modal">
      <div className={`modal-box ${responseSent ? "bg-success" : "bg-base"}`}>
        <h3
          className={`font-bold text-lg pb-6 text-success-content ${responseSent ? "text-success-content" : "text-base-content"}`}
        >
          {!responseSent ? t("sending_confirmation") : t("sent_confirmation")}
        </h3>
        <div
          className={`flex items-center ${responseSent ? "text-success-content" : "text-base-content"}`}
        >
          {sendingRequest && !responseSent && (
            <>
              <span className="loading loading-spinner loading-lg"></span>
              <span className="pl-2">
                {t("sending_confirmation_please_wait")}
              </span>
            </>
          )}
          {responseSent && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="pl-2">{t("confirmation_sent")}</span>
            </>
          )}
        </div>
        <div className="modal-action my-auto">
          <form method="dialog">
            <Link
              to="/diogoeraquele"
              className="text-primary-content flex items-center p-2 h-full"
            >
              <button className="btn" disabled={!responseSent}>
                {t("home")}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </dialog>
  );
}

const SubmitForm = async (answer, sendingCallback, sentCallback) => {
  try {
    const modal = document.getElementById("modal_finish");
    modal.showModal();
    // disable exit on ESC
    // modal.addEventListener("cancel", (event) => {
    //   event.preventDefault();
    // });
    sendingCallback(true);
    // const formUrl =
    //   "https://docs.google.com/forms/d/e/1FAIpQLSeFLV_wxKvaIiaxt2deQYjE6HyFq78BkblCbWTGeC1WVTOKBg/formResponse?";
    // const response = await fetch(
    //   formUrl +
    //     new URLSearchParams({
    //       "entry.2123682207": answer,
    //       "entry.75741258": firstName,
    //       "entry.276127613": lastName,
    //       "entry.180690125": JSON.stringify(guestList),
    //       "entry.295464470": email,
    //       "entry.65819718": phone,
    //       "entry.1331545422": selectedCoolest,
    //       "entry.1922160049": selectedTransport,
    //       "entry.1836559536": selectedAccomodation,
    //       "entry.167166928": amountClicksRaquele,
    //       "entry.66045006": dietRestrictions,
    //       "entry.687592573": songRequests,
    //       "entry.355837000": specialNeeds,
    //       "entry.1251753864": message,
    //       "entry.1254951546": new Date().toISOString(),
    //     }),
    //   {
    //     mode: "no-cors",
    //   },
    // );
    // setReponseSent(response.status === 0); // 0 because of CORS

    // dummy placeholder not to ddos
    console.log("waiting");
    sentCallback(false);
    await new Promise((r) => setTimeout(r, 2000));
    console.log("done waiting");
    sentCallback(true);
  } catch (e) {
    console.log(e.message);
  }
};

export default { SubmitFormModal, SubmitForm };
