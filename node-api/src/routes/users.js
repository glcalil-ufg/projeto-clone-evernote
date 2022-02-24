const express = require('express');
const user = require('../business/user_business');

const router = express.Router();

router.get('/',(req,res ) => {
    
    if(user.verifyUser(req.headers)){
        user.getAll().then(resposta =>{
            res.json(resposta);
        })
    }else {
        res.json({erro: 'acesso não autorizado'})
    }
    
});

router.get('/byId',(req,res ) => {
    
    if(user.verifyUser(req.headers)){
        let dados = req.query;
        user.getById(dados).then(resposta =>{
            res.json(resposta);
        })
    }else {
        res.json({erro: 'acesso não autorizado'})
    }
    
});

router.post('/register',(req,res ) => {
    let {id} = req.query;
    let {dados} = req.body;
    user.registerUser(dados,id).then(resposta =>{
        res.json(resposta); 
    })
});

router.post('/update',(req,res ) => {
    let {id} = req.query;
    let {dados} = req.body;
    user.changeUser(dados,id).then(resposta =>{
        res.json(resposta); 
    })
});

router.post('/update-password',(req,res ) => {
    let {id} = req.query;
    let {dados} = req.body;
    user.changeUserPassword(dados['senha'],id).then(resposta =>{
        res.json(resposta); 
    })
});

router.post('/login',(req,res ) => {
    let {dados} = req.body;
    user.loginUser(dados).then(resposta =>{
        res.json(resposta); 
    })
});

module.exports = router;