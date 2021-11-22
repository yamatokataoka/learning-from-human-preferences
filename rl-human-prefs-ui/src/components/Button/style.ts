import { css } from "@emotion/css";

const button = css`
  color: #6b7280;
  font-weight: 600;
  background-color: var(--background-color);
  text-align: center;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 0.75rem 2rem 0.75rem 2rem;
  cursor: pointer;

  &:active {
    background-color: #e5e7eb;
  }

  &:hover {
    background-color: #f3f4f6;
  }
`;

export default button;
