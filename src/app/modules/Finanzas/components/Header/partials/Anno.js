import React from "react";
import SelectReutilizable from '../../partials/Select/SelectReutilizable'

export default function Anno() {

  return (
      <div className="ml-2">
          <SelectReutilizable
            tittle='Año'
            value1='2021'
            value2='2020'
            value3='2019'
          />
      </div>
  );
}