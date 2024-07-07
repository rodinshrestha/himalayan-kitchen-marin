import React from "react";
import Starter from "./components/Starter";
import Momo from "./components/Momo";
import Curry from "./components/Curry";
import Tandori from "./components/Tandori";
import TikaMasala from "./components/TikaMasala";
import Sides from "./components/Sides";
import { StyledDiv } from "./style";

const FromTheKitchen = () => {
  return (
    <StyledDiv>
      <Starter />
      <Momo />
      <Curry />
      <Tandori />
      <TikaMasala />
      <Sides />
    </StyledDiv>
  );
};

export default FromTheKitchen;
