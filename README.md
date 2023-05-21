## Interfaces Gráficas

#### Objetivo: Disponibilização das interfaces gráficas acessíveis ao usuário. Interfaces de busca e geração de relatórios, para um usuário sem privilégios e uma interface administrativa, utilizando o retorno do serviço de autenticação.

#### Integrantes: Debora Faria 

#### Para executar o sistema:

1. Execute o servidor de banco de dados localmente e crie uma base de dados denominada web_orm_insert_ts.
1. No arquivo denominado src/models/data_source.ts, verifique as configurações das credenciais, porta de execução, etc  de acordo com o SGBD em execução.
1. Na raiz do projeto, fora da pasta src/, execute os comandos:
```console
npm install
```
```console
npm start
``` 
1. Espere aparecer a mensagem informando que a fonte de dados foi inicializada.
1. Acessar http://localhost:5000/ e verificar se aparece uma interface com listagem de projetos e com um menu de navegação para inserção de dados.



