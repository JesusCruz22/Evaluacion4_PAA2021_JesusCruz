import React, {useEffect, useState} from 'react';
import axios from "axios";

const Celdas = () => {
    const [celdas, setCeldas] = useState([])

    useEffect(() => {
        const getDatosCeldas = async () => {
            let respuesta = await axios.get("https://localhost:44373/api/Celdas/GetDatosCeldas");
            setCeldas(respuesta.data)
        }

        getDatosCeldas().then(() => getDatosCeldas())
    }, [])
    
    return (
        <>
            <h2>Celdas existentes:</h2>
            <ul>
                {celdas.map((celda, index) => {
                    return <li key={index}><i className="fas fa-database"/> Id Celda {celda.id},
                        Banco #{celda.bancoId}</li>
                })}
            </ul>
        </>
    );
}

export default Celdas;



