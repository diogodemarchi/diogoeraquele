import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { items } from "./DefaultItems";

function CardItems() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col mx-4 sm:flex-row sm:flex-wrap gap-12 justify-center">
      {items
        .filter((item) => item.key != "home")
        .map((item, index) => (
          <div
            key={index}
            className="card shadow-xl compact bg-base-100 basis-1/4 min-w-64"
          >
            <Link to={item.to} className="card">
              <figure>
                <img src={item.cardImgSrc} alt={t(item.key)} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{t(item.key)}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  {item.labels.map((label) => (
                    <div className="badge badge-outline">{t(label)}</div>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default CardItems;
