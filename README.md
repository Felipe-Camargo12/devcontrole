This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Sobre o projeto

# DevControle

DevControle é um sistema de gerenciamento de empresas focado no atendimento ao cliente e gestão de chamados. O objetivo é facilitar o acompanhamento e a resolução de chamados, garantindo maior organização e eficiência para sua empresa.

## Funcionalidades

- **Autenticação segura**:
  - Implementada com [NextAuth.js](https://next-auth.js.org/) e suporte a login com o Google (Google Provider).
- **Gestão de chamados**:
  - Criação de chamados.
  - Detalhamento e visualização de chamados.
  - Atualização de status e informações.
  - Exclusão de chamados desnecessários.
- **Gerenciamento de clientes**:
  - Cadastro de novos clientes.
  - Atualização e exclusão de informações de clientes.
- **Banco de dados**:
  - Utilização do [Prisma ORM](https://www.prisma.io/) para comunicação com o banco de dados MongoDB.

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web.
- **NextAuth.js**: Para autenticação e segurança.
- **Prisma**: ORM para manipulação de dados.
- **MongoDB**: Banco de dados NoSQL.

## Instalação e Configuração

Siga os passos abaixo para rodar o projeto localmente:

### Requisitos
- Node.js v18+ instalado.
- MongoDB configurado (local ou em nuvem, como MongoDB Atlas).
- Conta Google para configurar o Google Provider do NextAuth.

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/devcontrole.git
   cd devcontrole
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione as variáveis:
     ```env
     DATABASE_URL="sua-conexao-mongodb"
     NEXTAUTH_SECRET="sua-chave-secreta"
     NEXTAUTH_URL="http://localhost:3000"
     GOOGLE_CLIENT_ID="seu-client-id-google"
     GOOGLE_CLIENT_SECRET="seu-client-secret-google"
     ```

4. Execute as migrações do Prisma para criar o banco de dados:
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- **`pages/`**: Contém as páginas do Next.js.
- **`components/`**: Componentes reutilizáveis da interface.
- **`prisma/`**: Configuração e schema do Prisma.
- **`lib/`**: Configuração de autenticação e outras bibliotecas auxiliares.

## Scripts Disponíveis

- `dev`: Inicia o projeto em ambiente de desenvolvimento.
- `build`: Gera o build para produção.
- `start`: Inicia o servidor em modo de produção.
- `prisma`: Utilitário para gerenciamento do Prisma.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.

## Licença

Este projeto é licenciado sob a [MIT License](./LICENSE).

