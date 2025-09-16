"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Clock, MapPin, User, Video, MessageSquare, CheckCircle, XCircle, Hourglass, Plus, Eye } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function InterviewsPage() {
  const upcomingInterviews = [
    {
      id: 1,
      candidateName: "João Silva",
      jobTitle: "Desenvolvedor Full Stack Sênior",
      company: "Tech Innovators",
      date: "2024-08-10",
      time: "10:00 AM",
      platform: "Google Meet",
      status: "Agendada",
    },
    {
      id: 2,
      candidateName: "Maria Oliveira",
      jobTitle: "Designer UX/UI Pleno",
      company: "Creative Studio",
      date: "2024-08-12",
      time: "02:30 PM",
      platform: "Zoom",
      status: "Agendada",
    },
  ]

  const pastInterviews = [
    {
      id: 3,
      candidateName: "Pedro Santos",
      jobTitle: "Analista de Marketing Digital",
      company: "Growth Agency",
      date: "2024-08-05",
      time: "11:00 AM",
      platform: "Microsoft Teams",
      status: "Concluída",
    },
    {
      id: 4,
      candidateName: "Ana Costa",
      jobTitle: "Engenheiro de Dados Júnior",
      company: "Data Insights Co.",
      date: "2024-07-28",
      time: "03:00 PM",
      platform: "Google Meet",
      status: "Cancelada",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Agendada":
        return <Badge variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-100"><Hourglass className="h-3 w-3 mr-1" /> Agendada</Badge>
      case "Concluída":
        return <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="h-3 w-3 mr-1" /> Concluída</Badge>
      case "Cancelada":
        return <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-100"><XCircle className="h-3 w-3 mr-1" /> Cancelada</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
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
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Minhas Entrevistas</h1>
            <Link href="/schedule-interview">
              <Button>
                <Plus className="h-4 w-4 mr-2" /> Agendar Nova Entrevista
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="upcoming">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">Próximas</TabsTrigger>
              <TabsTrigger value="past">Anteriores</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <Card>
                <CardHeader>
                  <CardTitle>Próximas Entrevistas</CardTitle>
                  <CardDescription>
                    Visualize e gerencie suas entrevistas futuras.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {upcomingInterviews.length > 0 ? (
                    upcomingInterviews.map((interview) => (
                      <div key={interview.id} className="border rounded-lg p-4 grid gap-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">{interview.jobTitle}</h3>
                          {getStatusBadge(interview.status)}
                        </div>
                        <p className="text-muted-foreground">{interview.company}</p>
                        <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" /> Candidato: {interview.candidateName}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> Data: {interview.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" /> Hora: {interview.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4" /> Plataforma: {interview.platform}
                          </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex gap-2">
                          <Button variant="default" size="sm">
                            <Video className="h-4 w-4 mr-2" /> Entrar na Chamada
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" /> Enviar Mensagem
                          </Button>
                          <Button variant="ghost" size="sm">
                            <XCircle className="h-4 w-4 mr-2" /> Cancelar
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center py-4">Nenhuma entrevista agendada.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="past">
              <Card>
                <CardHeader>
                  <CardTitle>Entrevistas Anteriores</CardTitle>
                  <CardDescription>
                    Visualize o histórico de suas entrevistas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {pastInterviews.length > 0 ? (
                    pastInterviews.map((interview) => (
                      <div key={interview.id} className="border rounded-lg p-4 grid gap-2 opacity-75">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">{interview.jobTitle}</h3>
                          {getStatusBadge(interview.status)}
                        </div>
                        <p className="text-muted-foreground">{interview.company}</p>
                        <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" /> Candidato: {interview.candidateName}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> Data: {interview.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" /> Hora: {interview.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4" /> Plataforma: {interview.platform}
                          </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" /> Ver Detalhes
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" /> Ver Mensagens
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center py-4">Nenhuma entrevista anterior.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
