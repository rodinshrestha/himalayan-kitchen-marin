import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { SPARKLING_WINES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import drinksHelper from "content/settings/drinks_menu_helper.json";
import Typography from "@/components/Typography";

const SparklingWines = () => {
  const data = useAllMarkdownData("sparkling_wines");

  if (!data.length) return null;

  const { sparkling_wine_description } = drinksHelper || {};

  return (
    <div>
      <Typography as="h3" className="menu-title">
        {SPARKLING_WINES}
      </Typography>
      <div className="table-wrapper">
        {sparkling_wine_description && (
          <p className="dish-note-content">{sparkling_wine_description}</p>
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

export default SparklingWines;
