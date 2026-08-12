# Projeto Leão Play — Download e Implantação

Este projeto está configurado para facilitar o download e a implantação em servidores de alta confiabilidade.

## 📦 Como baixar o código completo (ZIP)

Para baixar todos os arquivos do projeto de forma confiável, você pode usar a rota de download dedicada que criamos:

1. **Acesse a URL de Download:**
   - No ambiente de produção: `https://seu-dominio.com/api/public/download-zip`
   - No ambiente de preview do Lovable: Adicione `/api/public/download-zip` ao final da URL do navegador.

Este método contorna limites de interface e garante que você receba o arquivo `project.zip` completo, contendo toda a estrutura necessária para rodar localmente ou subir para Cloudflare/Vercel.

## 🚀 Guia de Implantação (Deployment)

Para evitar os limites de "hospedagens gratuitas" tradicionais, recomendamos o uso de **Cloudflare Pages** ou **Vercel**, que oferecem camadas gratuitas extremamente robustas e rápidas.

### 1. Cloudflare Pages (Recomendado)
- **Comando de Build:** `npm run build`
- **Diretório de Saída:** `.output/public`
- **Variável de Ambiente:** `NITRO_PRESET=cloudflare-pages`

### 2. Vercel
- **Comando de Build:** `npm run build`
- **Diretório de Saída:** `.output/public`
- **Variável de Ambiente:** `NITRO_PRESET=vercel`

## 💻 Rodando no seu Notebook
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Extraia o conteúdo do `project.zip`.
3. No terminal, dentro da pasta do projeto, execute:
   ```bash
   npm install
   npm run dev
   ```
4. O site estará disponível em `http://localhost:8080`.
