import React from "react";
import { Card } from "react-bootstrap";
import Header from "./partials/Header";
import RowTotal from "./partials/RowTotal";
import Row from "./partials/Row";
import Footer from "./partials/Footer";

export default function Cardgastos({ titulo, crecimiento }) {
  return (
    <div className="p-2">
      <Card
        className="shadow"
        style={{ minWidth: "25rem", maxWidth: "auto" }}
        onClick={() => console.log("gastos")}
      >
        <Header titulo={titulo} crecimiento={crecimiento} />
        <Card.Body>
          <RowTotal value="21" />
          <Row propiedad="Tipo de Gasto 2" value="RD500" />
          <Row propiedad="Tipo de Gasto 3" value="RD50" />
          <Row propiedad="Tipo de Gasto 4" value="RD50" />
          <Row propiedad="Tipo de Gasto 5" value="RD50" />
          <Row propiedad="Tipo de Gasto 6" value="RD50" />
          <Row propiedad="Tipo de Gasto 7" value="RD50" />
        </Card.Body>
        <Footer type="RD800" />
      </Card>
    </div>
  );
}
