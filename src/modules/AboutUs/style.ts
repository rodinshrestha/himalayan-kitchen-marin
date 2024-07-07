import styled, { css } from "styled-components";
// import heroBanner from "@/assets/images/hero-banner-image.jpeg";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    .about-us-wrapper {
      background-image: url(${""});
      background-color: ${theme.coreColor.bg};
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      position: relative;
      &::before {
        position: absolute;
        height: 100%;
        width: 100%;
        content: "";
        background-color: ${theme.coreColor.accent2};
        opacity: 0.9;
      }

      .about-us-title {
        color: ${theme.coreColor.textColor};
        display: inline-block;

        @media (max-width: ${theme.breakPoints.md}) {
          padding-top: 50px;
        }
      }

      .story-content {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        color: ${theme.coreColor.textColor};
        font-weight: lighter;
        padding-bottom: 100px;

        @media (max-width: ${theme.breakPoints.md}) {
          gap: 20px;
          margin-top: 30px;
          padding-bottom: 50px;
        }
      }
    }
  `}
`;
