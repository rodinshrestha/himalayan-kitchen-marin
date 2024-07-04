import styled, { DefaultTheme, css } from "styled-components";

const defaultStyle = (theme: DefaultTheme) => css`
  text-decoration: none;
  height: 3.5em;
  line-height: 3.5em;
  color: ${theme.coreColor.textColor};
  display: inline-block;
  padding: 0 1.75em;
  outline: none;
  font-family: ${theme.font.defaultSystemTheme};
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;

  &.contained {
    background-color: #fff;
    box-shadow: none;
    color: #5e4933;
    color: ${theme.coreColor.textSecondaryColor};
    border: 2px solid ${theme.coreColor.textColor};
    height: 100%;

    &:hover {
      background-color: ${theme.coreColor.highlight};
      border: 2px solid ${theme.coreColor.highlight};
    }
  }

  &.outline {
    box-shadow: none;
    color: ${theme.coreColor.textColor};
    border: 2px solid ${theme.coreColor.textColor};
    height: 100%;

    &:hover {
      border: 2px solid ${theme.coreColor.highlight};
      color: ${theme.coreColor.highlight};
    }
  }

  &.letter-spacing {
    letter-spacing: 2px;
  }

  &.md {
    width: 300px;
    font-size: 18px;

    @media (max-width: ${theme.breakPoints.md}) {
      width: 220px;
      font-size: 14px;
    }
  }

  &.lg {
    width: 450px;
    font-size: 20px;

    @media (max-width: ${theme.breakPoints.md}) {
      width: 320px;
      font-size: 16px;
    }
  }

  &.disabled,
  &.isLoading {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const StyledLink = styled.div`
  ${({ theme }) => css`
    a {
      ${defaultStyle(theme)}
    }
  `}
`;

export const StyledDiv = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    ${defaultStyle(theme)}
  `}
`;
