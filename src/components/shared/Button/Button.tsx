import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  customClass?: string;
  isDisabled?: boolean;
  clickHandler?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  customClass,
  clickHandler,
  isDisabled,
}) => {
  return (
    <button
    disabled={isDisabled}
      onClick={clickHandler}
      className={`${customClass} ${isDisabled ? 'cursor-not-allowed bg-base-300 text-gray-300' : 'bg-primary-color hover:bg-secondary-color'} text-base-200 transition duration-300 md:py-2 py-1.5 md:px-5 px-4 rounded`}
    >
      {children}
    </button>
  );
};

export default Button;