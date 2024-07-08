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
      {title === "" ? (
        <label className="input input-bordered input-primary text-base-content flex items-center gap-2 bg-base-100">
          {type === "email" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
          )}
          <input
            type={type}
            placeholder={placeholder !== "" ? placeholder : t("type_here")}
            value={value}
            className="grow placeholder-base-content placeholder-opacity-50"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              callback(event.target.value)
            }
          />
          {optional && (
            <span className="badge badge-info">{t("optional")}</span>
          )}
        </label>
      ) : (
        <label className="form-control">
          <textarea
            className="grow textarea textarea-bordered textarea-primary placeholder-base-content placeholder-opacity-50 text-base-content flex items-center gap-2 bg-base-100"
            placeholder={placeholder}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              callback(event.target.value)
            }
          ></textarea>
        </label>
      )}
    </div>
  );
};

export default FormInput;
