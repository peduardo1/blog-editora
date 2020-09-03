const express = require('express');
const router = express.Router();
const Noticia = require('../models/noticia');

router.get('/noticias', (req, res) => {

    Noticia.find().sort('dataPublicacao').exec() 
    .then(noticias => res.status(200).send(noticias))
    .catch(err => res.status(400).send({
                'Error': err.message,
                'Status': err.status
        }))
    });

    router.get('/noticias/:id', (req, res) => {

        Noticia.findById(req.params.id) 
        .then(noticia => res.status(200).send(noticia))
        .catch(err => res.status(400).send({
                    'Error': err.message,
                    'Status': err.status
            }))
        });

//Criar uma nova noticia
router.post('/noticias', function(req, res, next){
    req.dataPublicacao = new Date();
    Noticia.create(req.body)
    .then(function(noticia){
        res.status(201).send(noticia);
    }).catch(err => res.status(400).send({
        'Error': err.message,
        'Status': err.status
    }))
});

//atualizar uma noticia
router.put('/noticias/editar/:id', function(req, res, next){
    Noticia.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function(noticia){
        Noticia.findById({_id: req.params.id}).then(function(noticia){
            res.send(noticia);  
        });
        
    }).catch(err => res.status(400).send({
        'Error': err.body,
        'Status': err.status
    }))
});

//deletar uma noticia
router.delete('/noticias/:id', function(req, res, next){
    Noticia.findByIdAndRemove({_id: req.params.id})
    .then(function(noticia){
        res.status(204).send(noticia);  
    }).catch(err => res.status(400).json({
        'Error': err.message,
        'Status': err.status
    }))
});

module.exports = router;