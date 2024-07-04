import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bg};
    font-family: ${theme.font.defaultSystemTheme};

    border-bottom: 1px solid rgba(212, 212, 255, 0.1);
    border-top: 1px solid rgba(212, 212, 255, 0.1);

    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;

      @media (max-width: ${theme.breakPoints.md}) {
        grid-template-columns: 1fr;
      }

      .form-wrapper {
        border-right: 1px solid rgba(212, 212, 255, 0.1);
        padding: 4em;
        padding-left: 0;
        flex-grow: 1;
        font-family: ${theme.font.defaultSystemTheme};

        @media (max-width: ${theme.breakPoints.md}) {
          padding-top: 3em;
          padding-bottom: 3em;
        }

        @media (max-width: ${theme.breakPoints.md}) {
          border-right: none;
          padding-right: 0;
        }

        .contact-title {
          padding-top: 0;
          margin-bottom: 2em;
        }

        .form-inner-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          row-gap: 40px;

          .col-6 {
            width: 48%;

            @media (max-width: ${theme.breakPoints.md}) {
              width: 100%;
            }
          }

          .col-12 {
            width: 100%;
          }
        }
      }

      .contact-info-warpper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        .contact-method {
          display: flex;
          gap: 20px;
          padding: 60px 40px;
          position: relative;
          width: 100%;
          @media (max-width: ${theme.breakPoints.md}) {
            padding: 40px 0;
            overflow: hidden;
          }

          &::before {
            position: absolute;
            content: "";
            border-bottom: 1px solid rgba(212, 212, 255, 0.1);
            width: calc(100vw + 3em);
            margin-left: -40px;
            bottom: 0;
          }

          &:last-child {
            &::before {
              content: "";
              position: absolute;
              border-bottom: none;
            }
          }

          .content-info {
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: ${theme.coreColor.textColor};
            font-family: inherit;

            a {
              text-decoration: none;
              color: inherit;
              &:hover {
                text-decoration: underline;
              }
            }

            span {
              line-height: 28px;
            }
          }
        }
      }
    }
  `}
`;
