"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, Users, ClipboardList, Calendar, DollarSign, MapPin, Clock, CheckCircle, XCircle, Hourglass, MessageSquare, Eye, Menu, X, Plus, ArrowRight, TrendingUp, BarChart, Star, FileText, Mail, Phone, Linkedin, Github, Globe, Edit, Trash2, Search } from 'lucide-react'
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function CandidateDashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const candidateStats = {
    applicationsSent: 15,
    interviewsScheduled: 3,
    offersReceived: 1,
    savedJobs: 5,
  }

  const recentApplications = [
    {
      id: 1,
      jobTitle: "Desenvolvedor(a) Full Stack Sênior",
      company: "Tech Innovators",
      status: "Em Análise",
      date: "2024-07-20",
      logo: "/abstract-tech-logo.png",
    },
    {
      id: 2,
      jobTitle: "Designer UX/UI Pleno",
      company: "Creative Studio",
      status: "Entrevista Agendada",
      date: "2024-07-18",
      logo: "/design-studio-logo.png",
    },
    {
      id: 3,
      jobTitle: "Analista de Marketing Digital",
      company: "Growth Agency",
      status: "Rejeitada",
      date: "2024-07-19",
      logo: "/marketing-company-logo.png",
    },
    {
      id: 4,
      jobTitle: "Engenheiro(a) de Dados Júnior",
      company: "Data Insights Co.",
      status: "Candidatura Enviada",
      date: "2024-07-17",
      logo: "/data-company-logo.png",
    },
  ]

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Em Análise":
        return "secondary"
      case "Entrevista Agendada":
        return "default"
      case "Rejeitada":
        return "destructive"
      case "Oferta Recebida":
        return "default"
      case "Candidatura Enviada":
      default:
        return "outline"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Briefcase className="h-6 w-6 text-primary" /> */}
            <img src="/logo.png" alt="Logo da empresa" className="w-18 h-12 rounded"/>

            <span className="text-xl font-bold">gowid HR Tech</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard/candidate" className="text-foreground font-medium">
              Dashboard
            </Link>
            <Link href="/jobs" className="text-muted-foreground hover:text-foreground">
              Buscar Vagas
            </Link>
            <Link href="/applications" className="text-muted-foreground hover:text-foreground">
              Minhas Candidaturas
            </Link>
            <Link href="/interviews" className="text-muted-foreground hover:text-foreground">
              Entrevistas
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/diverse-user-avatars.png" alt="Candidate Avatar" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">João Silva</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      joao.silva@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/my-profile" className="w-full">Meu Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle mobile menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/dashboard/candidate" className="block px-3 py-2 text-foreground hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard
              </Link>
              <Link href="/jobs" className="block px-3 py-2 text-foreground hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                Buscar Vagas
              </Link>
              <Link href="/applications" className="block px-3 py-2 text-foreground hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                Minhas Candidaturas
              </Link>
              <Link href="/interviews" className="block px-3 py-2 text-foreground hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                Entrevistas
              </Link>
              <Link href="/login">
                <Button variant="ghost" className="w-full justify-start">Sair</Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard do Candidato</h1>

        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Candidaturas Enviadas</CardTitle>
              <ClipboardList className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{candidateStats.applicationsSent}</div>
              <p className="text-xs text-muted-foreground">
                Total de candidaturas
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Entrevistas Agendadas</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{candidateStats.interviewsScheduled}</div>
              <p className="text-xs text-muted-foreground">
                Próximas entrevistas
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ofertas Recebidas</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{candidateStats.offersReceived}</div>
              <p className="text-xs text-muted-foreground">
                Ofertas de emprego
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vagas Salvas</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{candidateStats.savedJobs}</div>
              <p className="text-xs text-muted-foreground">
                Vagas para revisar depois
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Applications Section */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Candidaturas Recentes</CardTitle>
            <Link href="/applications">
              <Button variant="outline">Ver Todas</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center gap-4 p-4 border rounded-md">
                  <Image src={app.logo || "/placeholder.svg"} alt={`${app.company} logo`} width={48} height={48} className="rounded-full" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">{app.jobTitle}</p>
                    <p className="text-sm text-muted-foreground">{app.company}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <Badge variant={getStatusVariant(app.status)}>{app.status}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Section */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Acesse rapidamente as principais funcionalidades.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/jobs">
              <Button className="w-full h-24 flex flex-col items-center justify-center text-lg">
                <Search className="h-6 w-6 mb-2" />
                Buscar Vagas
              </Button>
            </Link>
            <Link href="/my-profile">
              <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center text-lg">
                <FileText className="h-6 w-6 mb-2" />
                Editar Perfil
              </Button>
            </Link>
            <Link href="/interviews">
              <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center text-lg">
                <Calendar className="h-6 w-6 mb-2" />
                Ver Entrevistas
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8 mt-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">gowid HR Tech</h3>
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
          © {new Date().getFullYear()} gowid HR Tech. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
