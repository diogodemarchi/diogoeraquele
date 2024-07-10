import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "./FormInput";
import FormOption from "./FormOption";
import { use } from "i18next";
import { Link } from "react-router-dom";

function Form() {
  const { t } = useTranslation();

  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCoolest, setSelectedCoolest] = useState("Diogo");
  const [selectedTransport, setSelectedTransport] = useState("no_transport");
  const [selectedAccomodation, setSelectedAccomodation] =
    useState("no_i_am_fine");
  const [amountClicksRaquele, setAmountClicksRaquele] = useState(0);
  const [dietRestrictions, setDietRestrictions] = useState("");
  const [songRequests, setSongRequests] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState("");
  const [message, setMessage] = useState("");
  const [sendingRequest, setSendingRequest] = useState(false);
  const [responseSent, setReponseSent] = useState(false);

  const addGuest = () => {
    let newGuest = { firstName: "", lastName: "" };
    console.log(guestList);
    setGuestList([...guestList, newGuest]);
    console.log(guestList);
  };

  const removeGuest = (index) => {
    let data = [...guestList];
    data.splice(index, 1);
    setGuestList(data);
  };

  const handleGuest = (index, field, value) => {
    let data = [...guestList];
    data[index][field] = value;
    setGuestList(data);
  };

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSelectedCoolest = (chosenCoolest) => {
    console.log("click");
    setSelectedCoolest(chosenCoolest);
    if (chosenCoolest === "Raquele") {
      setAmountClicksRaquele(amountClicksRaquele + 1);
      document.getElementById("insane_modal").showModal();
    }
    console.log(selectedCoolest);
  };

  function isFormFilled() {
    return (
      firstName &&
      firstName !== "" &&
      lastName &&
      lastName !== "" &&
      guestList.every(
        (g) =>
          g["firstName"] &&
          g["firstName"] !== "" &&
          g["lastName"] &&
          g["lastName"] !== "",
      ) &&
      isChecked &&
      selectedCoolest === "Diogo"
    );
  }

  const onFinish = async (answer) => {
    try {
      const modal = document.getElementById("modal_finish");
      modal.showModal();
      // disable exit on ESC
      // modal.addEventListener("cancel", (event) => {
      //   event.preventDefault();
      // });
      setSendingRequest(true);
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
      setReponseSent(false);
      await new Promise((r) => setTimeout(r, 2000));
      console.log("done waiting");
      setReponseSent(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="w-full">
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
      <div className="mx-auto w-full max-w-lg flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-3">
          <FormInput placeholder={t("first_name")} callback={setFirstName} />
          <FormInput placeholder={t("last_name")} callback={setLastName} />
        </div>
        <button className="btn btn-outline btn-info" onClick={addGuest}>
          {t("add_guest")}
        </button>
        {guestList.map((_, index) => {
          return (
            <div className="flex flex-col sm:flex-row gap-3" key={index}>
              <FormInput
                placeholder={t("first_name")}
                callback={(event) => handleGuest(index, "firstName", event)}
                value={guestList[index]["firstName"]}
              />
              <FormInput
                placeholder={t("last_name")}
                callback={(event) => handleGuest(index, "lastName", event)}
                value={guestList[index]["lastName"]}
              />
              <div className="m-auto">
                <button
                  className="btn btn-circle btn-outline btn-xs btn-error place-items-center align-middle"
                  onClick={() => removeGuest(index)}
                  key={index}
                  id={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
        <FormInput
          placeholder={t("email")}
          type="email"
          optional={true}
          callback={setEmail}
        />
        <FormInput
          placeholder={t("phone_number")}
          type="tel"
          optional={true}
          callback={setPhone}
        />
        <FormInput
          placeholder={t("type_here")}
          title={t("question_diet_restrictions")}
          optional={true}
          callback={setDietRestrictions}
        />
        <FormInput
          placeholder={t("type_here")}
          title={t("question_song_requests")}
          optional={true}
          callback={setSongRequests}
        />
        <FormInput
          placeholder={t("type_here")}
          title={t("question_special_needs")}
          optional={true}
          callback={setSpecialNeeds}
        />
        <FormInput
          placeholder={t("type_here")}
          title={t("question_message_to_the_couple")}
          optional={true}
          callback={setMessage}
        />
        <FormOption
          title={t("do_you_need_transport")}
          options={[
            "from_timbo",
            "from_rio_dos_cedros",
            "from_somewhere_else",
            "no_transport",
          ]}
          callback={setSelectedTransport}
          selectedValue={selectedTransport}
        />
        <FormOption
          title={t("do_you_need_accomodation")}
          options={["yes_help_out", "no_i_am_fine"]}
          callback={setSelectedAccomodation}
          selectedValue={selectedAccomodation}
        />
        <FormOption
          title={t("who_is_the_coolest")}
          options={["Diogo", "Raquele"]}
          callback={handleSelectedCoolest}
          selectedValue={selectedCoolest}
        />
        {selectedCoolest !== "Diogo" && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{t("wrong_answer_please_choose_diogo")}</span>
          </div>
        )}
        <dialog id="insane_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{t("are_you_insane")}</h3>
            <p className="py-4">{t("you_have_chosen_wrong")}</p>
            <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={() => handleSelectedCoolest("Diogo")}
                  className="btn mr-2"
                >
                  {t("choose_diogo")}
                </button>
                <button className="btn ml-2">{t("close")}</button>
              </form>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <div className="flex items-center gap-1.5  justify-start pl-2">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox-xs checkbox-primary"
                checked={isChecked}
                onChange={handleCheckbox}
              />
            </label>
          </div>
          <h3 className="flex items-center whitespace-nowrap text-xs text-base-content">
            {t("agreement_text_pictures_so_on")}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
          <button
            className={`btn btn-outline btn-success btn-block max-w-36`}
            disabled={!isFormFilled()}
            onClick={() => onFinish("accept")}
          >
            {t("will_attend")}
          </button>
          <button
            title="test"
            className="btn btn-outline btn-block max-w-36 btn-error"
            disabled={!isFormFilled()}
            onClick={() => onFinish("maybe")}
          >
            {t("still_dont_know")}
          </button>
          <button
            title="test"
            className="btn btn-outline btn-block max-w-36 btn-error"
            disabled={!isFormFilled()}
            onClick={() => onFinish("reject")}
          >
            {t("will_not_attend")}
          </button>
        </div>
        {!isFormFilled() && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{t("fill_all_fields")}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
