import React from "react";
import Starter from "./components/Starter";
import Momo from "./components/Momo";
import Curry from "./components/Curry";
import Tandori from "./components/Tandori";
import TikaMasala from "./components/TikaMasala";
import Sides from "./components/Sides";
import { StyledDiv } from "./style";

const FromTheKitchen = () => {
  const [accordionState, setAccordionState] = React.useState("");

  return (
    <StyledDiv>
      <Starter
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
      <Momo
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
      <Curry
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
      <Tandori
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
      <TikaMasala
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
      <Sides
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
    </StyledDiv>
  );
};

export default FromTheKitchen;
