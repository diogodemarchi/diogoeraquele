import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const items = [
  {
    to: "/diogoeraquele",
    key: "home",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/paris.jpg",
  },
  {
    to: "/arrival",
    key: "arrival",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/paris.jpg",
  },
  {
    to: "/wedding",
    key: "wedding",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/paris.jpg",
  },
  {
    to: "/our-history",
    key: "our_history",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/paris.jpg",
  },
  {
    to: "/vacation",
    key: "vacation",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/paris.jpg",
  },
  {
    to: "/faq",
    key: "faq",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/paris.jpg",
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
