"use client"

import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Filter, Building2, Users, Briefcase, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const companies = [
    {
      id: 1,
      name: "Tech Innovators",
      location: "São Paulo, SP",
      size: "201-500 funcionários",
      sector: "Tecnologia",
      logo: "/abstract-tech-logo.png",
      description: "Líder em soluções digitais para empresas globais.",
      openJobs: 5,
    },
    {
      id: 2,
      name: "Creative Studio",
      location: "Remoto",
      size: "51-200 funcionários",
      sector: "Design e Criatividade",
      logo: "/design-studio-logo.png",
      description: "Estúdio premiado focado em experiências visuais e UX.",
      openJobs: 2,
    },
    {
      id: 3,
      name: "Growth Agency",
      location: "Belo Horizonte, MG",
      size: "11-50 funcionários",
      sector: "Marketing Digital",
      logo: "/marketing-company-logo.png",
      description: "Agência especializada em performance e branding.",
      openJobs: 3,
    },
    {
      id: 4,
      name: "Data Insights Co.",
      location: "Rio de Janeiro, RJ",
      size: "101-250 funcionários",
      sector: "Ciência de Dados",
      logo: "/data-company-logo.png",
      description: "Transformamos dados em decisões estratégicas.",
      openJobs: 4,
    },
    {
      id: 5,
      name: "Innovate Solutions",
      location: "São Paulo, SP",
      size: "501-1000 funcionários",
      sector: "TI e Projetos",
      logo: "/innovation-company-logo.png",
      description: "Consultoria em inovação e transformação digital.",
      openJobs: 6,
    },
  ]

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.sector.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
        <Link href="/" className="flex items-center justify-center">
          <img src="/logo.png" alt="Logo da empresa" className="w-18 h-12 rounded" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/jobs" className="text-sm font-medium hover:underline underline-offset-4">Vagas</Link>
          <Link href="/companies" className="text-sm font-medium hover:underline underline-offset-4">Empresas</Link>
          <Link href="/help" className="text-sm font-medium hover:underline underline-offset-4">Ajuda</Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">Contato</Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">Login</Link>
          <Link href="/register" className="text-sm font-medium hover:underline underline-offset-4">Registrar</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-6xl mx-auto grid gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h1 className="text-3xl font-bold">Empresas Parceiras</h1>
            <div className="flex w-full max-w-md items-center space-x-2">
              <Input
                type="search"
                placeholder="Buscar por nome, setor ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredCompanies.map((company) => (
              <Card key={company.id} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`Logo da empresa ${company.name}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-xl">{company.name}</CardTitle>
                    <CardDescription>{company.sector}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <p className="text-sm text-muted-foreground">{company.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {company.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" /> {company.size}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4" /> {company.openJobs} vagas abertas
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href={`/companies/${company.id}`} className="w-full">
                    <Button variant="outline" className="w-full bg-transparent">
                      Ver Perfil <ChevronRight className="ml-2 h-4 w-4" />
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
