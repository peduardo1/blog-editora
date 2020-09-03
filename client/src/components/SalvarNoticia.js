import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"

const SalvarNoticia = () => {
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

        axios.post("http://localhost:4001/paulosantos/api/noticias", noticias)
        .then(res => setMessage("Notícia salva com sucesso."))
        .catch(err => {console.log(err)});
    }

    return (
        <CriarNoticiaContainer>
            <h1>Salvar novo Artigo</h1>
            <span className="message">{message}</span>
            <div className="container">
                <form onSubmit={salvarNoticia} encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="autor">Autor</label>
                        <input type="text" 
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                        className="form-control" placeholder="Autor" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="titulo">Titulo da Notícia</label>
                        <input type="text" 
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        className="form-control" placeholder="titulo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="conteudo">Notícia</label>
                        <textarea className="form-control" 
                        value={conteudo}
                        onChange={e => setConteudo(e.target.value)}
                        rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Postar Notícia</button>
                </form>
            </div>
        </CriarNoticiaContainer>
    )
}

export default SalvarNoticia

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