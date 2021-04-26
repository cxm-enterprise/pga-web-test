import React from "react";
import { Card } from "react-bootstrap";

export default function CardCliente({ handleChanged }) {
  return (
        <Card 
            className="shadow"
            onClick={handleChanged}
        >
            <Card.Header className="m-0 px-3 pt-3 pb-1 d-flex justify-content-center align-content-center border-bottom-0">
                <Card.Text className="ml-2 mr-auto mt-2 h4">
                    Nombre del Cliente
                </Card.Text>
                <Card.Footer className="p-0 d-flex mx-2 mt-2 h4 border-top-0">
                    <Card.Text>Total:</Card.Text>
                    <Card.Text>20</Card.Text>
                </Card.Footer>
                <Card.Text className="mx-2 mt-2 h3">RD550</Card.Text>
            </Card.Header>
        </Card>
  );
}
