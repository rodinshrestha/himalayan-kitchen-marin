import React from "react";
import settings from "content/settings/settings.json";
import Typography from "../Typography";
import facebookIcon from "@/assets/images/icons/facebook.png";
import instagramIcon from "@/assets/images/icons/instagram.png";

import { StyledFooter } from "./style";
import Icons from "../Icons";
const Footer = () => {
  const {
    footer_text = "© Himalayan Sherpa Kitchen 2024",
    facebook_link,
    instagram_link,
  } = settings || {};
  const isSocialMediaLink = Boolean(facebook_link || instagram_link);
  return (
    <StyledFooter id="footer">
      {isSocialMediaLink && (
        <div className="footer-icon-list">
          {facebook_link && (
            <a href={facebook_link}>
              <Icons icon={facebookIcon} />
            </a>
          )}
          {instagram_link && (
            <a href={instagram_link}>
              <Icons icon={instagramIcon} />
            </a>
          )}
        </div>
      )}
      <Typography as="subtitle2" className="copyright">
        {footer_text}
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
