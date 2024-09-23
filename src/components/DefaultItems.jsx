import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const items = [
  {
    to: "/diogoeraquele",
    key: "home",
    labels: ["home"],
    cardText: "",
    cardImgSrc: process.env.PUBLIC_URL + "/images/paris-compressed.jpg",
  },
  {
    to: "/arrival",
    key: "getting_there",
    labels: ["directions", "tips", "shuttle"],
    cardText: "getting_there_card_text",
    cardImgSrc:
      process.env.PUBLIC_URL + "/images/couple/couple-rio-ada-far.jpg",
  },
  {
    to: "/wedding",
    key: "wedding",
    labels: ["schedule", "guidelines"],
    cardText: "wedding_card_text",
    cardImgSrc: process.env.PUBLIC_URL + "/images/couple/some-wedding.jpg",
  },
  {
    to: "/our-history",
    key: "our_history",
    labels: ["couple", "pictures", "timeline"],
    cardText: "our_history_card_text",
    cardImgSrc: process.env.PUBLIC_URL + "/images/couple/canyons.jpg",
  },
  {
    to: "/vacation",
    key: "vacation",
    labels: ["fun", "party"],
    cardText: "vacation_card_text",
    cardImgSrc: process.env.PUBLIC_URL + "/images/couple/praia-bc.jpg",
  },
  {
    to: "/faq",
    key: "faq",
    labels: ["question", "answer"],
    cardText: "faq_card_text",
    cardImgSrc: process.env.PUBLIC_URL + "/images/couple/faq-pic.jpg",
  },
];

function DefaultItems({ callback }) {
  const { t } = useTranslation();
  return (
    <>
      {items.map((item, index) => (
        <li className="h-20" key={index}>
          <Link
            to={item.to}
            className="text-base-content flex items-center p-2 h-full focus:bg-transparent"
            onClick={callback}
          >
            {t(item.key)}
          </Link>
        </li>
      ))}
    </>
  );
}

export { items };
export default DefaultItems;
