import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
      .price-group {
        font-weight: bold;
        .span {
          text-decoration: underline;
        }
      }
    }

    .price-group {
      display: flex;

      .span {
        display: flex;
        align-self: center;
      }
    }
  `}
`;
