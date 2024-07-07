import React from "react";
import Starter from "./components/Starter";
import Momo from "./components/Momo";
import VegetableTarkariCurry from "./components/VegetableTarkariCurry";
import Tandori from "./components/Tandori";
import TikaMasala from "./components/TikaMasala";
import Sides from "./components/Sides";
import { StyledDiv } from "./style";

const FromTheKitchen = () => {
  return (
    <StyledDiv>
      <Starter />
      <Momo />
      <VegetableTarkariCurry />
      <TikaMasala />
      <Tandori />
      <Sides />
    </StyledDiv>
  );
};

export default FromTheKitchen;
