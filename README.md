# 🌱 Instituto Horizonte Verde

Aplicação web desenvolvida para representar o site de uma ONG fictícia chamada **Instituto Horizonte Verde**, com o objetivo de apresentar a organização, seus projetos e possibilitar o cadastro de pessoas interessadas em atuar como voluntárias.

O projeto foi desenvolvido como uma aplicação front-end utilizando **HTML5, CSS3 e JavaScript (ES6+)**, aplicando conceitos de desenvolvimento de interfaces, manipulação do DOM, validação de formulários, armazenamento local, modularização e geração de builds com Webpack.

---

## 📋 Funcionalidades

A aplicação possui as seguintes funcionalidades:

- **Single Page Application (SPA):** navegação entre as diferentes seções da aplicação sem necessidade de recarregar a página.
- **Cadastro de voluntários:** formulário para registro de pessoas interessadas em participar das atividades da ONG.
- **Validação de formulário:** verificação dos dados preenchidos pelo usuário e apresentação de mensagens de validação.
- **Cards dinâmicos:** criação e renderização de elementos da interface utilizando JavaScript.
- **Persistência de dados:** armazenamento dos cadastros utilizando `localStorage`.
- **Recuperação de dados:** restauração do último cadastro realizado quando a aplicação é carregada novamente.
- **Modularização:** separação das responsabilidades do JavaScript utilizando **ES6 Modules** (`import` e `export`).
- **Build automatizada:** utilização do Webpack para empacotar e otimizar os arquivos da aplicação.
- **Processamento de CSS:** integração do CSS ao processo de build utilizando `css-loader` e `style-loader`.
- **Gerenciamento de imagens:** cópia dos arquivos de imagem para a versão final da aplicação durante o processo de build.

---

## 🛠️ Tecnologias utilizadas

### Front-end

- **HTML5** — estrutura da aplicação.
- **CSS3** — estilização e responsividade.
- **JavaScript ES6+** — lógica da aplicação, manipulação do DOM e interatividade.

### Ferramentas e recursos

- **ES6 Modules** — organização do código JavaScript em módulos independentes.
- **LocalStorage** — persistência local dos dados cadastrados.
- **Webpack 5** — empacotamento, otimização e geração da build da aplicação.
- **Webpack CLI** — execução dos comandos do Webpack pelo terminal.
- **HTMLWebpackPlugin** — geração do `index.html` na versão final da aplicação.
- **CSS Loader** — processamento dos arquivos CSS durante a build.
- **Style Loader** — integração dos estilos CSS ao bundle da aplicação.
- **CopyWebpackPlugin** — cópia dos arquivos de imagem para a pasta de distribuição.
- **Node.js / npm** — gerenciamento das dependências e execução dos comandos de build.
- **Git** — controle de versão.
- **GitHub** — hospedagem do repositório e gerenciamento do código-fonte.

---

## 📁 Estrutura do projeto

A aplicação foi organizada da seguinte maneira:

```text
Instituto-Horizonte-Verde/
│
├── src/
│   ├── main.js
│   ├── cards.js
│   └── storage.js
│
├── css/
│   └── style.css
│   └── alerts.css
│
├── assets/
│   └── escola-sustentavel.webp
│   └── hortas-comunitárias.webp
│   └── imagem-ong.webp
│   └── logo.webp
│   └── plantio.webp
│   └── reciclagem.webp
│
├── dist/
│   └── ...
│
├── index.html
├── package.json
├── package-lock.json
├── webpack.config.cjs
└── README.md
```

### Principais arquivos

#### `index.html`

Arquivo responsável pela estrutura HTML da aplicação e pelos elementos apresentados na interface.

#### `src/main.js`

Arquivo principal da aplicação. Responsável pela inicialização da aplicação, funcionamento da SPA e comunicação entre os diferentes módulos.

#### `src/cards.js`

Responsável pela criação e renderização dos cards dinâmicos.

#### `src/storage.js`

Responsável pelo gerenciamento dos dados armazenados no `localStorage`, incluindo as funções de carregamento e salvamento dos cadastros.

#### `css/style.css`

Arquivo responsável pela estilização e apresentação visual da aplicação.

#### `webpack.config.cjs`

Arquivo de configuração do Webpack. Define o ponto de entrada, o diretório de saída, os loaders, plugins e o modo de geração da build.

#### `package.json`

Arquivo responsável pelo gerenciamento das dependências e dos scripts utilizados no projeto.

---

# 🧩 Organização e modularização

O código JavaScript foi dividido utilizando **ES6 Modules**, buscando manter alta coesão e baixo acoplamento entre as funcionalidades.

A divisão foi realizada considerando as responsabilidades de cada parte da aplicação:

```text
                    main.js
                       │
          ┌────────────┴────────────┐
          ↓                         ↓
      cards.js                 storage.js
          │                         │
          ↓                         ↓
   Cards dinâmicos            localStorage
```
---

