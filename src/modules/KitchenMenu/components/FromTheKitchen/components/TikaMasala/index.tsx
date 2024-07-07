import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { TIKA_MASALA } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const TikaMasala = () => {
  const data = useAllMarkdownData("tika_masala");

  if (!data.length) return null;

  const { tika_masala_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {TIKA_MASALA}
        </Typography>
        {tika_masala_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {tika_masala_description}
          </Typography>
        )}
      </div>

      <div className="menu-wrapper">
        {data.map((x, i) => {
          return <DisplayMenu name={x.name} price={x.price} key={i} />;
        })}
      </div>
    </StyledDiv>
  );
};

export default TikaMasala;
