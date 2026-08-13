# Plano: Tornar o Botão de Download Visível

O botão de download do projeto (arquivo ZIP) está atualmente muito discreto no rodapé (apenas um emoji de caixa com 20% de opacidade). Vamos torná-lo visível e claro para que o usuário possa encontrá-lo facilmente.

## Mudanças propostas

### UI / Componentes

#### `src/components/site-layout.tsx`
- Alterar o link de download no rodapé para ser um botão ou um link com texto claro: "Baixar Código Fonte (ZIP)".
- Aumentar a opacidade e o tamanho para que seja legível.
- Manter a lógica de prevenção de interceptação do roteador para evitar o erro "Not Found".

## Passos de verificação
1. Abrir a visualização do site.
2. Rolar até o rodapé.
3. Confirmar que existe um link claro escrito "Baixar Código Fonte (ZIP)".
4. Clicar e verificar se o download do `leao-play-essencial.zip` inicia.
