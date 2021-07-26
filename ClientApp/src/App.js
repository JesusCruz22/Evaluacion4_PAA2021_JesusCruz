import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Layout } from './components/Layout';
import Inicio from './components/Inicio';
import Celdas from './components/Celdas';
import Configuracion from './components/Configuracion';

import './css/custom.css'
import './css/fontawesome/css/all.min.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Inicio} />
        <Route path='/celdas' component={Celdas} />
        <Route path='/configuracion' component={Configuracion} />
      </Layout>
    );
  }
}
