import React from "react";
import settings from "content/settings/settings.json";
import Typography from "../Typography";
import { StyledFooter } from "./style";
const Footer = () => {
  const { footer_text = "© Himalayan Sherpa Kitchen 2024" } = settings || {};
  return (
    <StyledFooter id="footer">
      <Typography as="subtitle2">{footer_text}</Typography>
    </StyledFooter>
  );
};

export default Footer;
