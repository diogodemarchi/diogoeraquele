import React, { useEffect } from "react";
// import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
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

const YoutubeIcon = () => {
  return (
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current"
      >
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
  );
};

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <Link
          to="/diogoeraquele"
          className="text-primary-content text-2xl flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} />
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
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faHashtag} />
          </div>
          <div className="divider divider-vertical my-1"></div>
          <span className="mb-4">{t("check_out_personal_social_media")}</span>
          <div className="flex w-full flex-row">
            <div className="card grid h-12 flex-grow place-items-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row gap-4 text-xl">
                  <FontAwesomeIcon icon={faCamera} />
                  <FontAwesomeIcon icon={faPaintBrush} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faStrava} />
                </div>
                <span className="badge badge-info badge-sm">Raquele</span>
              </div>
            </div>

            <div className="divider divider-horizontal"></div>
            <div className="card grid h-12 flex-grow place-items-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row gap-4 text-xl">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faStrava} />
                </div>
                <span className="badge badge-info badge-sm">Diogo</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
    // <div className="footer-container">
    //   <section className="footer-subscription">
    //     <p className="footer-subscription-heading">
    //       Join the Adventure newsletter to receive our best vacation deals
    //     </p>
    //     <p className="footer-subscription-text">
    //       You can unsubscribe at any time.
    //     </p>
    //     <div className="input-areas">
    //       <form>
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Your Email"
    //           className="footer-input"
    //         />
    //         <button className="btn btn-outline">Subscribe</button>
    //       </form>
    //     </div>
    //   </section>
    //   <div className="footer-links">
    //     <div className="footer-link-wrapper">
    //       <div className="footer-link-items">
    //         <h2>About Us</h2>
    //         <Link to="/rsvp">How it works</Link>
    //         <Link to="/diogoeraquele">Testimonials</Link>
    //         <Link to="/diogoeraquele">Careers</Link>
    //         <Link to="/diogoeraquele">Investors</Link>
    //         <Link to="/diogoeraquele">Terms of Service</Link>
    //       </div>
    //       <div className="footer-link-items">
    //         <h2>Contact Us</h2>
    //         <Link to="/diogoeraquele">Contact</Link>
    //         <Link to="/diogoeraquele">Support</Link>
    //         <Link to="/diogoeraquele">Destinations</Link>
    //         <Link to="/diogoeraquele">Sponsorships</Link>
    //       </div>
    //     </div>
    //     <div className="footer-link-wrapper">
    //       <div className="footer-link-items">
    //         <h2>Videos</h2>
    //         <Link to="/diogoeraquele">Submit Video</Link>
    //         <Link to="/diogoeraquele">Ambassadors</Link>
    //         <Link to="/diogoeraquele">Agency</Link>
    //         <Link to="/diogoeraquele">Influencer</Link>
    //       </div>
    //       <div className="footer-link-items">
    //         <h2>Social Media</h2>
    //         <Link to="/diogoeraquele">Instagram</Link>
    //         <Link to="/diogoeraquele">Facebook</Link>
    //         <Link to="/diogoeraquele">Youtube</Link>
    //         <Link to="/diogoeraquele">Twitter</Link>
    //       </div>
    //     </div>
    //   </div>
    //   <section className="social-media">
    //     <div className="social-media-wrap">
    //       <div className="footer-logo">
    //         <Link to="/diogoeraquele" className="social-logo">
    //           TRVL
    //         </Link>
    //       </div>
    //       <small className="website-wrights">TRVL C 2024</small>
    //       <div className="social-icons">
    //         <Link
    //           className="social-icon-link facebook"
    //           to="/diogoeraquele"
    //           target="_blank"
    //           aria-label="Facebook"
    //         >
    //           <FontAwesomeIcon icon={faFacebook} />
    //         </Link>
    //         <Link
    //           className="social-icon-link instagram"
    //           to="/diogoeraquele"
    //           target="_blank"
    //           aria-label="Instagram"
    //         >
    //           <FontAwesomeIcon icon={faInstagram} />
    //         </Link>
    //         <Link
    //           className="social-icon-link twiiter"
    //           to="/diogoeraquele"
    //           target="_blank"
    //           aria-label="Twitter"
    //         >
    //           <FontAwesomeIcon icon={faTwitter} />
    //         </Link>
    //         <Link
    //           className="social-icon-link youtube"
    //           to="/diogoeraquele"
    //           target="_blank"
    //           aria-label="Youtube"
    //         >
    //           <FontAwesomeIcon icon={faYoutube} />
    //         </Link>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}
export default Footer;
