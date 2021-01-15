# zenvia-voice

Este repositório contem a aplicação criada no artigo tutorial da [Prensa.li](https://https://prensa.li/) sobre como [consumir a API de voz TotalVoice da Zenvia](https://prensa.li/zenvia/zenvia-voice-api/).

## Como executar

### Cofiguração inicial

Para executar esta aplicação você precisa fazer o cadastro no [site da API](https://www.totalvoice.com.br/signup.php), preencher as informações e clicar em "_CRIAR_". Após criar a conta, é preciso confirmar o número de celular e o endereço de e-mail para ter acesso ao painel. Após confirmar suas informações é possível acessar o painel e adquirir o _Access Token_ para se autenticar nas requisições à API.

Com o _Access Token_ em mãos, renomeie o arquivo [`.env.example`](./.env.example) para `.env` e coloque o token na variável `VOICE_TOKEN`.

### Requisitos

- [node.js](https://nodejs.org/en/download/) 8 ou versão superior
- [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) (opcional, mas recomendado)

### Executando o projeto

Clone o projeto

```bash
git clone https://github.com/apiplaybook/zenvia-voice.git
```

Após clonar o projeto, dentro da pasta do mesmo, execute:

```bash
npm run dev
```

ou

```bash
yarn dev
```
