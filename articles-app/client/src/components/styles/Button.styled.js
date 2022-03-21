/** @format */

import styled from "styled-components";

export const Button = styled.button`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  padding: 0.3rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
