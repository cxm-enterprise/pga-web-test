import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Layout from './components/Layout'
import ResumenFinanzas from "./components/ResumenFinanzas";
import VentasGastos from "./components/partials/VentasGastos/VentasGastos";
import ListaClientes from "./components/Clientes/Lista";
import DetailCliente from './components/Clientes/Detail'
import { LayoutSplashScreen, ContentRoute } from "../../../_metronic/layout";

export default function FinanzasPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <Layout>
            {
            /* Redirect from eCommerce root URL to /customers */
            <Redirect
                exact={true}
                from="/finanzas"
                to="/finanzas/home"
            />
            }
            <ContentRoute path="/finanzas/home" component={ResumenFinanzas} />
            <ContentRoute path="/finanzas/home/resumen-anno/" component={VentasGastos} />
            <ContentRoute path="/finanzas/home/resumen-anno/clientes" component={ListaClientes} />
            <ContentRoute path="/finanzas/home/resumen-anno/clientes/detail-cliente" component={DetailCliente} />
        </Layout>
      </Switch>
    </Suspense>
  );
}