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

