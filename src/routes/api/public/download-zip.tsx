import { createFileRoute } from '@tanstack/react-router'
import { readFileSync } from 'fs'
import { join } from 'path'

export const Route = createFileRoute('/api/public/download-zip')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const filePath = join(process.cwd(), 'project.zip')
          const fileBuffer = readFileSync(filePath)

          return new Response(fileBuffer, {
            status: 200,
            headers: {
              'Content-Type': 'application/zip',
              'Content-Disposition': 'attachment; filename="leao-play-projeto.zip"',
            },
          })
        } catch (error) {
          console.error('Erro ao baixar ZIP:', error)
          return new Response('Arquivo não encontrado ou erro no servidor', { status: 404 })
        }
      }
    }
  }
})
