import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { CHICKEN_CURRIES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const Momo = () => {
  const data = useAllMarkdownData("chicken_curries");

  if (!data.length) return null;

  const { momo_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {CHICKEN_CURRIES}
        </Typography>
        {momo_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {momo_description}
          </Typography>
        )}
      </div>
      <div className="menu-wrapper">
        {data.map((x, i) => {
          return <DisplayMenu {...x} key={i} />;
        })}
      </div>
    </StyledDiv>
  );
};

export default Momo;
