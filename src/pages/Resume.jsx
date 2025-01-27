import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from '../components/Particle'
import pdf from "../assets/nilesh_resume_2 (4).pdf"

const resumeLink = `https://res.cloudinary.com/dtqcbjncm/image/upload/v1737968134/lc6pae2cvjybpa0zrrcu.jpg`

const Resume = () => {
  const [width, setWidth] = useState(1200); 

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <img src={resumeLink} alt="Resume" style={{ width: "100%", maxWidth: "800px", height: "auto" }} />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button> */}
        </Row>
      </Container>
    </div>
  )
}
export default Resume