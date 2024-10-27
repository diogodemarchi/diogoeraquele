import { useTranslation } from "react-i18next";
import HistoryTimeline from "../HistoryTimeline";
import VideoCarousel from "../VideoCarousel";
import Footer from "../Footer";

function History() {
  const { t } = useTranslation();

  return (
    <>
      <div className="justify-center flex items-baseline w-full min-h-screen py-5">
        <div className="xl:max-w-7xl bg-primary-content drop-shadow-xl border border-black/20 w-full rounded-md justify-between items-stretch px-5 xl:px-5 py-5">
          <div className="mx-auto w-full">
            <h1 className="text-3xl text-center mb-8">
              {t("our_history_in_videos")}
            </h1>
            <VideoCarousel />
            <div className="w-full my-4">
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/couple-banner.jpg"}
                className="w-full h-auto max-h-96 object-cover rounded-xl"
              />
            </div>
            <h1 className="text-3xl text-center mb-8">
              {t("our_history_in_facts")}
            </h1>
            <HistoryTimeline />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default History;
