import React from "react";
import { Card } from "react-bootstrap";

export default function SimpleCard({ ano, handleShow }) {
  return (
    <div className="p-2">
      <Card
        className="shadow rounded"
        style={{ minWidth:"25rem", maxWidth: "auto" }}
        onClick={handleShow}
      >
        <Card.Header className="pb-0 d-flex justify-content-between align-content-center border-bottom-0">
          <Card.Text className="mx-2 mt-2 h4">
            <strong> {ano} </strong>
          </Card.Text>
          <Card.Text className="mx-2 mt-2 h4">
            <strong> Crecimiento +23%</strong>
          </Card.Text>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-between align-content-center">
            <Card.Text className="px-2">Total</Card.Text>
            <Card.Text className="px-2 mr-3">57</Card.Text>
          </div>
          <div className="d-flex justify-content-between align-content-center">
            <Card.Text className="px-2 my-2">Ventas</Card.Text>
            <Card.Text className="px-2 my-2 mr-3">50</Card.Text>
          </div>
          <div className="d-flex justify-content-between align-content-center">
            <Card.Text className="px-2">Gastos</Card.Text>
            <Card.Text className="px-2 mr-3">57</Card.Text>
          </div>
          <div className="d-flex justify-content-between align-content-center">
            <Card.Text className="px-2 my-2">Ingresos</Card.Text>
            <Card.Text className="px-2 my-2 text-success">RD550</Card.Text>
          </div>
          <div className="d-flex justify-content-between align-content-center">
            <Card.Text className="px-2">Gastos</Card.Text>
            <Card.Text className="px-2 text-danger">RD550</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className="py-0 px-5 d-flex justify-content-end border-top-0">
          <Card.Text className="pb-5 mr-3 h4">
            <strong> Balance</strong>
          </Card.Text>
          <Card.Text className="pb-5 pr-5 h4 text-success">
            <strong> RD550 </strong>
          </Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
}
