import React from "react";
import { StyledSection } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import ImageWithFallBack from "@/components/ImageWithFallBack";
import settings from "content/everest_base_camp_trek/base_camp.json";

const EverestTrek = () => {
  const { description = "", image = "" } = settings || {};
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <div className="everest-trek-title section-title">
              <h1>Everest Base Camp Trek</h1>
            </div>

            <div className="everest-trek-achievement-wrapper">
              <div className="achievement-image-wrapper">
                <ImageWithFallBack src={image} alt="Everest Trek Info" />
              </div>

              {description && (
                <div className="achievement-trek-content">
                  <i>{description}</i>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default EverestTrek;
