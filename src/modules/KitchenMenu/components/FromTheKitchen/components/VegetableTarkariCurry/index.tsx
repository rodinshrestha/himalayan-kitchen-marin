import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { VEGETABLE_TARKARI } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const VegetableTarkariCurry = () => {
  const data = useAllMarkdownData("vegetable_tarkari_curries");

  if (!data.length) return null;

  const { vegetable_tarkari_curry_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {VEGETABLE_TARKARI}
        </Typography>
        {vegetable_tarkari_curry_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {vegetable_tarkari_curry_description}
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

export default VegetableTarkariCurry;
