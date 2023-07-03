import React from "react"
import alimentacion from "./assets/images/alimentacion.svg"
import salud from "./assets/images/salud.svg"
import otros from "./assets/images/otros.svg"
import transporte from "./assets/images/transporte.svg"
import utilidades from "./assets/images/utilidades.svg"
import { Icono,IconoTema } from "./Components/UI"

export default (type)=>{
    const Images={
        Restaurante:<IconoTema src={alimentacion} atl="Restaurante"/>,
        Salud:<IconoTema src={salud} atl="Salud"/>,
        Transporte:<IconoTema src={transporte} atl="Transporte"/>,
        Utilidades:<IconoTema src={utilidades} atl="Utilidades"/>,
        default : <IconoTema src={otros} atl="Otros"/>
    }
    return Images[type] || Images ["default"]
}