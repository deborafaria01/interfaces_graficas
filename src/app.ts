/* importando o express */
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

/* importando o modelo */
import { Projeto } from "./models/model"

/* importanto o data source inicializado */
import {Service} from "./models/services";


/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './src/views'); //Referência a partir do ponto de execução, fora de src

/* Configuração para leitura de parâmetros em requisição do tipo post em form */
app.use(bodyParser.urlencoded({extended: false}));

/* Inicializando a fonte de dados: */
var service = new Service();
service.start();

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('src/public'));

app.get('/listar_projetos', listProjectHandler);

app.get('/adicionarProjetoForm', addProjectHandlerForm);

app.post('/adicionarProjeto', addProjectHandler);

app.get('/', index_buscaHandler);

app.get('/login', loginHandler);

app.listen(port, listenHandler);


/* Função que gera o formulário para adição de um projeto*/
function addProjectHandlerForm(req,res){
    res.render('adicionar_projeto_form.ejs'); 
}

/* Função que efetivamente adiciona um projeto. */
function addProjectHandler(req,res){
    let novo_projeto = new Projeto();    
    novo_projeto.titulo = req.body.titulo;
    novo_projeto.categoria = req.body.categoria;
    novo_projeto.autor = req.body.autor;
    novo_projeto.data = req.body.data;   
    //MariaDBDataSource.manager.save(novo_projeto);
    service.insert(novo_projeto);
    res.render('adicionar_projeto_confirm.ejs', {projeto: novo_projeto}); 
}

async function listProjectHandler(req, res){
    /* dados vindos diretamente do banco de dados */
    let projetos = await service.listAll(); 
    console.log(projetos); //para debug somente
    res.render('listar_projetos.ejs',{lista_projetos: projetos});    
}

function listenHandler(){
    console.log(`Escutando na porta ${port}! Segue o link http://localhost:5000/`);
}

function loginHandler(req, res){
   
    res.render('login.ejs');    
}

function index_buscaHandler(req, res){
   
    res.render('index_busca.ejs');    
}

