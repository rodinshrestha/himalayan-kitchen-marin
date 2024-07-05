import React from "react";
import { StyledSection } from "./style";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import Button from "../Button";
import settings from "content/settings/settings.json";
import Typography from "../Typography";

const OurStory = () => {
  const { story_content = "" } = settings || {};
  return (
    <StyledSection>
      <Container fluid>
        <Row>
          <Col>
            <div className="our-story-wrapper">
              <div className="our-story-title">
                <Typography as="h2" className="section-title">
                  Our Story
                </Typography>
                <Typography as="h6" className="section-title-helper">
                  From the Himalayas to the heart of wine country - Napa, CA
                </Typography>
              </div>

              {story_content && <Typography as="p">{story_content}</Typography>}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default OurStory;
