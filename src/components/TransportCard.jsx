import { useState } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "./FormInput";
import { SubmitForm, SubmitFormModal } from "./SubmitForm";

function TransportCard() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTransport, setSelectedTransport] = useState("");
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
            callback={(nGuests) => setNumberGuests(Number(nGuests))}
            value={numberGuests.toString()}
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
              "",
              "",
              "",
              "",
              0,
              "",
              "",
              "",
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

export default TransportCard;
