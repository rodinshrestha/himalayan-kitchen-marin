import React from "react";
import { StyledDiv } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import Modal from "@/components/Modal";
import YoutubePlayer from "@/components/YoutubePlayer";
import settings from "content/settings/settings.json";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { video_id = "r1Y2-0UZmPM" } = settings || {};

  return (
    <StyledDiv
      onClick={() => {
        setIsModalOpen(true);
      }}
    >
      <Container className="container-wrapper">
        <Row>
          <Col>
            <div className="play-icon-wrapper">
              {/* <ImageWithFallBack src={playIcon} alt="play-icon" /> */}
            </div>
          </Col>
        </Row>
      </Container>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <YoutubePlayer videoId={video_id} />
      </Modal>
    </StyledDiv>
  );
};

export default Banner;
