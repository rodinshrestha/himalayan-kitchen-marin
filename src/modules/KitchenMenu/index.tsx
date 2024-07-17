import React from "react";
import { StyledDiv } from "./style";
import FromTheKitchen from "./components/FromTheKitchen";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import settings from "content/settings/settings.json";

import Typography from "@/components/Typography";
import SectionBgImage from "@/components/SectionBgImage";

const KitchenMenu = () => {
  const { menu_service_charge_description = "" } = settings || {};
  return (
    <StyledDiv>
      <SectionBgImage
        title="Taste from the Himalayas"
        bgImage="https://ucarecdn.com/3050f742-fbcb-4856-a5f0-20fb3134de0c/-/crop/2135x3292/590,316/-/preview/-/progressive/yes/-/format/auto/-/resize/2000x/"
      />
      <Container fluid>
        <Row>
          <Col>
            <div className="menu-title-wrapper">
              <Typography as="h2">SIMPLY FRESH & MADE WITH LOVE.</Typography>
            </div>

            <div className="kitchen-menu-wrapper">
              <FromTheKitchen />
            </div>
          </Col>
        </Row>

        {menu_service_charge_description && (
          <Row>
            <Col>
              <div className="service-charge-info-wrapper">
                <Typography as="subtitle2">
                  {menu_service_charge_description}
                </Typography>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </StyledDiv>
  );
};

export default KitchenMenu;
