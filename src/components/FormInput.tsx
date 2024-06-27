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
  title,
  type,
  optional,
  callback,
}) => {
  const { t } = useTranslation();
  let optionalInput = undefined;
  let titleText = undefined;
  const growInput = (
    <input
      type="text"
      placeholder={t("type_here")}
      className="grow"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        callback(event.target.value)
      }
    />
  );

  if (title) {
    // <label className="form-control w-full max-w-xs">
    //   <div className="label">
    //   <span className="label-text">What is your name?</span>
    //   <span className="label-text-alt">Top Right label</span>
    // </div>
    // <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    // <div className="label">
    //   <span className="label-text-alt">Bottom Left label</span>
    //   <span className="label-text-alt">Bottom Right label</span>
    // </div>
    // </label>
    titleText = (
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
    );
  }

  if (optional) {
    optionalInput = <span className="badge badge-info">{t("optional")}</span>;
  }

  if (titleText || optionalInput) {
    return (
      <label className="input input-bordered input-primary text-black flex items-center gap-2 placeholder:text-black/70 bg-white">
        {titleText}
        {growInput}
        {optionalInput}
      </label>
    );
  }

  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70 bg-white"
      // this is for single column
      // input input-bordered input-primary text-black flex items-center gap-2 placeholder:text-black/70 bg-white
      // this is for multi column
      // input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70 bg-white
    />
  );
};

export default FormInput;
