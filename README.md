# API Notes
Este projeto consiste no backend de uma aplicação de notas, onde cada usuário pode fazer login, criar notas, atualizar seu perfil e carregar fotos de perfil. Foi desenvolvido utilizando Node.js com Express como framework principal.

## Índice
- [Visão Geral 🌐](#visão-geral)
- [Tecnologias Utilizadas 💻](#tecnologias-utilizadas)
- [Instalação ⚙️](#instalação)
- [Configuração 🛠️](#configuração)
- [Uso 🚀](#uso)
- [Contribuição 🤝](#contribuição)
- [Licença 📝](#licença)

## Visão Geral 🌐
Este projeto é o backend de uma aplicação de notas, onde os usuários podem se cadastrar, fazer login, criar notas, atualizar seus perfis e fazer upload de fotos de perfil. Ele fornece endpoints de API para realizar todas essas operações de forma segura e eficiente.

<img src="./assets/GifDesktopNote.gif" alt="projeto front end">

## Tecnologias Utilizadas 💻
- Node.js
- Express.js
- Knex.js
- PostgreSQL (SupaBase)
- Store (SupaBase)
- JWT (JSON Web Tokens)
- Bcrypt
- Multer
- PM2
- Jest

## Instalação ⚙️
Para instalar o projeto localmente, siga estas etapas:

- Clone este repositório para o seu ambiente de desenvolvimento.
- Navegue até o diretório raiz do projeto.
- Execute o comando npm install para instalar todas as dependências do projeto.


## Configuração 🛠️
Antes de executar o projeto, você precisa configurar algumas variáveis de ambiente:

- DATABASE: URL de conexão com o banco de dados PostgreSQL (SupaBase).
- DATABASE_PASSWORD: PASSWORD de conexão com o banco de dados PostgreSQL (SupaBase).
- DATABASE_USER: USER de conexão com o banco de dados PostgreSQL (SupaBase).
- DATABASE_HOST: HOST de conexão com o banco de dados PostgreSQL (SupaBase).
- DATABASE_PORT: PORT de conexão com o banco de dados PostgreSQL (SupaBase).

- AUTH_SECRET: Chave secreta para assinar e verificar tokens JWT.
- PORT: Porta na qual o servidor Express será executado.

- SUPABASE_URL: URL da API do SupaBase.
- SUPABASE_KEY: Chave de acesso à API do SupaBase.

Certifique-se de configurar essas variáveis de ambiente de acordo com o seu ambiente de desenvolvimento ou produção.

## Uso 🚀
Após a instalação e configuração, você pode iniciar o servidor executando o comando npm start. O servidor será executado na porta especificada e estará pronto para receber solicitações da aplicação de frontend.

## Contribuição 🤝
Se você quiser contribuir com este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Certifique-se de seguir as diretrizes de contribuição.

## Licença 📝
Este projeto está licenciado sob a Licença MIT.