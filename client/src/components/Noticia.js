import React, {useState} from 'react'
import styled from 'styled-components';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Noticia = ({posts}) => {
    const[noticia, setNoticia] = useState([])

    const deletarNoticia = id => {
        axios.delete(`http://localhost:4001/paulosantos/api/noticias/${id}`)
        .then(res => alert("Notícia deletada com sucesso."))
        setNoticia(noticia.filter(elem => elem._id !== id))
    }
    return (
        <NoticiaContainer>
            <h1>Últimas Notícias</h1>
            <hr />
            {!posts.length ? 
            (<div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>) :
            (
            posts.map((noticia,key) => (
            <div className="container" key={key}>
                <Link to={{
                    pathname: `/noticias/${noticia._id}`
                }}>
                    <div className="row"><h2>{noticia.titulo}</h2></div>
                </Link>
                <div className="row"><p>{noticia.conteudo}</p></div>
                <div className="row">
                    <div className="badge badge-secondary col-sm-1 d-inline-block text-truncate">{noticia.autor}</div>
                    <div className="badge badge-secondary col-sm-1"><Moment format="DD/MM/yyyy">{noticia.dataPublicacao}</Moment></div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-2">
                        <Link to={`/atualizar/${noticia._id}`} className="btn btn-outline-success">Editar Post</Link>
                    </div>
                    <div className="col-sm-2">
                        <button onClick={() => deletarNoticia(noticia._id)} 
                                className="btn btn-outline-danger">Deletar Post</button>
                    </div>
                </div>
                <hr />
            </div>
        )))}
        </NoticiaContainer>
    )
    
}

export default Noticia

const NoticiaContainer = styled.div `
    margin: 3rem;

    .date-color{
        background: #344
    }
    .container{
        margin: 3 rem 0;
    }
    .text-truncate{
        max-width: 150px;
    }

    .spinner-border{
        width: 2rem;
        display: block;
        margin: 0 auto;
    }
`;