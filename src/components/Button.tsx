import React, { ReactNode, MouseEvent } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonStyle: string; // Adjust this according to the expected style type
  buttonSize?: string; // Adjust this according to the expected size type
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button", // Default type is set to "button"
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonStyle) ? buttonStyle : SIZES[0];

  return (
    <Link to="/rsvp" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
