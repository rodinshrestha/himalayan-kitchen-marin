import React from "react";
import { StyledDiv } from "./style";
import Typography from "@/components/Typography";
import { getFoodIcon } from "../../utils/get-food-icon";

type Props = {
  name: string;
  description?: string;
  price: string;
  food_type: Array<string>;
};

const DisplayMenu = ({ name, description, price, food_type }: Props) => {
  const icon = getFoodIcon(food_type);
  return (
    <StyledDiv>
      <div className="dish-group">
        <Typography as="h6">
          {icon.map((x, i) => (
            <span className="food-icon" title={x.type} key={i}>
              {x.icon}
            </span>
          ))}
          {name}
        </Typography>

        <Typography as="subtitle2">{description}</Typography>
      </div>
      <div className="price-group">
        <Typography as="span">{price}</Typography>
      </div>
    </StyledDiv>
  );
};

export default DisplayMenu;
