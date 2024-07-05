import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-font-smoothing: subpixel-antialiased;
    box-sizing: border-box;
    text-rendering: optimizelegibility;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 200 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/oswald/v53/TK3iWkUHHAIjg752FD8Gl-1PK62t.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }

  @font-face {
    font-family: "Vollkorn";
    font-style: italic;
    font-weight: 400 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb7GDoxxrvAnPhYGxksWEseqTo29TfO-Q.woff2)
      format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }

  body {
    background-color: ${theme.color.white["100"]};
    overflow-x: hidden;
    font-family: ${theme.font.defaultSystemTheme};
    width: 100%;

    &.menu-open {
      height: 100vh;
      overflow: hidden;
    }

    .feature-image-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }

  a {
    text-decoration: none;
  }

  .page-not-found-wrapper {
    padding: 15rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .not-found-title {
      font-size: 67px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      .not-found-status-code {
        font-size: 100px;
      }
    }

    .not-found-helper-text {
      font-size: 24px;
      margin: 30px 0;
      color: #fff;
    }
    border-top: 1px solid rgba(212, 212, 255, 0.1);
  }
`}

 
`;
