# NavyCare — Angular + API

Versão Angular do NavyCare, com frontend standalone em Angular 20 e API Express para login com JWT.

## Requisitos

- Node.js 20+
- npm 10+ ou pnpm 10+

## Instalação

```bash
npm install
```

## Desenvolvimento

Em um terminal:

```bash
npm run api
```

Em outro:

```bash
npm start
```

Ou, para iniciar os dois processos juntos:

```bash
npm run dev
```

Frontend: `http://localhost:4200`  
API: `http://localhost:3333`

## Login de demonstração

- E-mail: `mariana@acmeoffice.com`
- Senha: `navycare`

## Endpoints

- `GET /api/health`
- `POST /api/auth/login`
- `GET /api/auth/me` com `Authorization: Bearer <token>`
- `POST /api/auth/logout` com `Authorization: Bearer <token>`
- `GET /api/dashboard` com `Authorization: Bearer <token>`

> Para produção, configure `JWT_SECRET` e substitua o array de demonstração por um banco de dados.

## Build e ZIP

```bash
npm run build
npm run zip
```

O comando `zip` gera `navycare-angular.zip` sem incluir `node_modules`, `.angular` ou builds locais.
