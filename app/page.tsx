"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, DollarSign, Clock, Calendar, MessageSquare, Eye, XCircle, CheckCircle, Hourglass, ChevronRight, Search } from 'lucide-react'
import Image from "next/image"

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      jobTitle: "Desenvolvedor(a) Full Stack Sênior",
      company: "Tech Innovators",
      location: "São Paulo, SP",
      salary: "R$ 8.000 - R$ 12.000",
      status: "Em Análise",
      appliedDate: "2023-10-20",
      logo: "/abstract-tech-logo.png",
    },
    {
      id: 2,
      jobTitle: "Designer UX/UI Pleno",
      company: "Creative Studio",
      location: "Remoto",
      salary: "R$ 5.000 - R$ 7.000",
      status: "Entrevista Agendada",
      appliedDate: "2023-10-15",
      logo: "/design-studio-logo.png",
    },
    {
      id: 3,
      jobTitle: "Analista de Marketing Digital",
      company: "Growth Agency",
      location: "Belo Horizonte, MG",
      salary: "R$ 4.000 - R$ 6.000",
      status: "Rejeitada",
      appliedDate: "2023-10-01",
      logo: "/marketing-company-logo.png",
    },
    {
      id: 4,
      jobTitle: "Engenheiro(a) de Dados Júnior",
      company: "Data Insights Co.",
      location: "Rio de Janeiro, RJ",
      salary: "R$ 3.500 - R$ 5.000",
      status: "Candidatura Enviada",
      appliedDate: "2023-09-28",
      logo: "/data-company-logo.png",
    },
    {
      id: 5,
      jobTitle: "Gerente de Projetos de TI",
      company: "Innovate Solutions",
      location: "São Paulo, SP",
      salary: "R$ 10.000 - R$ 15.000",
      status: "Oferta Recebida",
      appliedDate: "2023-09-25",
      logo: "/innovation-company-logo.png",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Em Análise":
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100"><Hourglass className="h-3 w-3 mr-1" /> Em Análise</Badge>
      case "Entrevista Agendada":
        return <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100"><Calendar className="h-3 w-3 mr-1" /> Entrevista Agendada</Badge>
      case "Rejeitada":
        return <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-100"><XCircle className="h-3 w-3 mr-1" /> Rejeitada</Badge>
      case "Oferta Recebida":
        return <Badge variant="default" className="bg-purple-100 text-purple-800 hover:bg-purple-100"><CheckCircle className="h-3 w-3 mr-1" /> Oferta Recebida</Badge>
      case "Candidatura Enviada":
      default:
        return <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100"><CheckCircle className="h-3 w-3 mr-1" /> Enviada</Badge>
    }
  }

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

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-6xl mx-auto grid gap-6">
          <h1 className="text-3xl font-bold mb-4">Minhas Candidaturas</h1>

          <div className="grid gap-4">
            {applications.map((app) => (
              <Card key={app.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <Image src={app.logo || "/placeholder.svg"} alt={`${app.company} logo`} width={48} height={48} className="rounded-full" />
                  <div>
                    <h3 className="font-semibold text-lg">{app.jobTitle}</h3>
                    <p className="text-sm text-muted-foreground">{app.company}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" /> {app.location}
                      <DollarSign className="h-3 w-3" /> {app.salary}
                      <Clock className="h-3 w-3" /> Aplicado em: {app.appliedDate}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mt-4 md:mt-0">
                  {getStatusBadge(app.status)}
                  <Link href={`/applications/${app.id}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" /> Ver Detalhes
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" /> Mensagem
                  </Button>
                </div>
              </Card>
            ))}
            {applications.length === 0 && (
              <p className="text-muted-foreground text-center py-8">Você ainda não se candidatou a nenhuma vaga.</p>
            )}
          </div>
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
