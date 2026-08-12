# Plano: Correção do Erro "Not Found" no Download

O usuário relatou que ao clicar no botão de download, uma nova guia abre com a mensagem "Not Found". Isso geralmente ocorre quando o TanStack Router tenta interceptar um link que aponta para um recurso externo ou estático, ou quando o recurso realmente não está acessível no ambiente de execução (especialmente em ambientes de Edge/Serverless).

## Causa Provável
1.  **Intercepção do Router**: O TanStack Router pode estar tentando tratar `/project.zip` ou `/api/public/download-zip` como uma rota do lado do cliente, resultando em 404 se não houver uma rota correspondente definida no `routeTree`.
2.  **Ambiente de Preview**: No ambiente de preview do Lovable, rotas de API (`src/routes/api/...`) às vezes precisam de configurações específicas para serem servidas corretamente.

## Alterações Propostas

### 1. Garantir que o Link seja Tratado como Externo
No componente `SiteLayout`, vamos garantir que o link de download use `target="_self"` (ou apenas evite o comportamento de SPA) e, mais importante, usaremos um link `<a>` padrão com o atributo `download` de forma que o Router não tente capturar o clique. 
*Nota: Já estamos usando `<a>`, mas vamos adicionar `rel="external"` ou garantir que o atributo `download` seja suficiente.*

### 2. Mover o ZIP para um local garantido
O arquivo `public/project.zip` é a melhor aposta para servir arquivos grandes em ambientes estáticos. Vou verificar se ele foi incluído corretamente no bundle.

### 3. Criar uma Rota de Fallback no Router (se necessário)
Se o problema persistir, podemos criar uma rota TanStack Router para `/download` que redireciona via `window.location.href` para forçar o navegador a sair do contexto do app React.

## Passos de Execução
1.  Verificar os logs de console do navegador para ver se o erro "Not Found" é do TanStack Router ou do servidor.
2.  Atualizar o link no `src/components/site-layout.tsx` para garantir que o download seja forçado.
3.  Validar se o arquivo `public/project.zip` está realmente sendo servido corretamente testando a URL direta.
