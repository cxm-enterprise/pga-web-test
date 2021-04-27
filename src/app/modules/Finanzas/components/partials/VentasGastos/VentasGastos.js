import React, { useState } from "react";
import CardVentas from "./CardVentas";
import CardGastos from "./CardGastos";
import ListaClientes from "../../Clientes/Lista";

export default function VentasGastos({
  handleShowSelect2,
  showVista,
}) {
    
  const [
    showVentasGastosOrClientesVentas,
    setShowVentasGastosOrClientesVentas,
  ] = useState(false);

  const handleChanged = () => {
    setShowVentasGastosOrClientesVentas(!showVentasGastosOrClientesVentas);
    handleShowSelect2();
  };

  let className = "";
  showVista
    ? (className = "d-flex flex-row flex-wrap justify-content-center mt-5")
    : (className = "d-block mt-5");
  return !showVentasGastosOrClientesVentas ? (
    <div className={className}>
      <div className="p-2 m-2" onClick={handleChanged}>
        <CardVentas titulo="Ventas" crecimiento="Crecimiento +23%" />
      </div>
      <div className="p-2 m-2" onClick={handleChanged}>
        <CardGastos
          titulo="Gastos"
          crecimiento="Crecimiento +17%"
          onClick={handleChanged}
        />
      </div>
    </div>
  ) : (
    <div className="d-flex flex-column mt-5">
      <ListaClientes />
    </div>
  );
}
