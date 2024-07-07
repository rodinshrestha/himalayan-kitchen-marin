import * as React from "react";
import "./src/theme/GlobalStyles";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="SoftCafe Sym SC"
      href="https://s3.amazonaws.com/imenupro-fonts/SoftSym.woff"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]);
};
