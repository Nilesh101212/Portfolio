import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import gramurja from "../assets/projects/gramurja.png";
import css_website from "../assets/projects/css_website.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gramurja}
              isBlog={false}
              title="NGO Website for Gram Urja Foundation"
              description="Developed a comprehensive platform for efficient student information management. Key features include:
Student Records: Enabled mentors to upload and access detailed student data.
Progress Reports:  Design downloaded PDFs summarizing student growth.
Attendance Tracking: Integrated a daily attendance system for accurate record-keeping.
Tech Stack: ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS."
              ghLink="https://github.com/HanushaJain66/GramUrja"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={css_website}
              isBlog={false}
              title="Computer Science Society Website"
              description="Developed an interactive, responsive website focused on enhancing user experience. Key contributions:

Redesigned UI elements, improving navigation and boosting session duration by 20%.
Implemented secure authentication for user management.
Optimized performance for faster loading and smoother browsing.
Tech Stack: NodeJS, ExpressJS, MongoDB, Git."
              ghLink="https://github.com/ComputerScienceSoceityNITS/CSSWebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Jeff – Mental Health Chatbot"
              description="Designed a chatbot tailored for students' mental well-being using Cognitive Behavioral Therapy (CBT) principles. Key features include:

Sentiment Analysis: Personalized user interactions.
Mood Tracking: Effective monitoring of emotional development.
Supported 750+ users with simultaneous chat functionality for 300+ users using Gemini API.
Tech Stack: ReactJS, NodeJS, Gemini API."
              ghLink="https://github.com/Nilesh101212/Jeff_Backend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects