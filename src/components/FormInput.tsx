import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface FormInputProps {
  placeholder?: string;
  title?: string;
  type?: string;
  optional?: boolean;
  callback: Dispatch<SetStateAction<string>>;
  value: string;
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
        <div className="label mb-2 max-w-full flex-wrap">
          <span className="label-text text-lg font-semibold text-primary">
            {title}
          </span>
        </div>
      )}
      {title === "" ? (
        <label
          className={`input input-primary text-base-content flex items-center gap-2 bg-base-100 border-primary/80 ${value === "" || typeof value === "undefined" ? !optional && "input-error bg-error/50" : "input-success bg-success/50"}`}
        >
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
          {type === "tel" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 19 18"
              className="w-4 h-4 opacity-70"
            >
              <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
            </svg>
          )}
          <input
            id="mandatoryValue"
            type={type}
            placeholder={placeholder !== "" ? placeholder : t("type_here")}
            value={value}
            className="grow placeholder-base-content placeholder-opacity-50"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              callback(event.target.value)
            }
          />
          {optional && (
            <span className="badge badge-info badge-sm">{t("optional")}</span>
          )}
        </label>
      ) : (
        <label className="textarea flex items-center gap-2 text-base-content bg-base-100 border-primary/80">
          <textarea
            className="grow textarea placeholder-base-content placeholder-opacity-50 text-base-content flex gap-2 bg-base-200/40"
            placeholder={placeholder}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              callback(event.target.value)
            }
          />
          {optional && (
            <span className="badge badge-info badge-sm">{t("optional")}</span>
          )}
        </label>
      )}
    </div>
  );
};

export default FormInput;
