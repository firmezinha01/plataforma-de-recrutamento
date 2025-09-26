"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Briefcase, MapPin, DollarSign, Clock, Filter, Search, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Desenvolvedor(a) Full Stack Sênior",
      company: "Tech Innovators",
      location: "São Paulo, SP",
      salary: "R$ 8.000 - R$ 12.000",
      type: "Tempo Integral",
      posted: "2 dias atrás",
      logo: "/abstract-tech-logo.png",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      id: 2,
      title: "Designer UX/UI Pleno",
      company: "Creative Studio",
      location: "Remoto",
      salary: "R$ 5.000 - R$ 7.000",
      type: "Tempo Integral",
      posted: "5 dias atrás",
      logo: "/design-studio-logo.png",
      skills: ["Figma", "Sketch", "User Research"],
    },
    {
      id: 3,
      title: "Analista de Marketing Digital",
      company: "Growth Agency",
      location: "Belo Horizonte, MG",
      salary: "R$ 4.000 - R$ 6.000",
      type: "Tempo Integral",
      posted: "1 semana atrás",
      logo: "/marketing-company-logo.png",
      skills: ["SEO", "Google Ads", "Content Marketing"],
    },
    {
      id: 4,
      title: "Engenheiro(a) de Dados Júnior",
      company: "Data Insights Co.",
      location: "Rio de Janeiro, RJ",
      salary: "R$ 3.500 - R$ 5.000",
      type: "Tempo Integral",
      posted: "3 dias atrás",
      logo: "/data-company-logo.png",
      skills: ["Python", "SQL", "ETL"],
    },
    {
      id: 5,
      title: "Gerente de Projetos de TI",
      company: "Innovate Solutions",
      location: "São Paulo, SP",
      salary: "R$ 10.000 - R$ 15.000",
      type: "Tempo Integral",
      posted: "Ontem",
      logo: "/innovation-company-logo.png",
      skills: ["Agile", "Scrum", "PMP"],
    },
  ]

//   const [searchTerm, setSearchTerm] = useState("")

// const filteredJobs = jobs.filter(job =>
//   job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   job.company.toLowerCase().includes(searchTerm.toLowerCase())
// )
const [searchTerm, setSearchTerm] = useState("")

const filteredJobs = jobs.filter(job =>
  job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
)


  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
        <Link href="#" className="flex items-center justify-center">
          {/* <Briefcase className="h-6 w-6 text-primary" /> */}
            <img src="/logo.png" alt="Logo da empresa" className="w-18 h-12 rounded"/>

          <span className="sr-only">gowid HR Tech</span>
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h1 className="text-3xl font-bold">Vagas de Emprego</h1>
            <div className="flex w-full max-w-md items-center space-x-2">
              {/* <Input type="search" placeholder="Buscar vagas..." className="flex-1" /> */}
              {/* <Input type="search" placeholder="Buscar vagas..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="flex-1"/> */}
              <Input type="search" placeholder="Buscar por título, empresa, localização ou habilidade..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="flex-1"/>
              <Button type="submit">
                <Search className="h-4 w-4" />
                <span className="sr-only">Buscar</span>
              </Button>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filtrar</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Image
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" /> {job.salary}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" /> {job.type} - Publicado {job.posted}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href={`/jobs/${job.id}`} className="w-full">
                    <Button variant="outline" className="w-full bg-transparent">
                      Ver Detalhes <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8 mt-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">gowid HR Tech</h3>
            <p className="text-sm text-muted-foreground">Conectando talentos às oportunidades certas.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Candidatos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-sm text-muted-foreground hover:text-foreground">
                  Buscar Vagas
                </Link>
              </li>
              <li>
                <Link href="/my-profile" className="text-sm text-muted-foreground hover:text-foreground">
                  Meu Perfil
                </Link>
              </li>
              <li>
                <Link href="/applications" className="text-sm text-muted-foreground hover:text-foreground">
                  Minhas Candidaturas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Empresas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/post-job" className="text-sm text-muted-foreground hover:text-foreground">
                  Publicar Vaga
                </Link>
              </li>
              <li>
                <Link href="/candidates" className="text-sm text-muted-foreground hover:text-foreground">
                  Buscar Candidatos
                </Link>
              </li>
              <li>
                <Link href="/dashboard/company" className="text-sm text-muted-foreground hover:text-foreground">
                  Dashboard Empresa
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
                  Ajuda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
              </li>
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
