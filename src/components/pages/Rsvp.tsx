import { useTranslation } from "react-i18next";
import Form from "../Form";

function Rsvp() {
  const { t } = useTranslation();

  return (
    <div className="justify-center flex items-baseline w-full min-h-screen py-5">
      <div className="xl:max-w-7xl bg-primary-content drop-shadow-xl border border-black/20 w-full rounded-md justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-primary">
            {t("confirm_presence")}
          </h1>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
