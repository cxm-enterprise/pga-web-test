import React from "react";
import { Card } from "react-bootstrap";

export default function Header({titulo, crecimiento}) {
  return (
    <Card.Header className="pb-0 d-flex justify-content-between align-content-center border-bottom-0">
      <Card.Text className="mx-2 mt-2 h4">
        <strong> {titulo} </strong>
      </Card.Text>
      <Card.Text className="mx-2 mt-2 h4">
        <strong> {crecimiento}</strong>
      </Card.Text>
    </Card.Header>
  );
}
