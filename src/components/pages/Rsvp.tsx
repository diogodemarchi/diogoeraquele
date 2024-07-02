import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "../FormInput";
import Form from "../Form";

const Rsvp: React.FC = () => {
  const { t, i18n, ready } = useTranslation();

  const formFieldStyle: string =
    "input input-bordered input-primary text-black flex items-center gap-2 placeholder:text-black/70 bg-white";
  return (
    <div className="flex justify-center items-center w-full  min-h-screen bg-white px-5 py-5">
      <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
            {t("confirm_presence")}
          </h1>
          <Form />
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
