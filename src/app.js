/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/', loginHandler);

app.get('/cadastro', cadastroHandler);

app.get('/buscar', cadastroHandler);

app.listen(port, listenHandler);


function listenHandler(){
    console.log(`Executando na porta ${port}! Segue o link http://localhost:5000/`);
}


function loginHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
   
    res.render('login.ejs');    
}

function cadastroHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
   
    res.render('cadastro.ejs');    
}

function buscarHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
   
    res.render('buscar.ejs');    
}
