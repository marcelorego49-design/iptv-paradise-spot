# Plano: Solução Eficaz para Download do Projeto ZIP

O usuário relatou dificuldades para baixar o arquivo ZIP do projeto. Embora uma rota de API tenha sido criada anteriormente, ela pode falhar em ambientes de visualização (preview) ou ser bloqueada por políticas de segurança. Vou implementar uma solução dupla: disponibilizar o arquivo na pasta pública para acesso direto via servidor estático e manter a rota de API como fallback.

## Alterações Propostas

### Backend / Infraestrutura
- Mover (ou copiar) o arquivo `project.zip` para a pasta `public/project.zip`.
- Isso permite o acesso via `https://dominio.com/project.zip` diretamente, sem passar por funções de servidor que podem ter limites de execução ou memória em hosts gratuitos.

### Interface do Usuário
- **Componente SiteLayout**: Atualizar o link no rodapé para apontar para o caminho estático `/project.zip`.
- **Página de Instruções**: Atualizar `INSTRUCOES_DOWNLOAD.md` para destacar o link direto.

### Estabilização
- Garantir que o processo de "empacotamento" (zip) seja executado corretamente e inclua os arquivos mais recentes.

## Detalhes Técnicos
- O arquivo na pasta `public` é servido como um ativo estático pelo Vite/Nitro, o que é muito mais robusto do que ler o arquivo do disco via `fs` em uma rota de API durante o tempo de execução (especialmente em Cloudflare Workers/Edge onde o sistema de arquivos é virtual ou limitado).
- O link de download será atualizado para garantir o download imediato usando o atributo `download`.
