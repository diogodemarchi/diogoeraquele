import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { items } from "./DefaultItems";

function CardItems() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col mx-4 sm:flex-row sm:flex-wrap gap-12 justify-center mb-12">
      {items
        .filter((item) => item.key !== "home")
        .map((item, index) => (
          <div
            key={item.key}
            className="card shadow-xl compact bg-base-100 basis-1/4 min-w-64"
          >
            <Link key={`${item.key}1`} to={item.to} className="card h-full">
              <figure key={index}>
                <img
                  key={`${item.key}`}
                  src={item.cardImgSrc}
                  alt={t(item.key)}
                />
              </figure>
              <div key={`${item.key}2`} className="card-body">
                <h2 key={`h2${index}`} className="card-title">
                  {t(item.key)}
                </h2>
                <p key={index}>{t(item.cardText)}</p>
                <div
                  key={`${item.key}3`}
                  className="card-actions justify-end place-items-end"
                >
                  {item.labels.map((label) => (
                    <div
                      key={`${item.key}${label}`}
                      className="badge badge-outline"
                    >
                      {t(label)}
                    </div>
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
