import  Express  from "express";
import con from './connection.js';

const app = new Express();
const express = require("express");

app.get('/pessoa',(req, res)=> {
   //execultando a query para o banco
   con.query('SELECT * FROM lista-musicas ORDER BY nome DESC',( err ,result)=>{
    if(err){
        res.send(err);
    }
    res.send(result);
   
});

  app.listen('8080',()=>{
    console.log('Running server');
  })
})
