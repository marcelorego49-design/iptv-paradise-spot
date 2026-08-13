# Projeto Leão Play — Download e Implantação

Este projeto está configurado para facilitar o download e a implantação em servidores de alta confiabilidade.

## 📦 Como baixar o código completo (ZIP)

Para garantir que você consiga baixar o projeto sem erros de servidor ou limites de rede, disponibilizamos dois métodos:

### Método 1: Download Direto (Versão Essencial)
Acesse diretamente o arquivo estático com apenas o necessário para o build:
- **URL:** `https://seu-dominio.com/project-essential.zip`
- Este arquivo contém apenas `src`, `public` e as configurações básicas para subir no Vercel/Cloudflare.

### Método 2: Rota de API (Fallback)
Se o download direto falhar, tente a rota de API dedicada:
- **URL:** `https://seu-dominio.com/api/public/download-zip`

---

## 🚀 Guia de Implantação (Deployment)

Recomendamos o uso de **Cloudflare Pages** ou **Vercel** para hospedar este projeto. Eles são gratuitos, rápidos e suportam perfeitamente o TanStack Start.

### 1. Cloudflare Pages
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
