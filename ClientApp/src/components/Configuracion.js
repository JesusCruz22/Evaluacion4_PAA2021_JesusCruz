import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, InputGroupAddon, InputGroupText, Label, Row} from "reactstrap";
import axios from "axios";

const Configuracion = () => {
    const [temperaturaMinima, setTemperaturaMinima] = useState(0)
    const [temperaturaMaxima, setTemperaturaMaxima] = useState(0)
    const [voltajeMinimo, setVoltajeMinimo] = useState(0)
    const [voltajeMaximo, setVoltajeMaximo] = useState(0)
    const [nivelMinimo, setNivelMinimo] = useState(0)
    const [nivelMaximo, setNivelMaximo] = useState(0)
    const [flujoMinimo, setFlujoMinimo] = useState(0)
    const [flujoMaximo, setFlujoMaximo] = useState(0)

    useEffect(() => {
        getLimite().then(() => getLimite())
    }, [])

    const getLimite = async () => {
        let respuesta = await axios.get("https://localhost:44373/api/Limite/GetLimite");
        setTemperaturaMinima(respuesta.data.temperaturaMinima)
        setTemperaturaMaxima(respuesta.data.temperaturaMaxima)
        setVoltajeMinimo(respuesta.data.voltajeMinimo)
        setVoltajeMaximo(respuesta.data.voltajeMaximo)
        setNivelMinimo(respuesta.data.nivelMinimo)
        setNivelMaximo(respuesta.data.nivelMaximo)
        setFlujoMinimo(respuesta.data.flujoMinimo)
        setFlujoMaximo(respuesta.data.flujoMaximo)
    }
    
    const onChangeInput = (event) =>{
        const {name, value} = event.target;
        switch (name) {
            case "temperaturaMinima" :
                setTemperaturaMinima(value)
                break
            case "temperaturaMaxima" :
                setTemperaturaMaxima(value)
                break
            case "voltajeMinimo" :
                setVoltajeMinimo(value)
                break
            case "voltajeMaximo" :
                setVoltajeMaximo(value)
                break
            case "nivelMinimo" :
                setNivelMinimo(value)
                break
            case "nivelMaximo" :
                setNivelMaximo(value)
                break
            case "flujoMinimo" :
                setFlujoMinimo(value)
                break
            case "flujoMaximo" :
                setFlujoMaximo(value)
                break
        }
    }
    
    const save = async() => {
        await axios({
            url: 'https://localhost:44373/api/Limite/SetLimite',
            method: 'post',
            data: {
                temperaturaMinima: temperaturaMinima,
                temperaturaMaxima: temperaturaMaxima,
                voltajeMinimo: voltajeMinimo,
                voltajeMaximo: voltajeMaximo,
                nivelMinimo: nivelMinimo,
                nivelMaximo: nivelMaximo,
                flujoMinimo: flujoMinimo,
                flujoMaximo: flujoMaximo
            }
        }).then((r) => {
            alert('Se han guardado los datos!!! :)')
            console.log(r.statusText)
        }).catch(error => {
            alert('Hubo problemas al guardar los datos :(')
            console.log(error)
        })
    }
    
    return (
        <>
            <h2>Configurar alertas para Celdas:</h2>
            <Form>
                <Row>
                    <Col sm={12} md={6}>
                        <FormGroup>
                            <Label for="temperaturaMinima">Temperatura Minima:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-temperature-low"/></InputGroupText>
                                <Input type="number" name="temperaturaMinima" id="temperaturaMinima"
                                       onChange={onChangeInput} placeholder={temperaturaMinima}/>
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="voltajeMinimo">Voltaje Minimo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-bolt"/></InputGroupText>
                                <Input type="number" name="voltajeMinimo" id="voltajeMinimo"
                                       onChange={onChangeInput} placeholder={voltajeMinimo}/>
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nivelMinimo">Nivel Minimo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-level-down-alt"/></InputGroupText>
                                <Input type="number" name="nivelMinimo" id="nivelMinimo"
                                       onChange={onChangeInput} placeholder={nivelMinimo}/>
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="flujoMinimo">Flujo Minimo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-angle-double-down"/></InputGroupText>
                                <Input type="number" name="flujoMinimo" id="flujoMinimo"
                                       onChange={onChangeInput} placeholder={flujoMinimo}/>
                            </InputGroupAddon>
                        </FormGroup>
                    </Col>
                    <Col sm={12} md={6}>
                        <FormGroup>
                            <Label for="temperaturaMaxima">Temperatura Maxima:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-temperature-high"/></InputGroupText>
                                <Input type="number" name="temperaturaMaxima" id="temperaturaMaxima"
                                       onChange={onChangeInput} placeholder={temperaturaMaxima}/>
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="voltajeMaximo">Voltaje Maximo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-bolt"/></InputGroupText>
                                <Input type="number" name="voltajeMaximo" id="voltajeMaximo"
                                       onChange={onChangeInput} placeholder={voltajeMaximo}/>
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nivelMaximo">Nivel Maximo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-level-up-alt"/></InputGroupText>
                                <Input type="number" name="nivelMaximo" id="nivelMaximo"
                                       onChange={onChangeInput} placeholder={nivelMaximo}/>
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="flujoMaximo">Flujo Maximo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-angle-double-up"/></InputGroupText>
                                <Input type="number" name="flujoMaximo" id="flujoMaximo"
                                       onChange={onChangeInput} placeholder={flujoMaximo}/>
                            </InputGroupAddon>
                        </FormGroup>
                    </Col>
                </Row>

                <Button  className='float-right' color="primary" onClick={save}>
                    <i className="fas fa-save"/> Guardar
                </Button>
            </Form>
        </>
    );
}

export default Configuracion;
