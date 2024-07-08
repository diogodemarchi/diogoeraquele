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
      <div className="flex gap-4">
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="radio"
              name="options"
              value={option}
              checked={selectedValue === option}
              onChange={() => callback(option)}
              className="radio radio-primary"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FormOption;
