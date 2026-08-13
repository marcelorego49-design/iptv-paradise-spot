import { createFileRoute } from '@tanstack/react-router';
import fs from 'fs';
import path from 'path';

export const Route = createFileRoute('/api/public/download-zip')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const filePath = path.resolve('public/project-essential.zip');
          
          if (!fs.existsSync(filePath)) {
            return new Response('Arquivo não encontrado', { status: 404 });
          }

          const fileBuffer = fs.readFileSync(filePath);

          return new Response(fileBuffer, {
            headers: {
              'Content-Type': 'application/zip',
              'Content-Disposition': 'attachment; filename="leao-play-essencial.zip"',
            },
          });
        } catch (error) {
          console.error('Erro no download:', error);
          return new Response('Erro interno do servidor', { status: 500 });
        }
      },
    },
  },
});
