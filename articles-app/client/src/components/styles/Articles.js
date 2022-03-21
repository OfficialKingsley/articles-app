/** @format */

import styled from "styled-components";

export const Arts = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 1rem 2rem 0 2rem;
    border-top: 2px solid white;
  }
  .list-group {
    .list-item {
      border: 2px solid white;
      background-color: rgb(85, 82, 133);
      padding: 0.3rem;
      margin-bottom: 2rem;
    }
  }
  .title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 3rem;
  }
  button {
    width: 100%;
  }
`;
