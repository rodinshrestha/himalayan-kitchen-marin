import React from "react";
import { Link } from "gatsby";

import { StyledDiv } from "./style";
import ImageWithFallBack from "../ImageWithFallBack";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import HamburgerMenuIcon from "../HamburgerIcon";
import Drawer from "../Drawer";
import clsx from "clsx";
import logo from "@/assets/images/logo.svg";
import Menu from "../MenuList";
import settings from "content/settings/settings.json";
import { navLink } from "@/route/route";

type Props = {
  onToggleMenu: () => void;
};

const Header = ({ onToggleMenu }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = React.useState(false);

  React.useEffect(() => {
    const detectScroll = () => {
      setIsHeaderSticky(window.scrollY >= 73);
    };

    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  const { site_logo = "" } = settings || {};

  return (
    <>
      <StyledDiv
        id="header"
        className={clsx({ sticky: isHeaderSticky, showBoxShadow: !isMenuOpen })}
      >
        <Container fluid>
          <Row>
            <Col>
              <div className="header-wrapper">
                <Link to="/" className="logo-wrapper">
                  <ImageWithFallBack
                    src={site_logo || logo}
                    alt="sherpa kitchen logo"
                  />
                </Link>
                <nav className="menu-wrapper">
                  <ul>
                    {navLink.map((x, i) => {
                      const { pathname } = window.location;

                      const active = pathname === x.url;
                      return (
                        <li className={clsx("menu-list", { active })} key={i}>
                          <Link to={x.url}>{x.label}</Link>
                        </li>
                      );
                    })}
                  </ul>

                  <HamburgerMenuIcon
                    isMenuOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  />
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </StyledDiv>
      <Drawer
        className="search-drawer"
        title=""
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        width="100%"
        size="fullscreen"
        position="top"
        drawerZindex={9}
        overlayZindex={5}
        drawerType="custom"
      >
        <Menu />
      </Drawer>
    </>
  );
};

export default Header;
