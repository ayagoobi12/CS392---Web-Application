import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #0077b5;
  color: white;
  text-align: left;
  padding: 20px;
  border-radius: 4px;
  margin: 20px 20px 0 20px; /* top, right, bottom, left */

  h1 {
    font-size: calc(16px * 2.2);
    font-weight: 700;
    margin-bottom: 5px;
  }

  p {
    margin: 5px 0;
    font-size: calc(16px * 1);
    color: #e6f0f6;
    opacity: 0.95;

    a {
      color: white;
      text-decoration: underline;
      font-weight: 600;
      transition: color 0.2s ease;

      &:hover {
        color: #cce7f3;
      }
    }

    img.github-icon {
      display: inline-block;
      height: calc(16px * 3.125);
      width: calc(16px * 3.125);
      vertical-align: middle;
      margin-left: 5px;
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>Aidan Yagoobi</h1>
      <p>Computer Science Graduate from Boston University</p>
      <p>MIT AI Alignment | Boston University</p>
      <p>
        United States | Boston, MA |{' '}
        <a href="https://github.com/aidanyagoobi" target="_blank" rel="noopener noreferrer">
          GitHub <img className="github-icon" src="../imgs/github.png" alt="GitHub Logo" />
        </a>
      </p>
    </HeaderWrapper>
  );
}
