import React, { useState } from "react";
import ResumenFinanzas from "./components/ResumenFinanzas";
import VentasGastos from "./components/partials/VentasGastos/VentasGastos";
import Header from "./components/Header"

import {
  Card,
  CardBody,
  CardHeader,
} from "../../../_metronic/_partials/controls/Card";

export default function Home() {

  const [showResumenFinanzasOrVentasGastos, setShowResumenFinanzasOrVentasGastos] = useState(false);
  const [showSelect2, setShowSelect2] = useState(false);
  const [showVista, setShowVista] = useState(true)

  const handleShow = () => {
    setShowResumenFinanzasOrVentasGastos(!showResumenFinanzasOrVentasGastos);
  };

  const handleShowSelect2= () => {
    setShowSelect2(!showSelect2);
  };

 const handleVistaLista = () => {
  setShowVista(false)
 }

 const handleVistaCarta = () => {
  setShowVista(true)
 }

  return (
    <Card className="p-0 m-0">
      <CardHeader title="Registro Facturas"></CardHeader>
      <CardBody>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column">
                <div className="p-2">
                  <Header 
                    showSelect1={showResumenFinanzasOrVentasGastos}
                    showSelect2={showSelect2}
                    handleVistaLista={handleVistaLista}
                    handleVistaCarta={handleVistaCarta}
                    />
                </div>
                <div className="p-2">
                      {
                          !showResumenFinanzasOrVentasGastos ?
                          (
                              <ResumenFinanzas 
                                handleShow={handleShow} 
                                showVista={showVista}
                              />
                          ) 
                          : 
                          (
                              <VentasGastos 
                                handleShowSelect2={handleShowSelect2}
                                showVista={showVista}
                              />
                          )
                      }
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

