import styled, { keyframes } from "styled-components"

export const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

export const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e87b3a;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 640px) {
    padding: 0 4px;
  }
`

export const Logo = styled.div`
  padding: 0;
  color: white;
`

export const Image = styled.img`
  margin: 0;
  transition: all 0.4s ease-in-out;

  @media (max-width: 640px) {
    padding: 2px;
  }
`

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 3px;
    background-color: ${({ open }) => (open ? "#ccc" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

export const Ul = styled.ul`
  margin: auto 0;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Katwijk";

  li {
    margin: 0;
    padding: 0 1rem;
  }

  .link {
    text-decoration: none;
    display: block;
    border: 0px;
    color: #fff;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.2s ease-in;

    :hover {
      color: #ffd007;
      border-bottom: 2px solid #ffd007;
    }
  }
  .active-link {
    color: #ffd007;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #295c91;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    font-size: 2.5rem;
    padding: 6rem 0 0 0;
    transition: transform 0.3s ease-in-out;
    z-index: ${({ open }) => (open ? 5 : 3)};
    font-family: "Graph";
    outline: none;
    box-shadow: none;

    li {
      margin-bottom: 1rem;
      padding: 0.7rem 1rem;
    }

    .link {
      color: #fff;
      text-decoration: none;

      :hover {
        color: #ffd007;
        border-bottom: 2px solid transparent;
      }
    }
    .active-link {
      color: #ffd007;
    }
  }
`
