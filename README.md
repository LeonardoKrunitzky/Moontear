# Moontear

Este repositório contém um site pessoal construído com Next.js e TypeScript. O objetivo é apresentar de forma visual e imersiva o meu estilo, inspirações e gostos: uma combinação de música, jogos, animes e trechos que me movem.

## Sobre o projeto

A página foi criada para ser a minha vitrine pessoal. Ela traz:

- um perfil estilizado com meu nome, imagem e frase favorita;
- uma galeria de artistas e bandas que eu curto ouvir;
- um painel de jogos e interesses com imagens animadas;
- fragmentos de memória e frases inspiradoras em português e inglês;
- efeitos visuais como sobreposição CRT, som de ambientação e uma fogueira no rodapé.

O design valoriza uma atmosfera dark, retrô e cinematográfica, com referências a animes, jogos e música alternativa.

## Estrutura principal

- `src/app/page.tsx` - página inicial do site.
- `src/app/layout.tsx` - layout raiz e metadados da página.
- `src/components/ProfileHeader` - cabeçalho com nome e perfil.
- `src/components/MemoryFragments` - blocos de citações e imagens inspiradoras.
- `src/components/VinylGallery` - seção de música e jogos.
- `src/components/Interests` - mosaico de interesses em animes e jogos.
- `src/components/BackgroundOST`, `CrtOverlay`, `BottomBonfire` - efeitos de apresentação e ambientação.

## Tecnologias usadas

- Next.js 16
- React 19
- TypeScript
- ESLint

## Instruções para rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Personalização

Para deixar o site ainda mais com a sua cara, edite os conteúdos:

- `src/components/ProfileHeader/ProfileHeader.tsx` - altere o nome e a frase destaque.
- `src/components/MemoryFragments/MemoryFragments.tsx` - atualize as citações e as imagens.
- `src/components/VinylGallery/VinylGallery.tsx` - adicione ou altere artistas, links e imagens de músicas e jogos.
- `src/components/Interests/Interest.tsx` - personalize os interesses e gifs exibidos.
- `public/images` - substitua as imagens usadas no site.

### Variáveis de ambiente

O componente de `VinylGallery` usa variáveis de ambiente para exibir links e imagens externas. Crie um arquivo `.env.local` com os valores que desejar:

```env
NEXT_PUBLIC_SPOTIFY_NOVATOREM=https://open.spotify.com/user/...
NEXT_PUBLIC_SPOTIFY_IMAGE=https://seu-link-para-imagem-spotify.png
NEXT_PUBLIC_EXOPHASE_PROFILE=https://www.exophase.com/...
NEXT_PUBLIC_EXOPHASE_IMAGE=https://seu-link-para-imagem-exophase.png
```

## Como falar mais sobre mim

Este projeto é ideal para mostrar quem eu sou através do conteúdo que mais me representa. Ele funciona como um espaço pessoal para compartilhar:

- meus gostos musicais e artistas favoritos;
- os jogos em que estou jogando ou que mais me marcam;
- animes e universos que me inspiram;
- frases que traduzem minha visão de mundo.

Se quiser, você pode expandir a página com seções adicionais de contato, redes sociais, projetos e uma biografia mais detalhada.

## Deploy

Você pode publicar o site em plataformas como Vercel ou Netlify. Para um deploy rápido, basta conectar o repositório e usar o comando:

```bash
npm run build
npm start
```

---

Desenvolvido por Leonardo, com foco em estilo, atmosfera e personalidade.</n
