import { Col } from "@/components/Col";
import { Container } from "@/components/Container";
import InputField from "@/components/InputField";
import { Row } from "@/components/Row";
import React from "react";
import { StyledSection } from "./style";
import InputTextArea from "@/components/InputTextArea";
import Icons from "@/components/Icons";
import Button from "@/components/Button";
import { useFormik } from "formik";
import { ContactFormTypes } from "./contact-form.types";
import { contactSchema } from "./contact.schema";
import emailIcon from "@/assets/images/icons/email.png";
import phoneIcon from "@/assets/images/icons/phone-call.png";
import homeIcon from "@/assets/images/icons/home.png";
import Typography from "@/components/Typography";
import Overlay from "@/components/Overlay";
import settings from "content/settings/settings.json";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const {
    email = "sherpadaiinsonoma@yahoo.com",
    phone_number = "(707) 963-4439",
  } = settings || {};

  return (
    <StyledSection>
      <div className="section-bg-wrapper">
        <Overlay />
        <Container fluid>
          <Row>
            <Col>
              <div className="menu-title-content">
                <Typography as="h1" className="section-title">
                  Contact Us
                </Typography>
                <Typography as="subtitle1">
                  Please use the form below to connect with us. Remember us for
                  -
                </Typography>

                <ul className="rember-us-wrapper">
                  <li>Private Parties and Events.</li>
                  <li>Catering and Delivery.</li>
                  <li>Gift Certificates.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid>
        <Row>
          <Col>
            <div className="contact-wrapper">
              <ContactForm />

              <div className="contact-info-warpper">
                <div className="contact-title">
                  <Typography as="h5">We are located at:</Typography>
                </div>

                <div className="contact-method">
                  <Icons icon={emailIcon} />
                  <div className="content-info">
                    <Typography as="subtitle1">
                      <a href={`mail:${email}`}>{email}</a>
                    </Typography>
                  </div>
                </div>
                <div className="contact-method">
                  <Icons icon={phoneIcon} />
                  <div className="content-info">
                    <Typography as="subtitle1">
                      <a href={`tel:${phone_number}`}>{phone_number}</a>
                    </Typography>
                  </div>
                </div>
                <div className="contact-method">
                  <Icons icon={homeIcon} />
                  <div className="content-info">
                    <Typography as="subtitle1">
                      1148 Main Street St. Helena, CA 94574
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Contact;
