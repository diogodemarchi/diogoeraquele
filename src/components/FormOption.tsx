import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface FormOptionProps {
  title?: string;
  options: string[];
  callback: Dispatch<SetStateAction<string>>;
  selectedValue?: string;
}

const FormOption: React.FC<FormOptionProps> = ({
  title = "",
  options,
  callback,
  selectedValue,
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
      <div className="flex items-center justify-center gap-2">
        {options.map((option, index) => (
          <label key={index} className="flex-wrap items-center gap-2">
            <input
              type="radio"
              name={title}
              value={option}
              id={option}
              key={option}
              checked={option === selectedValue}
              onClick={() => callback(option)}
              className="btn btn-outline btn-primary"
              aria-label={t(option)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default FormOption;
