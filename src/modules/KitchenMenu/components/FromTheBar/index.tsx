import React from "react";
import { StyledDiv } from "./style";
import Beer from "./components/Beer";
import Beverages from "./components/Beverages";
import RedWines from "./components/RedWines";
import SparklingWines from "./components/SparklingWines";
import WhiteWines from "./components/WhiteWines";

const FromTheBar = () => {
  const [accordionState, setAccordionState] = React.useState("");

  return (
    <StyledDiv>
      <Beer />
      <Beverages />
      <RedWines />
      <SparklingWines />
      <WhiteWines />
    </StyledDiv>
  );
};

export default FromTheBar;
