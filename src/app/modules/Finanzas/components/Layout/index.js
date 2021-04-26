import React from 'react'
import Aside from '../Aside'
import {
  Card,
  CardBody,
  CardHeader,
} from "../../../../../_metronic/_partials/controls/Card";

export default function Layout({children}) {
    return (
        <Card className="p-0 m-0">
            <CardHeader title="Registro Facturas">
            </CardHeader>
            <CardBody>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-3 shadow">
                            <Aside/>
                        </div>
                        <div className="col col-md-9">
                                <div className="row justify-content-around">
                                    {children}
                                </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}