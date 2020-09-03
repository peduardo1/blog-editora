import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NoticiaPost = (props) => {
    const [titulo, setTitulo] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [autor, setAutor] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:4001/paulosantos/api/noticias/${props.match.params.id}`)
            .then(res => (
                setTitulo(res.data.titulo),
                setAutor(res.data.autor),
                setConteudo(res.data.conteudo)
            ))
            .catch(err => console.log(err))
    }, [props]);

    return (
        <MainContainer>
            {!titulo || !autor || !conteudo ?
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> : 
            <>
            <h2>{titulo}</h2>
            <span className="badge badge-secondary">Por {autor}</span>
            <br />
            <p>{conteudo}</p> </>}
            <Link to="/" type="submit" className="btn btn-primary">Voltar ao Feed</Link>
        </MainContainer>
    )
}

export default NoticiaPost

const MainContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2{
        text-align: center;
        font-weight: 900;
        color: var(--dark-green);
    }

    .spinner-border{
        width: 2rem;
        display: block;
        margin: 0 auto;
    }

    .btn-primary {
        margin-top: 2rem;
        background: var(--dark-green);
        border: none;
        &:hover{
            background: var(--light-green);
        }
    }
`;
