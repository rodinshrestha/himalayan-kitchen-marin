import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `}
`;
