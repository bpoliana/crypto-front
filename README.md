# crypto-front

Aplicação frontend para visualização do preço do BitCoin para diferentes moedas: `USD`, `BRL`, `EUR` e `CAD` (Dólar Americano, Real, Euro e Dólar Canadense).
## Tech-stack

Foi escolhida a linguagem _TypeScript_ e o framework _React_. Para as requisições feitas para a [crypto-api](https://github.com/bpoliana/crypto-api), foi utilizado o `axios`. 
## Dependências
Para rodar esse projeto localmente, é necessário ter `node.js` instalado. Preferencialmente, a partir da versão `14.x.x` visto a compatibilidade das dependências do projeto. 
Recomenda-se o uso do módulo `nvm` para gerenciar a versão do node logal. 


## Como rodar 
Para instalar as dependências:
```
npm install
```
Para subir a aplicação localmente: 
```
npm run dev
```
A aplicação roda por default na porta `9000`. E aponta para o backend da api na porta `3000`
Para visualizar a home, vá para `localhost:9000` no browser de sua preferência. 

## Testando 
Para rodar os Testes Unitários use o comando: 
```
npm test
```
Infelizmente não foram criados testes nessa aplicação. No entanto o projeto foi configurado para tal.
## Linter e Husky
Na tentativa de manter padrões sensatos durante a implementação, utlizei o `eslint` como linter para padronização do estilos dos arquivos de texto. E para verificar se o código inserido não quebrava os testes presentes na aplicação, adicionei `husky` com um script que rodava o lint-staged e os testes da aplicação antes de cada commit. 




### Decisões de projeto

A estrutura desse projeto consiste na separação dos componentes em:
- `Login` - onde estão é renderizado o form de login referente ao endpoint da crypto-api: `POST /api/login`
- `Currencies`- onde são renderizados os valores das moedas vindas do endpoint: `GET /api/crypto/btc`. Nessa rota, que é a home, os valores das moedas se alteram conforme o valor inserido para `BTC`, mas isso não é alterado no backend. 
- `UpdateCurrency` - onde é renderizado o form para atualização do valor de alguma moeda, referente ao endpoint: `POST /api/crypto/btc`
### TO DO List 

- Testes unitários para os componentes
- Refatorar trechos do componente `Currencies` e `UpdateCurrency` que poderiam ser métodos e componentes seperados
- Criar um GlobalState para passar os dados e InitialState
- Criar um reducer para gerar um Global Provider
