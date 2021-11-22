import React from "react";
import { useHistory } from "react-router-dom";
import button from "./style";

type Props = {
  to: string;
  children: string;
}

function LinkButton({ children, to }: Props): JSX.Element {
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  };

  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className={button}
    >
      {children}
    </button>
  );
}

export default LinkButton;