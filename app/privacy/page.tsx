import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, Menu, X } from 'lucide-react'
import { useState } from "react"

export default function PrivacyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
        <Link href="#" className="flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="sr-only">TalentHub</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link href="/jobs" className="text-sm font-medium hover:underline underline-offset-4">
            Vagas
          </Link>
          <Link href="/companies" className="text-sm font-medium hover:underline underline-offset-4">
            Empresas
          </Link>
          <Link href="/help" className="text-sm font-medium hover:underline underline-offset-4">
            Ajuda
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contato
          </Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
            Login
          </Link>
          <Link href="/register" className="text-sm font-medium hover:underline underline-offset-4">
            Registrar
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/jobs" className="block px-3 py-2 text-foreground hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Vagas
            </Link>
            <Link href="/companies" className="block px-3 py-2 text-foreground hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Empresas
            </Link>
            <Link href="/help" className="block px-3 py-2 text-foreground hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Ajuda
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-foreground hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Contato
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="w-full justify-start">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="w-full justify-start">Registrar</Button>
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bem-vindo(a) à TalentHub. Valorizamos a sua privacidade e estamos comprometidos em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos e compartilhamos suas informações quando você utiliza nossa plataforma de recrutamento e seleção.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Informações que Coletamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong>Informações Fornecidas por Você:</strong> Inclui dados de cadastro (nome, email, senha, tipo de conta), informações de perfil (currículo, histórico profissional, habilidades, educação para candidatos; nome da empresa, descrição, setor para empresas), e comunicações (mensagens trocadas na plataforma, suporte ao cliente).
              </li>
              <li>
                <strong>Informações Coletadas Automaticamente:</strong> Dados de uso (páginas visitadas, tempo de sessão), informações do dispositivo (tipo de dispositivo, sistema operacional, navegador), endereço IP, e dados de cookies e tecnologias de rastreamento.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Como Usamos Suas Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos suas informações para as seguintes finalidades:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Para fornecer e manter nossos serviços, incluindo o processamento de candidaturas e a publicação de vagas.</li>
              <li>Para personalizar sua experiência na plataforma, mostrando vagas ou candidatos relevantes.</li>
              <li>Para comunicação, incluindo notificações sobre candidaturas, entrevistas e atualizações da plataforma.</li>
              <li>Para melhorar e desenvolver novos recursos e serviços.</li>
              <li>Para garantir a segurança da plataforma e prevenir fraudes.</li>
              <li>Para cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong>Com Outros Usuários da Plataforma:</strong> Candidatos compartilham seus perfis com empresas para candidaturas; empresas compartilham detalhes de vagas com candidatos.
              </li>
              <li>
                <strong>Provedores de Serviço:</strong> Terceiros que nos ajudam a operar a plataforma (hospedagem, análise de dados, processamento de pagamentos).
              </li>
              <li>
                <strong>Para Fins Legais:</strong> Se exigido por lei ou para proteger nossos direitos, propriedade ou segurança.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você tem direitos sobre suas informações pessoais, incluindo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Acessar e obter uma cópia de suas informações.</li>
              <li>Corrigir informações imprecisas ou incompletas.</li>
              <li>Solicitar a exclusão de suas informações.</li>
              <li>Opor-se ao processamento de suas informações.</li>
              <li>Retirar o consentimento a qualquer momento.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para exercer esses direitos, entre em contato conosco através dos canais indicados em nossa página de Contato.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Segurança dos Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhuma transmissão de dados pela internet é 100% segura.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Alterações a Esta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas publicando a nova política em nossa plataforma. Recomendamos que você revise esta política regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Email: suporte@talenthub.com
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8 mt-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TalentHub</h3>
            <p className="text-sm text-muted-foreground">
              Conectando talentos às oportunidades certas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Candidatos</h3>
            <ul className="space-y-2">
              <li><Link href="/jobs" className="text-sm text-muted-foreground hover:text-foreground">Buscar Vagas</Link></li>
              <li><Link href="/my-profile" className="text-sm text-muted-foreground hover:text-foreground">Meu Perfil</Link></li>
              <li><Link href="/applications" className="text-sm text-muted-foreground hover:text-foreground">Minhas Candidaturas</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Empresas</h3>
            <ul className="space-y-2">
              <li><Link href="/post-job" className="text-sm text-muted-foreground hover:text-foreground">Publicar Vaga</Link></li>
              <li><Link href="/candidates" className="text-sm text-muted-foreground hover:text-foreground">Buscar Candidatos</Link></li>
              <li><Link href="/dashboard/company" className="text-sm text-muted-foreground hover:text-foreground">Dashboard Empresa</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Política de Privacidade</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Termos de Serviço</Link></li>
              <li><Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">Ajuda</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contato</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground mt-8 border-t pt-8">
          © {new Date().getFullYear()} TalentHub. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
