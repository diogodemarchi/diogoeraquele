import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface FormInputProps {
  placeholder: string;
  title?: string;
  type?: string;
  optional?: boolean;
  callback: Dispatch<SetStateAction<string>>;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  title = "",
  type = "text",
  optional = false,
  callback,
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {title && (
        <div className="label mb-2">
          <span className="label-text text-lg font-semibold text-[#4A07DA]">
            {title}
          </span>
        </div>
      )}
      <label className="input input-bordered input-primary text-black flex items-center gap-2 bg-white">
        <input
          type={type}
          placeholder={title ? t("type_here") : placeholder}
          className="grow"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            callback(event.target.value)
          }
        />
        {optional && <span className="badge badge-info">{t("optional")}</span>}
      </label>
    </div>
  );
};

export default FormInput;
