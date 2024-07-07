import Accordion from "@/components/Accordion";
import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { BEER } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import drinksHelper from "content/settings/drinks_menu_helper.json";
import Typography from "@/components/Typography";

const Beer = () => {
  const data = useAllMarkdownData("beer");

  if (!data.length) return null;

  const { beer_description } = drinksHelper || {};

  return (
    <div>
      <Typography as="h3" className="menu-title">
        {BEER}
      </Typography>
      <div className="table-wrapper">
        {beer_description && (
          <p className="dish-note-content">{beer_description}</p>
        )}

        <div className="menu-wrapper">
          {data.map((x, i) => {
            return <DisplayMenu name={x.name} price={x.price} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Beer;
