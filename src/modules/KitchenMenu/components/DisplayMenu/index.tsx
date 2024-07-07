import React from "react";
import { StyledDiv } from "./style";
import Typography from "@/components/Typography";

type Props = {
  name: string;
  desc?: string;
  price: string;
};

const DisplayMenu = ({ name, desc, price }: Props) => {
  return (
    <StyledDiv>
      <div className="dish-group">
        <Typography as="h6">{name}</Typography>

        <Typography as="subtitle2">{desc}</Typography>
      </div>
      <div className="price-group">
        <Typography as="span">{price}</Typography>
      </div>
    </StyledDiv>
  );
};

export default DisplayMenu;
