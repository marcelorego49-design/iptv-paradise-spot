# Plano de Alteração de Nome da Empresa

O usuário deseja alterar o nome da empresa de **FlowTV** para **Leão Play** em todo o site.

## Alterações Sugeridas

### 1. Atualizar o Layout Principal
No arquivo `src/components/site-layout.tsx`:
- Mudar o nome no cabeçalho.
- Mudar o nome no rodapé.
- Atualizar a URL do WhatsApp para refletir o novo nome na mensagem pré-definida.

### 2. Atualizar Metadados e SEO
Nos arquivos de rota (`src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/planos.tsx`, `src/routes/contato.tsx`):
- Atualizar títulos das páginas (`head()` e constantes).
- Atualizar descrições de SEO.

### 3. Conteúdo das Páginas
Revisar e substituir ocorrências de "FlowTV" por "Leão Play" nos arquivos:
- `src/routes/index.tsx`
- `src/routes/planos.tsx`
- `src/routes/contato.tsx`

## Detalhes Técnicos
As substituições serão feitas via `code--line_replace` para garantir precisão, mantendo a estrutura dos componentes e a lógica de roteamento do TanStack Start.
