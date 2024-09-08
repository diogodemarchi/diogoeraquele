import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faGithub,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faPaintBrush,
  faCamera,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { Trans, useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <Link
          to="/diogoeraquele"
          className="text-primary-content text-2xl flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img alt="" src={process.env.PUBLIC_URL + "/images/logo.png"} />
        </Link>
        <p className="font-bold">
          Raquele & Diogo
          <br />
          {t("rocking_since")}
        </p>
        <p>
          <Trans
            i18nKey="made_for_text"
            components={{
              heart: (
                <FontAwesomeIcon icon={faHeart} beat className="text-red-500" />
              ),
            }}
          ></Trans>
        </p>
      </aside>
      <nav>
        <div className="flex w-full flex-col items-center">
          <span className="mb-4">{t("check_out_couple_social_media")}</span>
          <div className="grid grid-flow-col gap-4 text-xl">
            <FontAwesomeIcon
              className="btn btn-ghost btn-xs hover:bg-transparent p-0 m-0"
              onClick={() =>
                openInNewTab(
                  "https://www.youtube.com/channel/UCYrl3hdwxGHmVaVEbp-uaBQ",
                )
              }
              icon={faYoutube}
            />
            <FontAwesomeIcon
              className="btn btn-ghost btn-xs hover:bg-transparent p-0 m-0"
              onClick={() => openInNewTab("https://github.com/diogodemarchi/")}
              icon={faGithub}
            />
            <FontAwesomeIcon
              className="btn btn-ghost btn-xs hover:bg-transparent p-0 m-0"
              onClick={() =>
                openInNewTab(
                  "https://www.instagram.com/explore/tags/raqueleediogo",
                )
              }
              icon={faHashtag}
            />
          </div>
          <div className="divider divider-vertical my-1"></div>
          <span className="mb-4">{t("check_out_personal_social_media")}</span>
          <div className="flex w-full flex-row">
            <div className="card grid h-12 flex-grow place-items-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row gap-4 text-xl">
                  <FontAwesomeIcon
                    className="btn btn-ghost btn-xs hover:bg-transparent p-0 m-0"
                    onClick={() =>
                      openInNewTab("https://www.instagram.com/conti.jpg/")
                    }
                    icon={faCamera}
                  />
                  <FontAwesomeIcon
                    className="btn btn-ghost btn-xs hover:bg-transparent p-0 m-0"
                    onClick={() =>
                      openInNewTab("https://www.instagram.com/conti.arts/")
                    }
                    icon={faPaintBrush}
                  />
                  <FontAwesomeIcon
                    className="btn btn-ghost btn-xs hover:bg-transparent p-0 m-0"
                    onClick={() =>
                      openInNewTab("https://www.instagram.com/raquelegc/")
                    }
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="btn btn-ghost btn-xs hover:bg-transparent p-0 m-0"
                    onClick={() =>
                      openInNewTab("https://www.strava.com/athletes/47476490")
                    }
                    icon={faStrava}
                  />
                </div>
                <span className="badge badge-info badge-sm">Raquele</span>
              </div>
            </div>

            <div className="divider divider-horizontal"></div>
            <div className="card grid h-12 flex-grow place-items-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row gap-4 text-xl">
                  <FontAwesomeIcon
                    className="btn btn-ghost btn-xs hover:bg-transparent p-0 m-0"
                    onClick={() =>
                      openInNewTab("https://www.instagram.com/diogodemarchi/")
                    }
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="btn btn-ghost btn-xs hover:bg-transparent p-0 m-0"
                    onClick={() =>
                      openInNewTab("https://www.strava.com/athletes/45251064")
                    }
                    icon={faStrava}
                  />
                </div>
                <span className="badge badge-info badge-sm">Diogo</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
}
export default Footer;
