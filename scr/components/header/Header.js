import React, { Component } from 'react';
import { colors, bp } from '../../theme';

import logo_uniandes from './logo_uniandes.png';

class Header extends Component {
    render() {
        const { color_grey_light_2 } = colors;
        const { bp_small, bp_smallest, bp_medium } = bp;
        return (
            <header className="header">
               
                    <img
                        src={logo_uniandes}
                        alt="Universidad de los Andes"
                        className="logo_uniandes"
                    />
              
                
                    <h1>Monitoreo de Agua en Colombia</h1>
               

             
                <style jsx>{`
                    .logo1,
                    h1,
                    .logo2 {
                        flex: 1;
                        text-align: center;
                        color: black;
                    }

                    .logo1 {
                        margin-left: 10px;
                        text-align: left;
                        margin-right: auto;
                    }
                    .header {
                        font-size: 1.4rem;
                        height: 15vh;
                        background-color: #fff;
                        border-bottom: 1px solid ${color_grey_light_2};
                        display: flex;
                        justify-content: space-around;
                        

                        align-items: center;
                        @media ${bp_medium} {
                            flex-direction:column;
                            h1 {
                                font-size: 2.5rem;
                                width: 100vw;
                            }
                        }

                        @media ${bp_smallest} {
                            flex-wrap: wrap;
                            align-content: space-around;
                            height: 11rem;
                        }
                    }

                    .logo_uniandes {
                        
                        height:100%;
                        @media ${bp_medium} {
                            height:auto;
                            max-width:20vw;
                        }
                    }
                `}</style>
            </header>
        );
    }
}

export default Header;
