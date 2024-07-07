import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    padding-bottom: 40px;

    .menu-title-wrapper {
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 20px;

      .h2 {
        padding-top: 40px !important;
        text-align: center;
        @media (max-width: ${theme.breakPoints.md}) {
          text-align: left;
        }
      }
    }
    .kitchen-menu-wrapper {
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      .dish-information-wrapper {
        margin-bottom: 20px;

        .dish-note-content {
          font-style: italic;
        }

        .test {
          font-family: ${theme.font.SoftCafe};
          font-weight: 400;
          font-style: normal;
          -webkit-font-feature-settings: normal;
          font-feature-settings: normal;
          font-variant: normal;
          letter-spacing: 0;
          padding-right: 1px;
          line-height: 0.5;
          text-transform: none;
        }
      }

      .menu-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        column-gap: 40px;
        @media (max-width: ${theme.breakPoints.md}) {
          grid-template-columns: 1fr;
        }
      }
    }

    .service-charge-info-wrapper {
      margin-top: 40px;
      text-align: center;
      border-top: 1px solid #f2f2f2;
      padding-top: 40px;

      .subtitle2 {
        font-size: 16px;
        line-height: 30px;
      }
    }
  `}
`;
