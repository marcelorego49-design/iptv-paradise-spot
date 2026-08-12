# Plano: Correção do Erro "Not Found" no Download

O usuário relatou que ao clicar no botão de download, uma nova guia abre com a mensagem "Not Found". Isso ocorre porque o link não está disparando o download corretamente ou a rota está sendo interceptada pelo roteador do lado do cliente.

## Causa Provável
O arquivo `public/project.zip` pode não estar sendo servido corretamente em tempo real no ambiente de desenvolvimento/preview, ou o atributo `download` não é suficiente para impedir que o navegador tente abrir o arquivo como uma página se ele não identificar o cabeçalho `Content-Type` corretamente.

## Alterações Propostas

### 1. Forçar o Download via JavaScript
Em vez de um link `<a>` direto com `href`, usaremos uma função que faz o `fetch` do arquivo, converte para Blob e dispara o download programaticamente. Isso garante que o navegador trate o arquivo como um download e não tente navegar para a URL.

### 2. Melhorar a Rota de API
Garantir que a rota de API em `src/routes/api/public/download-zip.tsx` tenha os cabeçalhos de download (`Content-Disposition: attachment`) configurados de forma mais agressiva para forçar o comportamento do navegador.

### 3. Atualizar o Componente de Layout
Modificar o ícone de download no `src/components/site-layout.tsx` para usar um botão que dispara a lógica de download robusta, evitando a navegação.

## Detalhes Técnicos
- Usar `window.URL.createObjectURL` para criar um link temporário após o fetch.
- Adicionar cabeçalhos de `Cache-Control: no-cache` para evitar versões corrompidas do ZIP.
- Manter o fallback para a rota de API caso o arquivo estático falhe.
