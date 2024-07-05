import styled, { css } from "styled-components";
import heroBanner from "@/assets/images/hero-banner-image.jpeg";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bg};
    background-image: url(${heroBanner});
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    position: relative;
    overflow: hidden;

    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      content: "";
      background-color: #5e4933;
      opacity: 0.8;
    }
    .container-wrapper {
      width: 100%;
      height: 100%;
      position: relative;

      .play-icon-wrapper {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100px;
        width: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  `}
`;
