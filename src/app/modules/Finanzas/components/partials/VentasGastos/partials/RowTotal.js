import React from "react";
import { Card } from "react-bootstrap";

export default function RowTotal({value}) {
  return (
    <div className="d-flex justify-content-between align-content-center">
      <Card.Text className="px-2 mb-5 h6">Total</Card.Text>
      <Card.Text className="px-2 mb5-5 mr-3 h6">{value}</Card.Text>
    </div>
  );
}
