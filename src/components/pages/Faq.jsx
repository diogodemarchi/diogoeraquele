// accordion

import { useTranslation } from "react-i18next";
import Footer from "../Footer";

function FaqQuestion({ question, answer }) {
  return (
    <details className="collapse collapse-arrow bg-primary/25 mb-2" open>
      <summary className="collapse-title text-xl font-medium">
        {question}
      </summary>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </details>
  );
}

function Faq() {
  const { t } = useTranslation();

  return (
    <>
      <div className="justify-center flex items-baseline w-full min-h-screen py-5">
        <div className="xl:max-w-7xl bg-primary-content drop-shadow-xl border border-black/20 w-full rounded-md justify-between items-stretch px-5 xl:px-5 py-5">
          <div className="mx-auto w-full"></div>
          <h1 className="text-3xl text-center mb-8">
            {t("frequent_questions")}
          </h1>
          <FaqQuestion question={t("question1")} answer={t("answer1")} />
          <FaqQuestion question={t("question2")} answer={t("answer2")} />
          <FaqQuestion question={t("question3")} answer={t("answer3")} />
          <FaqQuestion question={t("question4")} answer={t("answer4")} />
          <FaqQuestion question={t("question5")} answer={t("answer5")} />
          <FaqQuestion question={t("question6")} answer={t("answer6")} />
          <FaqQuestion question={t("question7")} answer={t("answer7")} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
