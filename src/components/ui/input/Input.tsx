import { FC, InputHTMLAttributes } from "react";


import "./Input.css";
import { classNames } from "lib/classnames/classNames";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<IInputProps> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <input
      className={classNames('default-input', {}, [className ?? ''])}
      {...otherProps}
    >
      {children}
    </input>
  );
};
