import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { TARKARI_CURRIES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const Curry = () => {
  const data = useAllMarkdownData("tarkari_curries");

  if (!data.length) return null;

  const { TARKARI_CURRIES_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {TARKARI_CURRIES}
        </Typography>
        {TARKARI_CURRIES_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {TARKARI_CURRIES_description}
          </Typography>
        )}
      </div>
      <div className="menu-wrapper">
        {data.map((x, i) => {
          return (
            <DisplayMenu
              name={x.name}
              desc={x.description}
              price={x.price}
              key={i}
            />
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default Curry;
