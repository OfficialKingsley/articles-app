/** @format */

import styled from "styled-components";

export const Art = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 1rem 2rem 1rem 2rem;
    border-top: 2px solid white;
    min-height: calc(100vh - 70px);
    p {
      flex: 1;
      border: 2px solid yellow;
      padding: 0.5rem;
      line-height: 20px;
      word-spacing: 5px;
    }
  }

  .title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .content-footer {
    padding-top: 0.5rem;
    .buttons {
      padding-top: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
