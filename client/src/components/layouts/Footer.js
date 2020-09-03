import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <span style={{color: "#fff", 
                          top: "1.5rem", 
                          left:"1rem",
                          positiion: "relative"}}>
                
                &copy;{new Date().getFullYear()} - Desenvolvido por Paulo Santos -
                <a href="">Linkedin</a> -  
                <a href="paulo.eduardo.91@outlook.com">E-mail</a>
            </span>
        </FooterContainer>
    )
}

export default Footer

//Container do Rodape (Footer)
const FooterContainer = styled.footer `
    background: #344;
    height: 2rem;
    left: 0;
    bottom: 0;
    width: 100%;
    
    a{
        color: #fff;
        right: 100%;
    }
`;