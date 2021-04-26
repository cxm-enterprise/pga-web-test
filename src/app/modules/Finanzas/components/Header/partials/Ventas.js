import React from "react";
import SelectReutilizable from '../../partials/Select/SelectReutilizable'

export default function Ventas() {

  return (
      <div className="ml-2">
          <SelectReutilizable
            tittle='Ventas'
            value1='Venta 1'
            value2='Venta 2'
            value3='Venta 3'
          />
      </div>
  );
}