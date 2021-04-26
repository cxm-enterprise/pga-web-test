import React from "react";
import { Card } from 'react-bootstrap'

export default function Row({ propiedad, value }) {
  return (
    <div className="d-flex justify-content-between align-content-center">
      <Card.Text className="px-2">{propiedad}</Card.Text>
      <Card.Text className="px-2 mr-3">{value}</Card.Text>
    </div>
  );
}
