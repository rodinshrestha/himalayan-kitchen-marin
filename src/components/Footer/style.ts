import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px 20px 20px;
    flex-direction: column;

    .footer-icon-list {
      display: flex;
      margin-bottom: 10px;
    }

    .copyright {
      color: ${theme.coreColor.textColor};

      @media (max-width: ${theme.breakPoints.md}) {
        text-align: center;
      }
    }
  `}
`;
