import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I contributed to <strong className="green">open source projects.</strong>
      </h1>
      <GitHubCalendar
        username="derlomo"
        blockSize={15}
        blockMargin={5}
        color="#00ff00"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