# 💾 Persistência com LocalStorage

A aplicação utiliza o recurso `localStorage` do navegador para armazenar os dados cadastrados no formulário.

Os dados são organizados em uma estrutura de array e convertidos para JSON antes de serem armazenados.

O processo de armazenamento ocorre da seguinte maneira:

```text
Preenchimento do formulário
          ↓
Validação dos dados
          ↓
Criação do objeto do cadastro
          ↓
Adição ao array de cadastros
          ↓
JSON.stringify()
          ↓
localStorage
```

Na recuperação dos dados:

```text
localStorage
     ↓
JSON.parse()
     ↓
Array de cadastros
     ↓
Recuperação do último cadastro
     ↓
Preenchimento do formulário
```

O armazenamento é realizado localmente no navegador. Portanto, os dados não são enviados para um servidor ou banco de dados externo.

---

# 📦 Webpack

O **Webpack 5** foi utilizado como ferramenta de *bundling* e geração da build da aplicação.

O ponto de entrada definido na configuração é:

```javascript
entry: "./src/main.js"
```

A partir desse arquivo, o Webpack identifica os módulos importados e suas dependências, como:

```text
main.js
 ├── cards.js
 ├── storage.js
 └── style.css
```

Após o processamento, os arquivos são empacotados e disponibilizados no diretório `dist`.

A configuração também utiliza:

- `HtmlWebpackPlugin` para gerar o HTML da build;
- `css-loader` para processar arquivos CSS;
- `style-loader` para integrar os estilos à aplicação;
- `CopyWebpackPlugin` para copiar os arquivos de imagem;
- modo `production` para realizar otimizações e minificação.

---

# 🔨 Gerando a build

As dependências do projeto são instaladas através do npm.

Após instalar as dependências, a build pode ser gerada com:

```bash
npm run build
```

O comando executa o script definido no `package.json`:

```json
"scripts": {
    "build": "webpack --config webpack.config.cjs"
}
```

O Webpack então processa os arquivos e gera a versão final dentro de:

```text
dist/
```

A estrutura da build possui, entre outros arquivos:

```text
dist/
├── index.html
├── bundle.js
└── img/
    └── ...
```

O `bundle.js` representa o resultado do empacotamento dos módulos JavaScript e não substitui os arquivos-fonte originais.

---

# 🖼️ Imagens

As imagens utilizadas pela aplicação são mantidas no diretório:

```text
assets/
```

Durante o processo de build, o `CopyWebpackPlugin` é responsável por copiar esses arquivos para o diretório de distribuição:

```text
assets/
   ↓
Webpack
   ↓
dist/assets/
```

Dessa maneira, as imagens permanecem disponíveis quando a versão gerada pelo Webpack é publicada.

---

# 🚀 Instalação e execução local

## Pré-requisitos

Para executar o projeto localmente, é necessário possuir:

- **Node.js**
- **npm**
- **Visual Studio Code**
- Navegador web moderno.

A instalação das dependências é feita pelo terminal dentro da pasta do projeto.

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Depois, entre na pasta do projeto:

```bash
cd Instituto-Horizonte-Verde
```

### 2. Instale as dependências

Execute:

```bash
npm install
```

O npm utilizará o `package.json` e o `package-lock.json` para instalar as dependências necessárias.

### 3. Gere a build

Execute:

```bash
npm run build
```

Após a execução, o Webpack criará a pasta:

```text
dist/
```

contendo a versão empacotada da aplicação.

### 4. Execute a aplicação

Durante o desenvolvimento, o arquivo `index.html` pode ser aberto utilizando o **Live Server** no Visual Studio Code ou através do navegador integrado do VS Code.

Para testar especificamente a versão gerada pelo Webpack, recomenda-se utilizar um servidor local para servir o conteúdo da pasta `dist`.

---

# 📚 Objetivos acadêmicos

O projeto permitiu aplicar conhecimentos relacionados ao desenvolvimento de aplicações web, incluindo:

- Estruturação de páginas com HTML5;
- Estilização utilizando CSS3;
- Programação com JavaScript;
- Manipulação do DOM;
- Validação de formulários;
- Criação dinâmica de elementos;
- Desenvolvimento de uma SPA;
- Persistência de dados utilizando `localStorage`;
- Modularização com ES6 Modules;
- Gerenciamento de dependências com npm;
- Empacotamento de aplicações com Webpack;
- Geração de builds de produção;
- Controle de versão com Git;
- Gerenciamento de código através do GitHub;

---

# 👨‍💻 Desenvolvimento

**Projeto:** Instituto Horizonte Verde

**Tipo:** Aplicação Web / Projeto acadêmico

**Tecnologias principais:** HTML5, CSS3, JavaScript ES6+, Webpack, Git e GitHub.

---
