import styled, { css } from "styled-components";
import settings from "content/settings/settings.json";

const defaultImage =
  "https://ucarecdn.com/4ea25385-7504-428c-b7e3-7eb823dd24de/-/progressive/yes/-/format/auto/-/resize/2000x/";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bg};
    background-image: url(${settings?.hero_banner_image || defaultImage});
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;

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
