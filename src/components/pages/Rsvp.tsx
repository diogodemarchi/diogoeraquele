import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "../FormInput";

const Rsvp: React.FC = () => {
  const { t, i18n, ready } = useTranslation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstQuestion, setFirstQuestion] = useState("");
  const [password, setPassword] = useState("");

  const printState = () => console.log(phone);

  const formFieldStyle: string =
    "input input-bordered input-primary text-black flex items-center gap-2 placeholder:text-black/70 bg-white";
  return (
    <div className="flex justify-center items-center w-full  min-h-screen bg-white px-5 py-5">
      <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
            {t("confirm_presence")}
          </h1>
          <div className="w-full mt-5 sm:mt-8">
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <FormInput
                  placeholder={t("first_name")}
                  callback={setFirstName}
                />
                <FormInput
                  placeholder={t("last_name")}
                  callback={setLastName}
                />
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
                    <input
                      type="checkbox"
                      className="checkbox-xs checkbox-primary"
                    />
                  </label>
                </div>
                <h3 className="flex items-center whitespace-nowrap text-xs text-black">
                  {t("agreement_text")}
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button className="btn btn-active btn-success btn-block max-w-[200px]">
                  {t("confirm")}
                </button>
                <button className="btn btn-active btn-error btn-block max-w-[200px]">
                  {t("deny")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
//   return (
//     <div className="items-center justify-center bg-center">
//       <iframe
//         src="https://docs.google.com/forms/d/e/1FAIpQLScw9rIdtLuph8wUBYqCH8ESwU0zs7oqXbxHiywYk5TOQ4ONFQ/viewform?embedded=true"
//         width="640"
//         height="1098"
//       >
//         {t("loading")}
//       </iframe>
//     </div>
//   );
// };

// export default Rsvp;

{
  /* 
    <h1 className="bg-product-image flex h-[90vh] items-center justify-center text-3xl bg-center bg-[length:fill] bg-no-repeat text-white text-[100px]">
      {t("rsvp")}
    </h1> */
}
