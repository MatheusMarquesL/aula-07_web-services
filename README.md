# Aula 07 - Microsserviços

Projeto desenvolvido para a disciplina de Web Services.

## Objetivo

Implementar dois microsserviços independentes:

- Catálogo
- Pedidos

Os serviços se comunicam através de HTTP utilizando REST e `fetch`.

## Estrutura

```text
aula-07/
├── catalogo/
│   ├── src/
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── pedidos/
│   ├── src/
│   │   ├── catalogo.client.ts
│   │   ├── pedidos.service.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md