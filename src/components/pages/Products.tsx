import React from 'react';
import { useTranslation } from 'react-i18next';

const Products: React.FC = () => {
  const { t, i18n, ready } = useTranslation();

  return (
    <h1 className="bg-product-image flex h-[90vh] items-center justify-center text-3xl bg-center bg-[length:fill] bg-no-repeat text-white text-[100px]">
      {t("products")}
    </h1>
  );
}

export default Products;
