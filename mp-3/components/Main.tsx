import React from "react";
import styled from "styled-components";

type MainProps = {
  children: React.ReactNode;
  className?: string; // optional: for additional page-specific classes
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  margin: 0 20px; /* left and right spacing to match header/nav/footer */

  /* Typography inside main */
  h3 {
    font-size: calc(16px * 1.5);
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 10px;
    color: #0077b5;
  }

  h4 {
    margin-left: 10px;
    color: #333;
  }

  p {
    font-size: calc(16px * 1);
    color: #333;
    margin-left: 10px;
  }

  /* Image styling inside main */
  img {
    padding: 10px;
    width: 30%;
  }

  /* Responsive: remove side margins on mobile, stack */
  @media screen and (max-width: 750px) {
    margin: 0 20px 0 20px;
    img {
      width: 100%;
    }
  }
`;

export default function Main({ children, className }: MainProps){
  return <MainWrapper className={className}>{children}</MainWrapper>;
}
