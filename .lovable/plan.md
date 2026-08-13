# Plano de Correção: Download do ZIP via Rota de API

O usuário informou que o download ainda não funciona (provavelmente devido a restrições de segurança do navegador ou interceptação do roteador em arquivos estáticos). Vamos mudar a estratégia para usar uma rota de API dedicada que serve o arquivo com os cabeçalhos de download corretos.

## Alterações

### Rota de API (`src/routes/api/public/download.ts`)
- Criar uma rota de API que lê o arquivo `public/project-essential.zip` do sistema de arquivos e o retorna como uma resposta de stream com o cabeçalho `Content-Disposition: attachment`.
- Isso garante que o navegador identifique a resposta como um arquivo para baixar, ignorando o roteamento do lado do cliente.

### Componente de Interface (`src/components/site-layout.tsx`)
- Atualizar o botão de download para simplesmente abrir `window.location.href = '/api/public/download'`.
- Como a rota de API retorna um `attachment`, o navegador iniciará o download sem sair da página atual.

## Detalhes Técnicos
- Usar `fs.readFileSync` ou stream para ler o arquivo no servidor.
- Definir `Content-Type: application/zip`.
- Definir `Content-Disposition: attachment; filename="leao-play-essencial.zip"`.
