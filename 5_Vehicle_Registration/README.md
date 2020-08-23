# Veículos

Esta é uma aplicação para cadastro de veículos. É capaz de fazer as seguintes operações:
* Cadastro de novos veículos, a partir do formato:
```bash
{
    "modelo": "fit",
    "marca": "Honda",
    "ano": "2009",
    "descricao": "alguma descricao",
    "vendido": True
}
```
* Listagem de veículos cadastrados.
* Listagem de veículo por ID.
* Exclusão de veículos.
* Alteração de informações de um veículo.

A aplicação utiliza um banco de dados Mongo Atlas (hospedado na nuvem através de AWS), Express e NodeJS.

## Instalação 

Para executar a aplicação é necessário ter a última versão mais estável de NodeJS.

```bash
npm --version
6.14.6
```

Em seguida, as seguintes dependencias precisam ser instaladas:

```bash
npm install --save express
npm install --save nodemon
npm install --save morgan
npm install --save body-parser
npm install --save mongoose
```

## Uso

Após ter todas as dependências instaladas:

### Lado do Servidor:

Ir até a pasta principal do projeto `C:/.../5_Vehicle_Registration` e executar:

```bash
npm start
```

O endereço da aplicação se encontra em:

```bash
localhost:3000
```



