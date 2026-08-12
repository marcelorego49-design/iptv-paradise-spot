# Plano de Implementação: Configuração de Múltiplos Dispositivos com Desconto

Adaptar o sistema de precificação para permitir a negociação e configuração de múltiplas telas/dispositivos, aplicando um desconto progressivo para cada tela adicional.

## Alterações de Interface (UI/UX)

- **Calculadora de Telas na Página de Planos**: Adicionar um seletor interativo (Slider ou botões +/-) na seção de planos para que o usuário possa simular o valor total com telas extras.
- **Destaque do Desconto**: Mostrar visualmente quanto o usuário economiza ao adicionar mais telas.
- **Atualização do Formulário de Contato**: Incluir o número de telas selecionado na mensagem automática do WhatsApp, facilitando a negociação.

## Detalhes Técnicos

- **Lógica de Precificação**:
  - Plano Base: Valor padrão do plano selecionado (Mensal R$ 25, Trimestral R$ 75, Anual R$ 200).
  - Preço da Tela Extra: R$ 15,00 (valor base sem desconto).
  - Regra de Desconto Negociável: Implementar um redutor configurável (ex: R$ 10,00 por tela extra em vez de R$ 15,00 a partir da 3ª tela).
- **Componentes**:
  - Criar `src/components/multi-device-config.tsx` para gerenciar o estado da quantidade de telas e o cálculo dinâmico.
  - Integrar esse componente em `src/routes/planos.tsx` e `src/routes/index.tsx`.
- **Mensageria**: Atualizar o `WHATSAPP_URL` dinamicamente conforme a seleção de telas.

## Usuário não técnico
O site agora terá um controle onde você pode escolher quantas TVs ou celulares quer usar ao mesmo tempo. Ao aumentar o número de telas, o sistema calcula automaticamente um desconto especial, e quando você clicar em assinar, o vendedor já receberá a informação exata de quantas telas você deseja e o valor negociado.