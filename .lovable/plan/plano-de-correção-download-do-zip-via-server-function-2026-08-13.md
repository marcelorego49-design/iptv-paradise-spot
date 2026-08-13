# Plano de Correção: Download do ZIP via Server Function

O usuário reportou "Page Not Found" ao tentar baixar via rota de API. Isso ocorre porque o TanStack Router/Start pode estar tentando renderizar uma página para a rota `/api/public/download-zip` em vez de executar o handler de servidor, ou o handler não está sendo registrado corretamente no ambiente de execução.

A estratégia agora é usar uma `Server Function` (RPC), que é o padrão recomendado no TanStack Start v1 para lógica de servidor, e retornar um link de download temporário ou o blob diretamente.

## Alterações

### Nova Server Function (`src/lib/download.functions.ts`)
- Criar uma Server Function chamada `getProjectZip`.
- Ela lerá o arquivo `public/project-essential.zip` do sistema de arquivos.
- Retornará o conteúdo do arquivo como uma string Base64 ou um objeto que o cliente possa converter em download.
- Dado que o arquivo tem ~750KB, converter para Base64 é viável e seguro para contornar problemas de roteamento.

### Componente de Interface (`src/components/site-layout.tsx`)
- Importar e chamar a Server Function ao clicar no botão.
- O cliente converterá o Base64 de volta em um Blob e disparará o download no navegador.

## Detalhes Técnicos
- Usar `fs.readFileSync` dentro da server function.
- Converter o buffer para Base64: `buffer.toString('base64')`.
- No lado do cliente (browser):
  ```typescript
  const data = await getProjectZip();
  const blob = new Blob([Buffer.from(data.base64, 'base64')], { type: 'application/zip' });
  const url = URL.createObjectURL(blob);
  // ... disparar download
  ```
- Remover a rota `src/routes/api/public/download-zip.tsx` que está causando conflito.
