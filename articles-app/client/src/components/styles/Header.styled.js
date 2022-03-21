/** @format */

import styled from "styled-components";

export const Head = styled.header`
  .header-container {
    width: 100%;
    background-color: rgb(0, 7, 28);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 70px;
    padding: 0 0.7rem;
    z-index: 99;
    @media screen and (min-width: 556px) {
      padding: 0 1.5rem;
    }
    @media screen and (min-width: 712px) {
      padding: 0 2rem;
    }
  }
  a {
    color: gray;
  }
  a:hover {
    color: white;
  }
`;
export const Navbar = styled.nav`
  position: absolute;
  top: 70px;
  left: 0;
  background: inherit;
  width: 100%;
  transition: top 0.5s ease-in-out;
  z-index: 2;
  ul {
    li {
      margin: 1rem 0;
      &:not(:last-child) {
        border-bottom: 2px solid gray;
      }
    }
  }
  @media screen and (min-width: 712px) {
    position: static;
    width: auto;
    z-index: 2;
    ul {
      li {
        margin: 0 1rem;
        border: none;
        display: inline-block;
      }
    }
  }
`;
export const Hamburger = styled.div`
  cursor: pointer;
  span {
    background-color: white;
    height: 2px;
    margin-bottom: 0.2rem;
    width: 20px;
    display: block;
  }
  @media screen and (min-width: 712px) {
    display: none;
  }
`;
