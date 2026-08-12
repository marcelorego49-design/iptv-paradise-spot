# Atualização da Lógica de Precificação Multitelas

Ajustar a calculadora de dispositivos simultâneos para seguir a progressão exata solicitada, garantindo escalabilidade para 6 ou mais telas.

## Detalhes Técnicos

### Lógica de Progressão
Baseado nos exemplos e na sequência fornecida:
- **1 tela**: R$ 25 (Base)
- **2 telas**: R$ 45 (Exemplo: R$ 45) -> Diferença: +R$ 20
- **3 telas**: R$ 65 (Exemplo: R$ 65) -> Diferença: +R$ 20
- **4 telas**: R$ 80 (Exemplo: R$ 80) -> Diferença: +R$ 15
- **5 telas**: R$ 95 (Exemplo: R$ 95) -> Diferença: +R$ 15
- **6+ telas**: Manter a progressão de **+R$ 15** por tela adicional.

### Alterações

1.  **`src/components/multi-device-config.tsx`**:
    - Aumentar o limite do Slider/Contador para 10 telas para permitir maior flexibilidade.
    - Implementar a função `calculatePrice(screens)` com a lógica progressiva.
    - Atualizar a exibição de economia (Diferença entre `screens * 25` e o preço calculado).

2.  **`src/routes/contato.tsx`**:
    - Atualizar o select de telas para incluir até 10 opções.
    - Integrar a nova função de cálculo para que a mensagem do WhatsApp reflita o valor exato.

3.  **`src/components/plans.tsx`**:
    - Garantir consistência com o plano base de R$ 25.
