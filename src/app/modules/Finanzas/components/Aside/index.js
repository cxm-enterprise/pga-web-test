import React from 'react'
import Filtro1 from '../partials/Filtros/Filtro1'
import Filtro2 from '../partials/Filtros/Filtro2'
import Filtro3 from '../partials/Filtros/Filtro3'

export default function Page() {
    return (
        <div 
            role="presentation"
        >
            <div className="text-center mt-5 mb-5"> 
               <h5>Filtros</h5> 
             </div>
             <div className="my-5">
                <Filtro1/>
             </div>
            <div className="my-5">
                <Filtro2/>
            </div>
            <div className="my-5">
                <Filtro3/>
            </div>
        </div>
    )
}
