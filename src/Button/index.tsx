import React, { FC, memo, MouseEvent } from "react";

interface ButtonProps {
  handleClick: Function
}

const Button: FC<ButtonProps> = ({ handleClick }) => {

  function onClick(e: MouseEvent<HTMLButtonElement>): void {
    handleClick();
  }

  return <button onClick={onClick}>Click me!!!</button>;
};

export default memo(Button);
