import React from "react";
import { css } from "@emotion/css";
import Button from "../components/Button";

const wrapper = css`
  padding: 2rem;
`;

const container = css`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

const heading = css`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

const grid = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
`;

const clipContainer = css`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding: 1.5rem;
`;

const clip = css`
  text-align: center;
`;

const button = css`
  text-align: center;
`;

function Comparison(): JSX.Element {
  return (
    <div className={wrapper}>
      <div className={container}>
        <h3 className={heading}>Comparison</h3>
        <div className={grid}>
          <div className={clipContainer}>
            <h3 className={clip}>video clip here</h3>
            <Button onClick={() => window.alert("Left")} className={button}>
              Left
            </Button>
          </div>
          <div className={clipContainer}>
            <h3 className={clip}>video clip here</h3>
            <Button onClick={() => window.alert("Right")} className={button}>
              Right
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comparison;
