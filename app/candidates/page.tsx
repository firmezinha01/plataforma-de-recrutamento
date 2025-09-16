"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, MapPin, Search, Filter, ChevronRight, SlidersHorizontal } from 'lucide-react'
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function CandidatesPage() {
  const candidates = [
    {
      id: 1,
      name: "João Silva",
      title: "Desenvolvedor Full Stack Sênior",
      location: "São Paulo, SP",
      experience: "5+ anos",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      avatar: "/diverse-user-avatars.png",
    },
    {
      id: 2,
      name: "Maria Oliveira",
      title: "Designer UX/UI Pleno",
      location: "Remoto",
      experience: "3-5 anos",
      skills: ["Figma", "Sketch", "User Research", "Design System"],
      avatar: "/placeholder-fkinj.png",
    },
    {
      id: 3,
      name: "Pedro Santos",
      title: "Analista de Marketing Digital",
      location: "Belo Horizonte, MG",
      experience: "1-3 anos",
      skills: ["SEO", "Google Ads", "Content Marketing", "Analytics"],
      avatar: "/diverse-user-avatars.png",
    },
    {
      id: 4,
      name: "Ana Costa",
      title: "Engenheiro(a) de Dados Júnior",
      location: "Rio de Janeiro, RJ",
      experience: "0-1 ano",
      skills: ["Python", "SQL", "ETL", "Big Data"],
      avatar: "/placeholder-fkinj.png",
    },
    {
      id: 5,
      name: "Carlos Pereira",
      title: "Gerente de Projetos de TI",
      location: "São Paulo, SP",
      experience: "5+ anos",
      skills: ["Agile", "Scrum", "PMP", "Liderança"],
      avatar: "/diverse-user-avatars.png",
    },
  ]

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
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Filters Sidebar */}
          <div className="hidden lg:block">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Filtros</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="location">Localização</Label>
                  <Input id="location" placeholder="Ex: São Paulo, Remoto" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="skills">Habilidades (separadas por vírgula)</Label>
                  <Input id="skills" placeholder="Ex: React, SQL" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="experience">Nível de Experiência</Label>
                  <Select>
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Júnior (0-1 ano)</SelectItem>
                      <SelectItem value="mid">Pleno (1-3 anos)</SelectItem>
                      <SelectItem value="senior">Sênior (3-5 anos)</SelectItem>
                      <SelectItem value="lead">Líder (5+ anos)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="job-title">Título de Vaga Desejado</Label>
                  <Input id="job-title" placeholder="Ex: Desenvolvedor Frontend" />
                </div>
                <Button className="w-full">Aplicar Filtros</Button>
                <Button variant="outline" className="w-full">Limpar Filtros</Button>
              </CardContent>
            </Card>
          </div>

          {/* Candidate Listings */}
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <h1 className="text-3xl font-bold">Buscar Candidatos</h1>
              <div className="flex w-full max-w-md items-center space-x-2">
                <Input type="search" placeholder="Buscar candidatos..." className="flex-1" />
                <Button type="submit">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Buscar</span>
                </Button>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="sr-only">Abrir Filtros</span>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {candidates.map((candidate) => (
                <Card key={candidate.id} className="flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={candidate.avatar || "/placeholder.svg"} alt={`${candidate.name} avatar`} />
                      <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{candidate.name}</CardTitle>
                      <CardDescription>{candidate.title}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" /> {candidate.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4" /> Experiência: {candidate.experience}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {candidate.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Link href={`/candidates/${candidate.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Ver Perfil <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
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
