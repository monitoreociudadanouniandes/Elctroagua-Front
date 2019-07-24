import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";
import { colors, bp } from "../../theme";

class Sidebar extends Component {
  render() {
    const { pathname } = this.props.location;
    const {
      color_grey_dark_1,
      color_primary,
      color_primary_light,
      color_grey_light_1
    } = colors;
    const { bp_medium, bp_small } = bp;
    return (
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="container-fluid">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {/* <a className="navbar-brand" href="#">
									Brand
								</a> */}
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className={`dropdown ${pathname === "/" && "active"}`}>
                <Link to="/">
                  INICIO 
                </Link>
              </li>
              <li className={`dropdown ${pathname === "/" }`}>
                <Link to="/equipo-de-trabajo">
                  EQUIPO 
                </Link>
              </li>
              <li
                className={`dropdown ${pathname.startsWith("/comunidades") &&
                  "active"}`}
              >
                <Link to="/comunidades" >
                  COMUNIDADES 
                </Link>
               
              </li>
              <li
                className={`dropdown ${pathname === "/sonda" && "active"}`}
              >
                <Link to="/sonda-de-agua">
                  SONDA DE AGUA
                </Link>
              </li>
              <li className={`dropdown ${pathname === "/subir" && "active"}`}>
                <Link to="/subir">CARGAR DATOS</Link>
              </li>
              <li className={`dropdown ${pathname === "/app" && "active"}`}>
                <Link to="/app">APP</Link>
              </li>
              <li
                className={`dropdown ${pathname === "/multimedia" && "active"}`}
              >
                <Link to="/noticias">NOTICIAS</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li
                className={`dropdown ${pathname === "/contacto" && "active"}`}
              >
                <Link to="/contacto">CONTACTO</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <li className={`side-nav__item ${pathname === '/' && 'side-nav__item--active'}`}>
						<Link to="/" className="side-nav__link">
							<span>Introducción</span>
						</Link>
					</li>
					<li
						className={`side-nav__item subir_datos ${pathname === '/subir' &&
							'side-nav__item--active'}`}>
						<Link to="/subir" className="side-nav__link">
							<span>Subir Datos</span>
						</Link>
					</li>
					{/* <li className={`side-nav__item ${pathname === '/informacion' && 'side-nav__item--active'}`}>
						<Link to="/informacion" className="side-nav__link">
							<span>Informacion</span>
						</Link>
					</li> *
					<li className={`side-nav__item ${pathname === '/el-proyecto' && 'side-nav__item--active'}`}>
						<Link to="/el-proyecto" className="side-nav__link">
							<span>El Proyecto</span>
						</Link>
					</li>
					<li className={`side-nav__item ${pathname === '/equipo' && 'side-nav__item--active'}`}>
						<Link to="/equipo" className="side-nav__link">
							<span>Equipo de Medición</span>
						</Link>
					</li>
					<li className={`side-nav__item ${pathname === '/app' && 'side-nav__item--active'}`}>
						<Link to="/app" className="side-nav__link">
							<span>App</span>
						</Link>
					</li>
					<li className={`side-nav__item ${pathname === '/contacto' && 'side-nav__item--active'}`}>
						<Link to="/contacto" className="side-nav__link">
							<span>Contacto</span>
						</Link>
					</li>
				</ul> */}
        <style jsx global>{`
          /* Bootstrap nav */
          .navbar-default .navbar-nav > li.dropdown:hover > a,
          .navbar-default .navbar-nav > li.dropdown:hover > a:hover,
          .navbar-default .navbar-nav > li.dropdown:hover > a:focus {
            background-color: rgb(231, 231, 231);
            color: rgb(85, 85, 85);
          }
          li.dropdown:hover > .dropdown-menu {
            display: block;
          }

          .dropdown-submenu {
            position: relative;
          }

          .dropdown-submenu > .dropdown-menu {
            top: 0;
            left: 100%;
            margin-top: -6px;
            margin-left: -1px;
            -webkit-border-radius: 0 6px 6px 6px;
            -moz-border-radius: 0 6px 6px;
            border-radius: 0 6px 6px 6px;
          }

          .dropdown-submenu:hover > .dropdown-menu {
            display: block;
          }

          .dropdown-submenu > a:after {
            display: block;
            content: " ";
            float: right;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
            border-width: 5px 0 5px 5px;
            border-left-color: #ccc;
            margin-top: 5px;
            margin-right: -10px;
          }

          .dropdown-submenu:hover > a:after {
            border-left-color: #fff;
          }

          .dropdown-submenu.pull-left {
            float: none;
          }

          .dropdown-submenu.pull-left > .dropdown-menu {
            left: -100%;
            margin-left: 10px;
            -webkit-border-radius: 6px 0 6px 6px;
            -moz-border-radius: 6px 0 6px 6px;
            border-radius: 6px 0 6px 6px;
          }
        `}</style>
      </nav>
    );
  }
}

export default withRouter(Sidebar);
