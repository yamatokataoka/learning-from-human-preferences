import React from "react";
import { useNavigate } from "react-router-dom";
import button from "./style";

type Props = {
  to: string;
  children: string;
};

function LinkButton({ children, to }: Props): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button type="button" onClick={handleClick} className={button}>
      {children}
    </button>
  );
}

export default LinkButton;
