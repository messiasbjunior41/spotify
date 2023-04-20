import mysql from 'mysql';

const con = mysql.createConnection({ 
    host:'localhost',
    user:'root',
    password:'',
    database:'pré-lista'
    });
    
    export default con;