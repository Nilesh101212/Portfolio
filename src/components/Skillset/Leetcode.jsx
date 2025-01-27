import React from "react";
import ReactMarkdown from 'react-markdown';
import { Row } from "react-bootstrap";
import './Leetcode.css';

const Leetcode = () => {
  return (
    <Row className="leetcode-row">
      <h1 className="project-heading">
        <strong className="yellow">LeetCode</strong> Stats
      </h1>
      <img
        src="https://leetcard.jacoblin.cool/Nilesh1012?theme=dark&font=Yeon%20Sung&ext=heatmap"
        alt="LeetCode Stats"
        className="leetcode-image"
      />
    </Row>
  );
}

export default Leetcode;
