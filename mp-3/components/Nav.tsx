import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background-color: #e6f0f6;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
  width: 30%;
  border-radius: 4px;
  margin: 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    margin: 10px 0;
  }

  /* Style the react-router Link as if it were an <a> */
  a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    padding: 10px;
    transition: color 0.2s ease;

    &:hover {
      color: #0077b5;
    }
  }

  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 2px 2px;
    font-size: 12px;
    background-color: #ffffff;

    ul {
      flex-direction: row;
      align-content: center;
    }

    li {
      margin: 0 2px 0 0;
    }
  }
`;

export default function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/edu">Education</Link></li>
        <li><Link to="/emp">Employment</Link></li>
        <li><Link to="/pat">Patents</Link></li>
        <li><Link to="/proj">Projects</Link></li>
        <li><Link to="/ref">References</Link></li>
      </ul>
    </NavWrapper>
  );
}
