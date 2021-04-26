import React from 'react'
import { Card } from "react-bootstrap";
import Header from './partials/Header'
import RowTotal from './partials/RowTotal' 
import Row from './partials/Row'
import Footer from './partials/Footer'

export default function CardVentas({titulo, crecimiento}) {
    return (
        <div>
            <Card
                className="shadow"
                style={{ minWidth:"25rem", maxWidth: "auto" }}
                onClick={() => console.log('Ventas')}
            >
                <Header 
                    titulo={titulo}
                    crecimiento={crecimiento}
                />
                <Card.Body>
                    <RowTotal value='57'/>
                    <Row 
                        propiedad='Tipo de Ingreso 1'
                        value='RD500'
                    />
                    <Row 
                        propiedad='Tipo de Ingreso 2'
                        value='RD500'
                    />
                </Card.Body>
                <Footer type='RD50'/>
            </Card>
        </div>
    )
}
