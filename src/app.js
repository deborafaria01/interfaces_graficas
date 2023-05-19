/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/', index_buscaHandler);

app.get('/cadastro', cadastroHandler);

app.get('/login', loginHandler);

app.listen(port, listenHandler);

function listenHandler(){
    console.log(`Executando na porta ${port}! Segue o link http://localhost:5000/`);
}


function loginHandler(req, res){
   
    res.render('login.ejs');    
}

function cadastroHandler(req, res){

    res.render('cadastro.ejs');    
}

function index_buscaHandler(req, res){
   
    res.render('index_busca.ejs');    
}


