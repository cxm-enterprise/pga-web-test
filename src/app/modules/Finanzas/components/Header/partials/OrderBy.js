import React from "react";
import SelectReutilizable from '../../partials/Select/SelectReutilizable'

export default function OrderBy() {

  return (
      <div className="ml-2">
          <SelectReutilizable
            tittle='OrderBy'
            value1='Precio'
            value2='Nombre Cliente'
            value3='Fecha'
          />
      </div>
  );
}