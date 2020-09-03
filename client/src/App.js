import React, {useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import './components/layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Noticia from './components/Noticia';
import SalvarNoticia from './components/SalvarNoticia';
import EditarNoticia from './components/EditarNoticia';
import NoticiaPost from './components/NoticiaPost';

function App() {


  const[posts, setPosts] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:4001/paulosantos/api/noticias')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err));
  });
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Noticia posts={posts} />} />
      <Route path="/noticias/:id" render={(props) => <NoticiaPost {...props} posts={posts} />} />
      <Route path="/atualizar/:id" render={(props) => <EditarNoticia {...props} posts={posts} />} />
      <Route path="/salvar-noticia" component={SalvarNoticia} />
      <Footer />
    </div>
  );
}

export default App;
