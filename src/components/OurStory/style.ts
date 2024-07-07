import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    padding-bottom: 6em;

    @media (max-width: ${theme.breakPoints.md}) {
      padding-top: 0;
    }

    .our-story-wrapper {
      color: ${theme.coreColor.textColor};
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media (max-width: ${theme.breakPoints.md}) {
        gap: 10px;
      }
    }
  `}
`;
