# Plano de Correção: Download do Projeto (Not Found)

O problema de "Not Found" ao tentar baixar o arquivo ZIP ocorre porque o TanStack Router tenta interceptar a navegação para `/project-essential.zip` como se fosse uma rota interna da aplicação. Para resolver isso de forma definitiva, vamos forçar o navegador a tratar o link como um download externo, ignorando o roteamento do React.

## Mudanças propostas

### Componentes

#### `src/components/site-layout.tsx`
- Adicionar um atributo `target="_self"` e garantir que o atributo `download` esteja presente.
- Se o problema persistir, implementar uma função de download via JavaScript (`window.location.assign`) para garantir que o navegador dispare o download direto sem passar pelo roteador.

### Backend / API

#### `src/routes/api/public/download-zip.tsx` (Opcional/Limpeza)
- Manter o arquivo mas garantir que ele aponte para o arquivo correto se for usado, embora a solução estática seja preferível para performance e simplicidade em Vercel/Cloudflare.

## Passos de verificação
1. Clicar no ícone 📦 no rodapé.
2. Confirmar que o download do arquivo `leao-play-essencial.zip` inicia automaticamente sem abrir uma página de "Not Found".
3. Verificar se o arquivo baixado contém as pastas `src`, `public` e os arquivos de configuração essenciais.
