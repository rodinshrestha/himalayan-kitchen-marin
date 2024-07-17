import React from "react";
import { NON_BEVERAGES_ALCHOLIC } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import DisplayMenu from "../../../DisplayMenu";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const NonAlcholicBeverage = () => {
  const data = useAllMarkdownData("non-alcholic-beverages");

  if (!data.length) return null;

  const { non_beverages_alcholic_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {NON_BEVERAGES_ALCHOLIC}
        </Typography>
        {non_beverages_alcholic_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {non_beverages_alcholic_description}
          </Typography>
        )}
      </div>
      <div className="menu-wrapper">
        {data.map((item, i) => {
          return <DisplayMenu {...item} key={i} />;
        })}
      </div>
    </StyledDiv>
  );
};

export default NonAlcholicBeverage;
