import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const container = css`
  padding-left: 2rem;
  padding-right: 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

const header = css`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const titleLink = css`
  align-items: center;
  text-decoration: none;
  font-size: 1.25rem;
  color: inherit;
`;

export default function Header(): JSX.Element {
  return (
    <div className={container}>
      <header className={header}>
        <Link to="/" className={titleLink}>
          Learning from human preferences
        </Link>
      </header>
    </div>
  );
}
