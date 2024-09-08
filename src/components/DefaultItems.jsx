import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const items = [
  {
    to: "/diogoeraquele",
    key: "home",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/paris-compressed.jpg",
  },
  {
    to: "/arrival",
    key: "getting_there",
    labels: ["label"],
    cardImgSrc:
      process.env.PUBLIC_URL + "/images/couple/couple-rio-ada-far.jpeg",
  },
  {
    to: "/wedding",
    key: "wedding",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/couple/some-wedding.jpeg",
  },
  {
    to: "/our-history",
    key: "our_history",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/couple/canyons.jpeg",
  },
  {
    to: "/vacation",
    key: "vacation",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/paris-compressed.jpg",
  },
  {
    to: "/faq",
    key: "faq",
    labels: ["label"],
    cardImgSrc: process.env.PUBLIC_URL + "/images/paris-compressed.jpg",
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
