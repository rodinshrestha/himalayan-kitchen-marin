import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 100;
    background-color: ${theme.coreColor.bg};

    @keyframes slideDown {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }

    &.sticky {
      position: fixed;
      width: 100vw;
      backdrop-filter: blur(10px);
      animation: slideDown 0.35s ease-out;

      &.showBoxShadow {
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
      }
    }

    .header-wrapper {
      display: flex;
      justify-content: space-between;
      height: 90px;
      @media (max-width: ${theme.breakPoints.md}) {
        height: 60px;
      }

      .logo-wrapper {
        display: flex;
        justify-content: center;
        position: relative;
        text-decoration: none;
        font-family: ${theme.font.defaultSystemTheme};
        padding: 10px 0;
        height: 150px;
        width: 150px;
        img {
          vertical-align: middle;

          @media (max-width: ${theme.breakPoints.md}) {
            width: 75px;
            height: 75px;
          }
        }
      }

      .menu-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;

        ul {
          list-style: none;
          display: flex;
          gap: 20px;
          font-size: 18px;
          @media (max-width: ${theme.breakPoints.Lg}) {
            display: none;
          }

          .menu-list {
            cursor: pointer;
            position: relative;
            &::before {
              position: absolute;
              content: "";
              bottom: -8px;
              height: 2px;
              width: 100%;
              visibility: hidden;
              background-color: ${theme.color.orange["100"]};
              -webkit-transform: scaleX(0);
              transform: scaleX(0);
              -webkit-transition: all 0.3s ease-in-out 0s;
              transition: all 0.3s ease-in-out 0s;
            }

            &:hover {
              opacity: 0.8;
              color: ${theme.color.orange["100"]};
              &::before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
              }
            }

            &.active {
              color: ${theme.color.orange["100"]};
              &::before {
                visibility: visible;
                transform: scaleX(1);
                -webkit-transform: scaleX(1);
              }
            }
            a {
              color: inherit;

              padding: 0 5px;
            }
          }
        }

        .menu-link {
          outline: none;
          background-color: transparent;
          border: none;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0.25em;
          color: ${theme.color.white["100"]};
          text-transform: uppercase;
          position: relative;
          cursor: pointer;
          transition: all 0.4 ease-in-out;
          &:hover {
            opacity: 0.8;
          }

          @media (max-width: ${theme.breakPoints.md}) {
            display: none;
          }
        }
      }
    }
  `}
`;
