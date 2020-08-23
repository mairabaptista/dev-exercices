# Veículos

Esta é uma aplicação para cadastro de veículos. É capaz de fazer as seguintes operações:
* Cadastro de novos veículos, a partir do formato:
```bash
modelo: string
marca: string
ano: integer
descricao: text
vendido: bool
```
* Listagem de veículos cadastrados.
* Listagem de veículo por ID.
* Exclusão de veículos.
* Alteração de informações de um veículo.

A é feita a partir da MEAN stack, utilizando um banco de dado Mongo Atlas (hospedado na nuvem através de AWS), Express, Angular e NodeJS.

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

### Lado do Front End:



