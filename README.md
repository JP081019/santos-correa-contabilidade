# Santos Corrêa Contabilidade

Site institucional com Next.js App Router, React, TypeScript e CSS mobile-first.

## Executar

```sh
npm install
npm run dev
```

Acesse http://localhost:3000. Para validar produção: `npm run build`; para servir o build: `npm start`.

## Organização

- `app/`: página, metadata e tokens/estilos globais organizados por seção.
- `components/layout/`: header, footer e WhatsApp.
- `components/sections/`: sete seções com responsabilidades próprias.
- `data/`: serviços, regimes, contatos e caminhos reais dos assets.
- `lib/whatsapp.ts`: links e mensagens contextualizadas.
- `public/`: arquivos oficiais preservados.

## Fontes e imagens

General Sans e Switzer são carregadas pela API oficial do Fontshare, usando `display=swap`. A licença ITF Free Font License rege essas famílias; consulta: https://www.fontshare.com/licenses/itf-ffl. Nenhuma cópia das fontes é redistribuída neste projeto. Arial/sans-serif serve apenas como fallback em caso de falha de rede.

O favicon usa o PNG oficial completo, sem gerar ou alterar imagens. Logos e foto da equipe são os arquivos originais presentes em `public/`.

## Interações e acessibilidade

Menu móvel com Escape, fechamento por clique fora e links; regimes em acordeão móvel e navegação vertical no desktop, com Enter/Espaço, setas, Home e End. Conteúdo permanece visível sem depender de animações de entrada. Movimento reduzido é respeitado. O WhatsApp flutuante é ocultado quando o footer entra na tela ou quando sua posição coincide com textos, imagens e controles.

O projeto usa o repositório `JP081019/santos-correa-contabilidade`. O push na branch `main` aciona a publicação automática no projeto Vercel `site-santos-assessoria-contabil`.

`SITE_URL` permite configurar a URL canônica usada para as imagens Open Graph. O valor padrão é o endereço Vercel já utilizado pela empresa.
