# BOT Covid19 - Twitter [TypeScript]

![](img/bot.gif)

BOT Twitter é um bot desenvolvido para fornecer informações atualizadas de casos de Corona Virus no Brasil, o bot utiliza da api externa [COVID-19 Brazil API](https://covid19-brazil-api.now.sh/)  para fornecerer essas informações
### Bibliotecas externas utilizadas
* [twitter-api-v2](https://www.npmjs.com/package/twitter-api-v2)
* [dotenv](https://www.npmjs.com/package/dotenv)
### Instalação

BOT Twitter requer [Node.js](https://nodejs.org/) para ser executado

Instale as dependências e devDependencies e inicie o servidor.

```sh
$ cd BotGit
$ npm install 
$ npm run start
```
### Editando as chaves do desenvolvedor

Crie um arquivo *.env* na raiz do projeto, e adicione as seguintes variaveis com as  determinadas chaves de acesso chaves de acesso
```
BOT_CONSUMER_KEY=lGXmcbigvNxxxxxxxxxxxxxxxxx
BOT_CONSUMER_SECRET=iAAPWfTyJ756eGzOUZGxxxxxxxxxxxxxxxxxxxxxxx
BOT_ACCESS_KEY=1301576666376998912-xxxxxxxxxxxxxxxxxxxxxxxx
BOT_ACCESS_TOKEN=KSDbQpMR9iBiwADxxxxxxxxxxxxxxxxxxxxxxxxxx
```
### Editando a palavra desejada para pesquisa

No mesmo arquivo *.env* adicione a frase/palavra desejada
```
PESQUISA=SUACHAVEDEFILTRO  //EX: @bBOT_COVID_BR
URL_API_COVID=https://covid19-brazil-api.now.sh/api/report/v1
```
### Editando comentario 

No arquivo CovidService.ts, altere o retorno da função *montarMensagemCovid* para a frase/palavra desejada, lembrando de sempre marcar o @nomeSolicitante 
```
private montarMensagemCovid(covidModel: CovidModel, nomeSolicitante: string) {
    return `Olá @${nomeSolicitante} Dados Covid-19 ${EMOJI_BRASIL}......
  }
```

### Atualmente Hosteado no [Heroku](https://dashboard.heroku.com)
