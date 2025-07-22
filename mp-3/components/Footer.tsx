import styled from "styled-components";

const FooterWrapper = styled.footer`
  font-size: calc(16px * 0.9);
  background-color: #0077b5;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 0 20px 0 20px;
  margin-top: auto;
  border-radius: 0 0 4px 4px;

  a {
    color: #e6f0f6;
    text-decoration: underline;
    margin-left: 5px;
    transition: color 0.2s ease;

    &:hover {
      color: #cce7f3;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>
        &copy; Aidan Yagoobi | All Rights Reserved
        <a href="#">Credits</a>
      </p>
    </FooterWrapper>
  );
}
