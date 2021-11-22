import React from "react";
import { css } from "@emotion/css";
import LinkButton from "../components/Button/LinkButton";

const wrapper = css`
  display: flex;
  justify-content: center;
`;

const container = css`
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const heading = css`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const description = css`
  color: #6b7280;
  margin-bottom: 2rem;
`;

function Home(): JSX.Element {
  return (
    <div className={wrapper}>
      <div className={container}>
        <h3 className={heading}>Giving feedback for AI</h3>
        <p className={description}>
          you’ll be trying to teach an AI to act in an environment by giving it
          feedback on how well it is acting.
        </p>
        <LinkButton to="comparison">Start now</LinkButton>
      </div>
    </div>
  );
}

export default Home;
