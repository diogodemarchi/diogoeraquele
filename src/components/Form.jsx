import React, { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "./FormInput";

function Form() {
  const { t } = useTranslation();

  const [guest, setGuest] = useState([]);

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstQuestion, setFirstQuestion] = useState("");

  return (
    <div className="w-full mt-5 sm:mt-8">
      <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-3">
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
              <div className="my-auto">
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
          title={t("some_first_question")}
          optional={true}
          callback={setFirstQuestion}
        />
        <div className="flex items-center gap-1.5  justify-start pl-2">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox-xs checkbox-primary" />
            </label>
          </div>
          <h3 className="flex items-center whitespace-nowrap text-xs text-black">
            {t("agreement_text")}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
          <button className="btn  btn-outline btn-success btn-block max-w-[200px]">
            {t("will_attend")}
          </button>
          <button className="btn btn-outline btn-block max-w-[200px] btn-error">
            {t("will_not_attend")}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Form;
