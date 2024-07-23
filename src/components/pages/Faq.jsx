// accordion

import { useTranslation } from "react-i18next";

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
    <div className="justify-center flex items-baseline w-full min-h-screen py-5">
      <div className="xl:max-w-7xl bg-primary-content drop-shadow-xl border border-black/20 w-full rounded-md justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full"></div>
        <h1 className="text-xl font-bold text-center mb-8">
          {t("frequent_questions")}
        </h1>
        <FaqQuestion question={t("question")} answer={t("answer")} />
        <FaqQuestion question={t("question")} answer={t("answer")} />
        <FaqQuestion question={t("question")} answer={t("answer")} />
        <FaqQuestion question={t("question")} answer={t("answer")} />
        <FaqQuestion question={t("question")} answer={t("answer")} />
        <FaqQuestion question={t("question")} answer={t("answer")} />
        <FaqQuestion question={t("question")} answer={t("answer")} />
      </div>
    </div>
  );
}

export default Faq;
