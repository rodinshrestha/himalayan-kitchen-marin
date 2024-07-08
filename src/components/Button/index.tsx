import { Link } from "gatsby";
import React from "react";
import { StyledButton, StyledLink } from "./style";
import clsx from "clsx";

type Props = {
  label?: string;
  skin: "contained" | "outline";
  rel?: string;
  children: React.ReactNode;
  href?: string;
  alt?: string;
  className?: string;
  size?: "md" | "sm" | "lg";
  disabled?: boolean;
  loader?: boolean;
  onClick?: () => void;
};

const Button = ({
  label,
  skin,
  href,
  className,
  rel,
  children,
  size,
  disabled,
  loader,
  onClick,
}: Props) => {
  if (href) {
    return (
      <StyledLink>
        <Link
          to={href}
          className={clsx(className, skin, size)}
          aria-label={label || "link-button"}
          rel={rel}
        >
          {children}
        </Link>
      </StyledLink>
    );
  }

  return (
    <StyledButton
      className={clsx(className, skin, size, { disabled, isLoading: loader })}
      aria-label={label || "button"}
      onClick={() => (!disabled || !loader) && onClick?.()}
    >
      {loader ? "Loading..." : children}
    </StyledButton>
  );
};

export default Button;
