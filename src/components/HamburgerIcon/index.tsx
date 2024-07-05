import React from "react";

import clsx from "clsx";
import { StyledDiv } from "./style";

type Props = {
  isMenuOpen: boolean;
  onClick: () => void;
};

const HamburgerMenuIcon = ({ isMenuOpen, onClick }: Props) => {
  return (
    <StyledDiv
      className={clsx("hamburgerMenu action", {
        "is-active": isMenuOpen,
      })}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </StyledDiv>
  );
};

export default HamburgerMenuIcon;
