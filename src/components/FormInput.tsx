import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface FormInputProps {
  placeholder?: string;
  title?: string;
  type?: string;
  optional?: boolean;
  callback: Dispatch<SetStateAction<string>>;
  value?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder = "",
  title = "",
  type = "text",
  optional = false,
  callback,
  value,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      {title && (
        <div className="label mb-2">
          <span className="label-text text-lg font-semibold text-primary">
            {title}
          </span>
        </div>
      )}
      <label className="input input-bordered input-primary text-base-content flex items-center gap-2 bg-base-100">
        <input
          type={type}
          placeholder={placeholder !== "" ? placeholder : t("type_here")}
          value={value}
          className="grow placeholder-base-content placeholder-opacity-50"
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
