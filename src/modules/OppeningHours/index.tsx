import React from "react";
import { StyledDiv } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import settings from "content/settings/settings.json";
import ImageWithFallBack from "@/components/ImageWithFallBack";
import locationIcon from "@/assets/images/icons/location-pin.png";
import phoneIcon from "@/assets/images/icons/phone-call.png";

const OppeningHours = () => {
  const {
    lunch_time = "11:30 AM - 03:00 PM DAILY",
    dinner_time = "05:00 PM - 09:00 PM DAILY",
    open_information = "OPEN EVERYDAY",
    address = "",
    phone_number = "",
  } = settings || {};
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="oppening-hours-wrapper">
              <Typography as="h4">Hours:</Typography>

              <div className="oppening-hour-info">
                <Typography as="subtitle1">lunch: {lunch_time}</Typography>
                <Typography as="subtitle1">dinner: {dinner_time}</Typography>
                <Typography as="subtitle1">{open_information}</Typography>
              </div>

              <div className="order-wrapper">
                <Button
                  skin="contained"
                  href="https://www.toasttab.com/yak-and-yeti/v3"
                >
                  ORDER ONLINE
                </Button>
                {address && (
                  <div className="location-wrapper">
                    <ImageWithFallBack src={locationIcon} alt="Location icon" />
                    <a
                      href="https://www.google.com/maps/search/3150%20B%20Jefferson%20Street%20Napa,%20CA%2094558"
                      target="_blank"
                    >
                      {address}
                    </a>
                  </div>
                )}

                {phone_number && (
                  <div className="location-wrapper">
                    <ImageWithFallBack src={phoneIcon} alt="Location icon" />
                    <a href={`tel:${phone_number}`}>{phone_number}</a>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OppeningHours;
