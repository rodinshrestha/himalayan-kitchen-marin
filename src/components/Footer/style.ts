import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;

    padding: 40px 0;
    .social-icons-list {
      list-style: none;
      display: flex;
      gap: 20px;
    }

    .copyright {
      list-style: none;
      font-family: ${theme.font.defaultSystemTheme};
      margin-top: 20px;
      opacity: 0.3;
      color: ${theme.coreColor.textColor};
      letter-spacing: 2px;
    }
  `}
`;
