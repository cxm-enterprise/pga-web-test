import React, { Fragment, useState } from "react";
import Cliente from "../../partials/CardCliente";
import DetailCliente from "../Detail";

export default function ListaClientes() {
  const [
    showListaClientesOrDetailCliente, setShowListaClientesOrDetailCliente
  ] = useState(false);

  const handleChangedShowListaCliente = () => {
    setShowListaClientesOrDetailCliente(!showListaClientesOrDetailCliente);
  };


  return !showListaClientesOrDetailCliente ? (
    <Fragment>
      <div className="m-2">
        <Cliente handleChanged={handleChangedShowListaCliente} />
      </div>
      <div className="m-2">
        <Cliente handleChanged={handleChangedShowListaCliente} />
      </div>
      <div className="m-2">
        <Cliente handleChanged={handleChangedShowListaCliente} />
      </div>
    </Fragment>
  ) : (
    <div className="d-flex flex-row justify-content-center">
      <DetailCliente/>
    </div>
  );
}
