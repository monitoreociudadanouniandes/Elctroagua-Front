import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Home from "./Screens/home/Home";
import Subir from "./Screens/subir/Subir";
import About from "./Screens/about/About";
import Equipo from "./Screens/equipo/Equipo";
import EquipoTrabajo from "./Screens/equipo_trabajo/EquipoTrabajo";
import Proyecto from "./Screens/proyecto/Proyecto";
import App from "./Screens/app/App";
import Multimedia from "./Screens/multimedia/Multimedia";
import Contacto from "./Screens/contacto/Contacto";

import Comunidades from "./Screens/comunidades/Comunidades";
import Teusaca from "./Screens/comunidades/teusaca/Teusaca";
import Santurban from "./Screens/comunidades/santurban/Santurban";
import Amazonas from "./Screens/comunidades/amazonas/Amazonas";
import Baru from "./Screens/comunidades/baru/Baru";
import Boyaca from "./Screens/comunidades/boyaca/Boyaca";
import uniandes from "./Screens/comunidades/uniandes/Uniandes";
import eje from "./Screens/comunidades/eje-ambiental/EjeAmbiental";


import ActividadesAmazonas from "./Screens/comunidades/amazonas/sub_categories/actividades";
import ActividadesSanturban from "./Screens/comunidades/santurban/sub_categories/actividades";
import ActividadesTeusaca from "./Screens/comunidades/teusaca/sub_categories/actividades";

import ColaboradoresAmazonas from "./Screens/comunidades/amazonas/sub_categories/colaboradores";
import ColaboradoresSanturban from "./Screens/comunidades/santurban/sub_categories/colaboradores";

import PatrocinadoresAmazonas from "./Screens/comunidades/amazonas/sub_categories/patrocinadores";
import PatrocinadoresSanturban from "./Screens/comunidades/santurban/sub_categories/patrocinadores";
import PatrocinadoresTeusaca from "./Screens/comunidades/teusaca/sub_categories/patrocinadores";

import MapaAmazonas from "./Screens/comunidades/amazonas/sub_categories/mapa";
import MapaSanturban from "./Screens/comunidades/santurban/sub_categories/mapa";
import MapaTeusaca from "./Screens/comunidades/teusaca/sub_categories/mapa";

import SensoaguaV1 from "./Screens/sensoagua/SensoaguaV1";
import SensoaguaV2 from "./Screens/sensoagua/SensoaguaV2";
import SensoaguaV3 from "./Screens/sensoagua/SensoaguaV3";

import Perimetro from "./Screens/perimetro/Perimetro";
import Privacidad from "./Screens/app/Privacidad";

ReactGA.initialize("UA-000000000-0");

const Router = ({ children }) => (
  <BrowserRouter>
    <GAListener>
      {children}
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/subir" component={Subir} />
          <Route path="/el-proyecto" component={Proyecto} />
          <Route path="/equipo-de-trabajo" component={EquipoTrabajo} />
          <Route path="/sonda-de-agua" component={Equipo} />
          <Route path="/comunidades" component={Comunidades} />
          <Route exact path="/comunidades-teusaca" component={Teusaca} />
          <Route exact path="/comunidades-baru" component={Baru} />
          <Route exact path="/comunidades-uniandes" component={uniandes} />
          <Route exact path="/comunidades-eje-ambiental" component={eje} />
          <Route exact path="/comunidades-boyaca" component={Boyaca} />
          <Route exact path="/privacidad" component={Privacidad} />

          <Route
            exact
            path="/comunidades-teusaca-actividades"
            component={ActividadesTeusaca}
          />
          <Route
            exact
            path="/comunidades-teusaca-mapa"
            component={MapaTeusaca}
          />
          <Route
            exact
            path="/comunidades-teusaca-patrocinadores"
            component={PatrocinadoresTeusaca}
          />
          <Route exact path="/comunidades-santurban" component={Santurban} />
          <Route
            exact
            path="/comunidades-santurban-actividades"
            component={ActividadesSanturban}
          />
          <Route
            exact
            path="/comunidades-santurban-mapa"
            component={MapaSanturban}
          />
          <Route
            exact
            path="/comunidades-santurban-colaboradores"
            component={ColaboradoresSanturban}
          />
          <Route
            exact
            path="/comunidades-santurban-patrocinadores"
            component={PatrocinadoresSanturban}
          />
          <Route exact path="/comunidades-amazonas" component={Amazonas} />
          <Route
            exact
            path="/comunidades-amazonas-actividades"
            component={ActividadesAmazonas}
          />
          <Route
            exact
            path="/comunidades-amazonas-mapa"
            component={MapaAmazonas}
          />
          <Route
            exact
            path="/comunidades-amazonas-colaboradores"
            component={ColaboradoresAmazonas}
          />
          <Route
            exact
            path="/comunidades-amazonas-patrocinadores"
            component={PatrocinadoresAmazonas}
          />

          <Route path="/sensoagua-v1" component={SensoaguaV1} />
          <Route path="/sensoagua-v2" component={SensoaguaV2} />
          <Route path="/sensoagua-v3" component={SensoaguaV3} />
          <Route path="/app" component={App} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/noticias" component={Multimedia} />
          <Route path="/perimetro" component={Perimetro} />
        </Switch>
      </main>
      <style jsx>{`
        .main {
          background: #fff;
          flex: 1;
        }
      `}</style>
    </GAListener>
  </BrowserRouter>
);

export default Router;

// Helper Google Analytics class:
class GAListener extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }

  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }
  render() {
    return this.props.children;
  }
}
