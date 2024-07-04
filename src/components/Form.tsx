import React, { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "./FormInput";

const Form: React.FC = () => {
  const { t } = useTranslation();

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
          <button className="btn btn-active btn-outline btn-success btn-block max-w-[200px]">
            {t("confirm")}
          </button>
          <button className="btn btn-outline btn-block max-w-[200px]">
            {t("deny")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
