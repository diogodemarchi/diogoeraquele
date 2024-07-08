import { useState } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "./FormInput";
import FormOption from "./FormOption";

function Form() {
  const { t } = useTranslation();

  const [guest, setGuest] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstQuestion, setFirstQuestion] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCoolest, setSelectedCoolest] = useState("Diogo");
  const [selectedTransport, setSelectedTransport] = useState("no");
  const [selectedAccomodation, setSelectedAccomodation] = useState("no");

  const addGuest = () => {
    let newGuest = { firstName: "", lastName: "" };
    console.log(guest);
    setGuest([...guest, newGuest]);
    console.log(guest);
  };

  const removeGuest = (index) => {
    let data = [...guest];
    data.splice(index, 1);
    setGuest(data);
    console.log(guest);
    console.log(data);
    console.log(guest);
  };

  const handleGuest = (index, field, value) => {
    let data = [...guest];
    data[index][field] = value;
    setGuest(data);
    console.log(guest);
  };

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSelectedCoolest = (chosenCoolest) => {
    console.log(chosenCoolest);
    setSelectedCoolest(chosenCoolest);
    if (chosenCoolest === "Raquele") {
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
      guest.every(
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

  return (
    <div className="w-full mt-5">
      <div className="mx-auto w-full max-w-lg flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-3">
          <FormInput placeholder={t("first_name")} callback={setFirstName} />
          <FormInput placeholder={t("last_name")} callback={setLastName} />
        </div>
        <button className="btn btn-outline btn-info" onClick={addGuest}>
          {t("add_guest")}
        </button>
        {guest.map((_, index) => {
          return (
            <div className="flex flex-col sm:flex-row gap-3" key={index}>
              <FormInput
                placeholder={t("first_name")}
                callback={(event) => handleGuest(index, "firstName", event)}
                value={guest[index]["firstName"]}
              />
              <FormInput
                placeholder={t("last_name")}
                callback={(event) => handleGuest(index, "lastName", event)}
                value={guest[index]["lastName"]}
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
          callback={setFirstQuestion}
        />
        <FormInput
          placeholder={t("type_here")}
          title={t("question_song_requests")}
          optional={true}
          callback={setFirstQuestion}
        />
        <FormInput
          placeholder={t("type_here")}
          title={t("question_special_needs")}
          optional={true}
          callback={setFirstQuestion}
        />
        <FormInput
          placeholder={t("type_here")}
          title={t("question_message_to_the_couple")}
          optional={true}
          callback={setFirstQuestion}
        />
        <FormOption
          title={t("do_you_need_transport")}
          options={[
            t("from") + " Timbó",
            t("from") + " Rio dos Cedros",
            t("somewhere_else"),
            t("no"),
          ]}
          callback={setSelectedTransport}
          selectedValue={selectedTransport}
        />
        <FormOption
          title={t("do_you_need_accomodation")}
          options={[t("yes_help_out"), t("no_i_am_fine")]}
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
          >
            {t("will_attend")}
          </button>
          <button
            title="test"
            className="btn btn-outline btn-block max-w-36 btn-error"
            disabled={!isFormFilled()}
          >
            {t("still_dont_know")}
          </button>
          <button
            title="test"
            className="btn btn-outline btn-block max-w-36 btn-error"
            disabled={!isFormFilled()}
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
