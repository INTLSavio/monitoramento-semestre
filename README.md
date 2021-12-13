[![monitoramento-semestre](https://img.shields.io/static/v1?label=INTLSavio&message=monitoramento-semestre&color=blue&logo=github)](https://github.com/INTLSavio/monitoramento-semestre "Go to GitHub repo")
[![Build](https://github.com/INTLSavio/monitoramento-semestre/workflows/CI%2FCD/badge.svg)](https://github.com/INTLSavio/monitoramento-semestre/actions?query=workflow:"CI/CD")




<h1 align="center">
     :pager: <a href="#" alt="Monitor de Semestre"> Monitor de Semestre </a>
</h1>

<h3 align="center">
    Organize seus estudos, datas de provas, trabalhos. Acompanhe o progresso das suas notas!
</h3>

<h4 align="center">
	:computer:  Projeto de C214 :computer:
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Layout](#-layout)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando a aplicação](#user-content--rodando-a-aplicação-web-frontend)
   * [Autores](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

Projeto desenvolvido para a matéria de C214.
---

## ⚙️ Funcionalidades

- [x] Aluno entra com os dados:
  - [x] Mostrar datas de provas e progresso com as notas.
  - [x] Organização de datas de trabalhos.
  - [x] Popup avisando de proximidade de trabalhos e provas.
  - [x] Os usuários tem acesso ao aplicativo móvel, onde podem verificar todos os dados citados.
  
---


## 🚀 Como executar o projeto


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


#### 🧭 Rodando a aplicação 

```bash

# Clone este repositório
$ git clone https://github.com/INTLSavio/monitoramento-semestre.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd monitoramento-semestre

# Instale as dependências
$ npm install / yarn

# Para rodar os testes
$ npm test / yarn test

# Execute o banco de dados mockado
$ npm json-server / yarn json-server

# Execute a aplicação em modo de desenvolvimento
$ npm start / yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**

## 🦸 Autores

- Gabriel Moreira Peixoto Diniz
- Sávio Gomes Leite
- Rafaela Monteiro

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).


---
