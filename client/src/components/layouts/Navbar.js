import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/salvar-noticia">Salvar Nova Notícia</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarContainer>
    )
}

export default Navbar;

//Container principal da Navbar
const NavbarContainer = styled.div `
    background: var(--dark-green);
    .nav-link{
        color: #fff !important;
        font-weight: bold !important;

        &:hover {
            background: var(--light-green);
        }
    }
`;
