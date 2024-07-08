import React from "react";
import { StyledSection } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import settings from "content/everest_base_camp_trek/base_camp.json";
import Typography from "@/components/Typography";
import Overlay from "@/components/Overlay";
import ContactForm from "@/components/ContactForm";

const EverestTrek = () => {
  const { description = "" } = settings || {};
  return (
    <StyledSection>
      <div className="video-wrapper">
        <video autoPlay muted width="100%" height="100%" loop>
          <source src="https://ucarecdn.com/cb1f13f8-5658-4649-80a9-5c40a7589eb1/" />
        </video>

        <Overlay />

        <div className="experience-title-wrapper">
          <Typography as="h1" className="section-title">
            Join on this epic adventure to everest base camp trek with the
            owners.
          </Typography>
        </div>
      </div>

      <Container>
        <Row>
          <Col>
            <div className="everest-trek-achievement-wrapper">
              <div className="achievement-contact-form-wrapper">
                <div className="everest-camp-form-description">
                  <Typography as="h2">Have Questions?</Typography>
                  <Typography as="p">
                    Please inquire using the form below for a complete itinerary
                    and cost of trip.
                  </Typography>
                </div>
                <ContactForm />
              </div>

              <div className="everest-camp-content-wrapper">
                <div className="everest-base-camp-title">
                  <Typography as="h2">Everest Base Camp trek</Typography>
                </div>
                {description && (
                  <div className="achievement-trek-content">
                    <Typography as="p">
                      <i>{description}</i>
                    </Typography>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default EverestTrek;
