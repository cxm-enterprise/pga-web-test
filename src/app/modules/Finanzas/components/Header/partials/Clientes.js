import React from "react";
import SelectReutilizable from '../../partials/Select/SelectReutilizable'

export default function Clientes() {

  return (
      <div className="ml-2">
          <SelectReutilizable
            tittle='Nombre Cliente'
            value1='Nombre Cliente 1'
            value2='Nombre Cliente 2'
            value3='Nombre Cliente 3'
          />
      </div>
  );
}