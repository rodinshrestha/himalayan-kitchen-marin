import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    padding-bottom: 100px;

    @media (max-width: ${theme.breakPoints.md}) {
      padding-bottom: 50px;
    }

    .video-wrapper {
      height: 50vh;
      width: 100%;
      position: relative;

      video {
        object-fit: cover;
      }
      .experience-title-wrapper {
        position: absolute;
        top: 0;
        z-index: 5;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;

        .section-title {
          color: #fff !important;
          text-align: center;
          padding-top: 0;
        }
      }
    }

    .everest-trek-achievement-wrapper {
      margin-top: 60px;
      display: flex;
      gap: 60px;
      @media (max-width: ${theme.breakPoints.md}) {
        flex-direction: column;
      }

      .achievement-contact-form-wrapper {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 50px;
      }

      .everest-camp-content-wrapper {
        flex: 1;
        .everest-base-camp-title {
          margin-bottom: 20px;
        }
        .achievement-trek-content {
          color: ${theme.coreColor.textColor};
          font-size: 21px;
          font-weight: lighter;
          letter-spacing: 1px;
          line-height: 37px;
          position: relative;
          display: flex;
          @media (max-width: ${theme.breakPoints.md}) {
            font-size: 14px;
            line-height: 27px;
          }
        }
      }
    }
  `}
`;
