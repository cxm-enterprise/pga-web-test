import React from "react";
import { Card } from "react-bootstrap";

export default function Footer({ type }) {
  return (
    <Card.Footer className="py-0 px-5 d-flex justify-content-end border-top-0">
      <Card.Text className="pb-5 pr-5 h4 text-success">
        <strong> {type} </strong>
      </Card.Text>
    </Card.Footer>
  );
}
