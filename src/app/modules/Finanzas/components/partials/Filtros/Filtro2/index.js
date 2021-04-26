import React from "react";
import SelectReutilizable from '../../Select/SelectReutilizable'

export default function Filtro2() {

  return (
    <div className="mt-5 mb-5">
      <h6 className="ml-5"> Categoria de Filtro 2 </h6>
      <div className="form-group row d-block p-3 ml-2">
        <form className="d-block" autoComplete="off">
          <SelectReutilizable
            tittle='Select1'
            value1='elemnto 1'
            value2='elemnto 2'
            value3='elemnto 3'
          />
          <SelectReutilizable
            tittle='Select2'
            value1='elemnto 1'
            value2='elemnto 2'
            value3='elemnto 3'
          />
        </form>
      </div>
    </div>
  );
}
