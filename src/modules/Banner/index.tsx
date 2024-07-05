import React from "react";
import { StyledDiv } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import ImageWithFallBack from "@/components/ImageWithFallBack";
import playIcon from "@/assets/images/icons/play-button.png";
import Modal from "@/components/Modal";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <StyledDiv>
      <Container className="container-wrapper">
        <Row>
          <Col>
            <div
              className="play-icon-wrapper"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              <ImageWithFallBack src={playIcon} alt="play-icon" />
            </div>
          </Col>
        </Row>
      </Container>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        asdasd
      </Modal>
    </StyledDiv>
  );
};

export default Banner;
