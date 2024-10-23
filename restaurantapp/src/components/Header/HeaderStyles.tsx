import styled from "styled-components";

export const StyleHeader = styled.nav`
  .css-ptdwpq-MuiPaper-root-MuiAppBar-root {
    background-color: #4f372f;
  }
  .currentItem {
    text-align: center;
    width: 100%;
  }

  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 23px;
    font-weight: 400;
  }

  @media (min-width: 600px) {
    .isActive {
      border-bottom: 2px solid #fff;
    }
  }
`;
