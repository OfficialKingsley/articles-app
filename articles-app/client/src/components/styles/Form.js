/** @format */

import styled from "styled-components";

export const Form = styled.form`
  .container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    padding: 0 2rem;
  }
  .form-title {
    margin-bottom: 2rem;
    text-align: center;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
  input,
  textarea,
  button {
    padding: 0.3rem;
    margin-bottom: 1rem;
    resize: none;
    border-radius: 4px;
  }
  input,
  textarea {
    border: 1px solid gray;
  }
  input:hover,
  textarea:hover,
  input:focus,
  textarea:focus {
    box-shadow: 1px -1px 10px blue;
    outline: none;
  }
  textarea {
    min-height: 60vh;
    /* max-width: 90vw; */
  }
`;
