# Relatório Automatizado

Projeto criado para facilitar a criação de relatórios diários das aulas aplicadas no dia. 
A aplicação organiza os alunos, permite o registro de presença e facilita a geração do relatório diário seguindo o padrão de formatação solicitado.

## Acesso

> **[Acessar o projeto](https://relatorio-automatizado-flex.vercel.app/)**

---

## Tecnologias utilizadas

* React
* Javascript
* Styled-components
* Axios
* Vite

---

## Funcionalidades

* [x] Listagem de alunos do dia
* [x] Marcar presença dos alunos
* [x] Sincronização dos alunos com a API
* [x] Integração com API
* [x] Interface responsiva
* [x] Geração do relatório diário
* [x] Cópia do relatório formatado

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Mcaua7/Relatorio_Automatizado_Flex.git
```

### 2. Entre na pasta

```bash
cd Relatorio_Automatizado_Flex
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

---

## Integração com API

Este projeto utiliza uma API para realizar operações de consulta e manipulação de dados.


### Backend

A aplicação consome uma API responsável por coletar, armazenar e atualizar as informações dos alunos.

A API foi desenvolvida separadamente e utiliza banco de dados PostgreSQL para persistência dos dados.

### Endpoints utilizados

| Método | Rota          | Descrição                         |
| ------ | ------------- | --------------------------------- |
| GET    | `/relatorio`  | Retorna o relatório do dia        |
| POST   | `/sincronizar`| Salva os alunos no banco de dados |
| PATCH  | `/presencas`  | Atualiza o status de presença     |


---

## Interface

A aplicação foi desenvolvida com foco em:

* Responsividade
* Organização dos componentes
* Facilidade de navegação
* Experiência do usuário

---

## Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

* Componentização no React
* Hooks
* Consumo de APIs
* Requisições HTTP
* Manipulação de estados
* Organização de projetos
* Variáveis de ambiente
* Responsividade

---

## Autor

**Matheus Cauã**

* GitHub: [@Mcaua7](https://github.com/Mcaua7)
* LinkedIn: [MATHEUS CAUÃ](https://linkedin.com/in/matheus-cauã-silva)
