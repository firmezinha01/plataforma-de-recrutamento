"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Briefcase, Search, Mail, Phone } from 'lucide-react'

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
        <Link href="#" className="flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="sr-only">TalentHub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Central de Ajuda</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Encontre respostas para suas perguntas ou entre em contato com o suporte.
          </p>
          <div className="mx-auto w-full max-w-md flex gap-2 mt-8">
            <Input type="search" placeholder="Buscar artigos de ajuda..." className="flex-1" />
            <Button type="submit">
              <Search className="h-4 w-4" />
              <span className="sr-only">Buscar</span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como faço para criar uma conta?</AccordionTrigger>
              <AccordionContent>
                Você pode criar uma conta clicando no botão "Registrar" no canto superior direito da página. Escolha se deseja se cadastrar como candidato ou como empresa e siga as instruções.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como posso buscar vagas?</AccordionTrigger>
              <AccordionContent>
                Na página inicial ou na página "Vagas", você pode usar a barra de pesquisa para encontrar vagas por título, empresa ou localização. Você também pode usar os filtros para refinar sua busca.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como publico uma vaga para minha empresa?</AccordionTrigger>
              <AccordionContent>
                Primeiro, certifique-se de ter uma conta de empresa. Após fazer login, vá para o seu "Dashboard da Empresa" e clique em "Publicar Nova Vaga". Preencha todos os detalhes necessários e publique.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Posso editar meu perfil após o cadastro?</AccordionTrigger>
              <AccordionContent>
                Sim, você pode editar seu perfil a qualquer momento. Basta fazer login, ir para "Meu Perfil" (para candidatos) ou "Perfil da Empresa" (para empresas) e clicar no botão "Editar Perfil".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Como entro em contato com o suporte?</AccordionTrigger>
              <AccordionContent>
                Você pode entrar em contato com o suporte através da nossa página de "Contato", enviando um email ou ligando para o número fornecido.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Ainda Precisa de Ajuda?</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Nossa equipe de suporte está pronta para ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact">
              <Button className="px-8 py-3 text-lg">
                <Mail className="h-5 w-5 mr-2" /> Enviar um Email
              </Button>
            </Link>
            <Button variant="outline" className="px-8 py-3 text-lg">
              <Phone className="h-5 w-5 mr-2" /> Ligar para o Suporte
            </Button>
          </div>
        </div>
      </section>

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
