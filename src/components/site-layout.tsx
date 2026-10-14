import { Link } from "@tanstack/react-router";
import { MessageCircle, Loader2 } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { getProjectZip } from "@/lib/download.functions";
import { toast } from "sonner";
// O logotipo foi movido para public/logo.jpg para garantir compatibilidade com Cloudflare/Vercel
const LOGO_URL = "/logo.jpg";

export const WHATSAPP_BASE_URL = "https://wa.me/5591991618878";
export const WHATSAPP_URL = `${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Quero%20testar%20o%20Le%C3%A3o%20Play.`;

const navItems = [
  { to: "/", label: "Início" },
  { to: "/planos", label: "Planos" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const data = await getProjectZip();
      
      // Converte Base64 de volta para Blob no cliente
      const byteCharacters = atob(data.base64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: data.contentType });
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = data.filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast.success("Download iniciado com sucesso!");
    } catch (error) {
      console.error("Erro no download:", error);
      toast.error("Erro ao processar o download. Tente novamente.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 glass-panel border-x-0 border-t-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <img 
              src={LOGO_URL} 

              alt="Leão Play Logo" 
              className="size-10 rounded-lg object-contain"
            />
            Leão Play
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground font-semibold" }}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm" className="bg-brand-gradient text-primary-foreground shadow-glow">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" /> Teste grátis
            </a>
          </Button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={LOGO_URL} 
              alt="Leão Play Logo" 
              className="size-8 rounded-md object-contain opacity-80"
            />
            <p className="font-display text-base font-semibold text-foreground">Leão Play</p>
          </div>
          <nav className="flex gap-5">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
          <p>© {new Date().getFullYear()} Leão Play. Todos os direitos reservados:</p>
          <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer border-none bg-transparent p-0 disabled:opacity-50"
            title="Download direto do código fonte (ZIP)"
          >
            {isDownloading ? (
              <Loader2 className="size-3 animate-spin" />
            ) : (
              <span className="text-xs">Baixar Código Fonte (ZIP)</span>
            )}
            <span className="text-base">📦</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
