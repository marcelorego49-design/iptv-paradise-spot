# Plano de Implementação: Site do Cliente (Leão Play)

Baseado no PDF fornecido, o projeto Leão Play é um ecossistema de entretenimento efêmero (24h) com integração ao OneSignal (push), Supabase (banco/config) e Cloudflare (R2/Worker). 

## Ações de Design e UX
- **Fidelidade Visual:** Manter o tema "Amarelo Ouro" e Dark solicitado anteriormente.
- **Componentes:** Criar componentes para exibição de conteúdo efêmero (Avisos, Mídias, Jogos e Filmes).

## Ações Técnicas
- **Configuração Supabase:** Integrar com a tabela `app_config` e coluna `dados` (JSONB) descrita no PDF.
- **Integração OneSignal:** Adicionar scripts do OneSignal (`OneSignalSDK.page.js`) e configuração do App ID (`5199af65-5183-4031-b57c-1218bff994fa`).
- **Conteúdo Efêmero:** Implementar lógica de filtragem de 24h para os itens recebidos do Supabase/Worker.
- **Service Worker:** Adicionar o arquivo `OneSignalSDKWorker.js` unificado na raiz (public).
- **SEO e PWA:** Garantir que o manifesto e metadados estejam alinhados com `clientelp.shop`.

## Detalhes Técnicos
- O site do cliente consumirá dados do Cloudflare Worker (via polling de 10s conforme histórico no PDF) ou diretamente do Supabase Anon.
- Estrutura da tabela `app_config`:
  ```sql
  { "nome_empresa": "Leão Play", "whatsapp": "5591991618878", "logo": "...", "itens": [...] }
  ```
- O site deve exibir as categorias:
  - **Avisos:** Texto urgente.
  - **Mídias:** Imagens/Vídeos.
  - **Jogos:** Placares ou links de transmissão.
  - **Filmes:** Catálogo on-demand.

## Próximos Passos
1. Habilitar Lovable Cloud para acesso ao banco.
2. Criar a estrutura de tipos e hooks para consumir os dados do Supabase.
3. Implementar a interface de exibição de conteúdo (Feed).
4. Configurar OneSignal no `__root.tsx`.
