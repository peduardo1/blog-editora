import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios"

const EditarNoticia = (props) => {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [message, setMessage] = useState('')

    const salvarNoticia = e=>{
        e.preventDefault();
        const noticias = {
            titulo, 
            autor,
            conteudo
        }

        setTitulo('')
        setAutor('')
        setConteudo('')

        axios.put(`http://localhost:4001/paulosantos/api/noticias/${props.match.params.id}`, noticias)
        .then(res => setMessage("Notícia atualizada com sucesso."))
        .catch(err => {console.log(err)});
    }

    useEffect(() => {
        axios.get(`http://localhost:4001/paulosantos/api/noticias/${props.match.params.id}`)
            .then(res => (
                setTitulo(res.data.titulo),
                setAutor(res.data.autor),
                setConteudo(res.data.conteudo)
            ))
            .catch(err => console.log(err))
    }, []);

    return (
        <CriarNoticiaContainer>
            <h1>Editar Artigo</h1>
            <span className="message">{message}</span>
            <div className="container">
                <form onSubmit={salvarNoticia} encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="autor">Autor</label>
                        <input type="text" 
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="titulo">Titulo da Notícia</label>
                        <input type="text" 
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="conteudo">Notícia</label>
                        <textarea className="form-control" 
                        value={conteudo}
                        onChange={e => setConteudo(e.target.value)}
                        rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                </form>
            </div>
        </CriarNoticiaContainer>
    )
}

export default EditarNoticia

const CriarNoticiaContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;

    h1 {
        font-weight: 900;
        color: var(--dark-green);
    }

    label, input, textarea{
        font-weight: 900;
    }
    .btn-primary {
        margin-top: 2rem;
        background: var(--dark-green);
        border: none;
        &:hover{
            background: var(--light-green);
        }
    }

    .message{
        font-weight: 900;
        color: tomato;
        padding: 1rem 1rem 1rem 0;
    }
`;