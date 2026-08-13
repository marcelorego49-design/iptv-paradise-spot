# Plano de Correção: Download Automático do ZIP

O usuário reportou que, ao clicar no botão de download, uma nova aba abre com a mensagem "Not Found". O objetivo é garantir que o download ocorra de forma automática e direta, sem abrir abas vazias ou falhar.

## Alterações

### Componentes de Interface
- **Botão de Download no Rodapé (`src/components/site-layout.tsx`)**
    - Substituir o link `<a>` tradicional por um botão que dispara uma função JavaScript.
    - A função usará `fetch` para buscar o arquivo como um `Blob` e criar um link temporário com `URL.createObjectURL` para disparar o download. Isso ignora completamente qualquer interceptação do roteador e garante que o navegador trate o arquivo como um download, não como uma navegação.

### Processo de Empacotamento
- **Atualização dos Arquivos ZIP**
    - Rodar o comando de geração do ZIP para garantir que o arquivo `public/project-essential.zip` exista e esteja atualizado.

## Detalhes Técnicos
- O problema "Not Found" geralmente ocorre porque o `tanstack-router` tenta processar o link `/project-essential.zip` como uma rota interna em vez de permitir que o navegador trate-o como um arquivo estático.
- Ao usar `fetch` + `Blob`, forçamos o download programaticamente.
- O código da função de download será:
```typescript
const handleDownload = async (e: React.MouseEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('/project-essential.zip');
    if (!response.ok) throw new Error('Falha ao baixar');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leao-play-essencial.zip';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (err) {
    console.error(err);
    window.location.href = '/project-essential.zip'; // Fallback
  }
};
```
