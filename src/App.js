
import './App.css';
import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Tradition from  './components/Tradition';
import Transport from  './components/Transport';
import Hotel from  './components/Hotel';
import Food from  './components/Food';
import Sos from './components/sos'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Laguna from  './sitios/Laguna';
import SantaTeresita from './sitios/SantaTeresita';
import Ceiba from './sitios/Ceiba';
import Castillo from './sitios/Castillo';
import Paseo from './sitios/Paseo';
import Irtra from './sitios/Irtra';
import Naciones from './sitios/Naciones';
import Volcan from './sitios/Volcan';
import Lago from './sitios/Lago';
import VillaRosario from './sitios/VillaRosario'
import KawilalHotel from './sitios/KawilalHotel';
import AmatitlanVillas from './sitios/AmatitlanVillas';
import NacionesMaps from './sitios/mapas/NacionesMaps';
import CastilloMap from './sitios/mapas/CastilloMap';
import CeibaMap from './sitios/mapas/CeibaMap';
import IrtraMap from './sitios/mapas/IrtraMap';
import KwilalHotelMap from './sitios/mapas/KwilalMap'
import LagoMap from './sitios/mapas/LagoMap';
import LagunaMap from './sitios/mapas/LagunaMap';
import PaseoMap from './sitios/mapas/PaseoMap';
import SantaTeresitaMap from './sitios/mapas/SantaTeresitaMap';
import VillaRosarioMap from './sitios/mapas/VillaRosarioMap'
import AmatitlanVillasMap from './sitios/mapas/AmatitlanVillasMap'
import HospitalMap from './sitios/mapas/HospitalMap'
import BomberosMap from './sitios/mapas/BomberosMap'
import VolcanMap from  './sitios/mapas/VolcanMap';
import Taxi from './sitios/mapas/Parque';
import Transatia from  './sitios/Transatia';
import Transuama from  './sitios/Transuama';

function App() {
  return (
    <div className="app">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/location">
            <SearchPage />
          </Route>
          <Route exact path="/location/laguna">
            <Laguna />
          </Route>
          <Route exact path="/location/castillo">
            <Castillo />
          </Route>
          <Route exact path="/location/paseo">
            <Paseo />
          </Route>
          <Route exact path="/location/volcan">
            <Volcan />
          </Route>
          <Route exact path="/location/irtra">
            <Irtra />
          </Route>
          <Route exact path="/location/naciones">
            <Naciones />
          </Route>
          <Route exact path="/location/teresita">
            <SantaTeresita />
          </Route>
          <Route exact path="/location/ceiba">
            <Ceiba />
          </Route>
          <Route exact path="/location/lago">
            <Lago />
          </Route>
          <Route exact path="/hotel/villa-rosario">
            <VillaRosario />
          </Route>
          <Route exact path="/hotel/kawilal-hotel">
            <KawilalHotel />
          </Route>
          <Route exact path="/hotel/amatitlan-villas">
            <AmatitlanVillas />
          </Route>
          <Route exact path="/tradition">
            <Tradition />
          </Route>
          <Route exact path="/food">
            <Food />
          </Route>
          <Route exact path="/transport">
            <Transport />
          </Route>
          <Route exact path="/hotel">
            <Hotel />
          </Route>
          <Route exact path="/sos">
            <Sos />
          </Route>
          <Route exact path="/location/naciones/naciones-map">
            <NacionesMaps />
          </Route>
          <Route exact path="/location/castillo/castillo-map">
            <CastilloMap />
          </Route>
          <Route exact path="/location/ceiba/ceiba-map">
            <CeibaMap />
          </Route>
          <Route exact path="/location/irtra/irtra-map">
            <IrtraMap />
          </Route>
          <Route exact path="/hotel/kawilal-hotel/kawilal-map">
            <KwilalHotelMap />
          </Route>
          <Route exact path="/location/lago/lago-map">
            <LagoMap />
          </Route>
          <Route exact path="/location/laguna/laguna-map">
            <LagunaMap />
          </Route>
          <Route exact path="/location/teresita/teresita-map">
            <SantaTeresitaMap />
          </Route>
          <Route exact path="/location/paseo/paseo-map">
            <PaseoMap />
          </Route>
          <Route exact path="/hotel/villa-rosario/villa-rosario-map">
            <VillaRosarioMap />
          </Route>
          <Route exact path="/hotel/amatitlan-villas/amatitlan-villas-map">
            <AmatitlanVillasMap />
          </Route>
          <Route exact path="/sos/hospital/hospital-map">
            <HospitalMap />
          </Route>
          <Route exact path="/location/volcan/volcan-map">
            <VolcanMap />
          </Route>
          <Route exact path="/sos/bomberos/bomberos-map">
            <BomberosMap />
          </Route>
          <Route exact path="/transport/taxi-map">
            <Taxi />
          </Route>
          <Route exact path="/transport/ama">
            <Transuama />
          </Route>
          <Route exact path="/transport/atia">
            <Transatia />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
