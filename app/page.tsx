import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Briefcase, Users, Building2, Search, ArrowRight } from 'lucide-react'
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">TalentHub</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/jobs" className="text-muted-foreground hover:text-foreground">
              Vagas
            </Link>
            <Link href="/companies" className="text-muted-foreground hover:text-foreground">
              Empresas
            </Link>
            <Link href="/help" className="text-muted-foreground hover:text-foreground">
              Ajuda
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Contato
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link href="/register">
              <Button>Cadastrar</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost">Menu</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Encontre o emprego dos seus sonhos ou o talento ideal
            </h1>
            <p className="text-lg md:text-xl">
              A plataforma líder para conectar profissionais qualificados a empresas inovadoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/search-jobs">
                <Button variant="secondary" className="h-12 px-8 text-lg">
                  Buscar Vagas <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/post-job">
                <Button variant="outline" className="h-12 px-8 text-lg border-primary-foreground text-primary-foreground hover:bg-primary/90">
                  Publicar Vaga <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Como funciona</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nosso processo é simples e eficiente para candidatos e empresas.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col items-center p-6 text-center">
              <Search className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="mb-2">Buscar</CardTitle>
              <CardDescription>
                Candidatos exploram vagas, empresas buscam talentos.
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center">
              <Users className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="mb-2">Conectar</CardTitle>
              <CardDescription>
                Candidatos se candidatam, empresas encontram perfis ideais.
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center">
              <Building2 className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="mb-2">Contratar</CardTitle>
              <CardDescription>
                Empresas contratam os melhores talentos, candidatos iniciam novas carreiras.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que dizem sobre nós</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Histórias de sucesso de nossos usuários.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 lg:grid-cols-2">
            <Card className="p-6">
              <CardContent className="text-lg italic">
                "Encontrei o emprego dos meus sonhos em apenas duas semanas! A TalentHub é incrível."
              </CardContent>
              <CardFooter className="mt-4 text-right font-semibold">
                - Maria Silva, Desenvolvedora
              </CardFooter>
            </Card>
            <Card className="p-6">
              <CardContent className="text-lg italic">
                "Conseguimos preencher várias vagas difíceis rapidamente com a TalentHub. Recomendo!"
              </CardContent>
              <CardFooter className="mt-4 text-right font-semibold">
                - João Santos, RH Manager
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pronto para começar?
            </h2>
            <p className="text-lg md:text-xl">
              Junte-se à nossa comunidade e dê o próximo passo em sua carreira ou contratação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button variant="secondary" className="h-12 px-8 text-lg">
                  Cadastre-se Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="h-12 px-8 text-lg border-primary-foreground text-primary-foreground hover:bg-primary/90">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8">
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
