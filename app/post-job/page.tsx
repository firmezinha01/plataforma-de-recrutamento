"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Briefcase } from 'lucide-react'

export default function PostJobPage() {
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
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Publicar Nova Vaga</CardTitle>
            <CardDescription>
              Preencha os detalhes da vaga para atrair os melhores talentos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="job-title">Título da Vaga</Label>
                <Input id="job-title" placeholder="Ex: Desenvolvedor Full Stack Sênior" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-name">Nome da Empresa</Label>
                <Input id="company-name" placeholder="Ex: Tech Innovators" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Localização</Label>
                <Input id="location" placeholder="Ex: São Paulo, SP ou Remoto" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="salary-min">Salário Mínimo (Opcional)</Label>
                  <Input id="salary-min" type="number" placeholder="R$ 3.000" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="salary-max">Salário Máximo (Opcional)</Label>
                  <Input id="salary-max" type="number" placeholder="R$ 6.000" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="job-type">Tipo de Vaga</Label>
                  <Select required>
                    <SelectTrigger id="job-type">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Tempo Integral</SelectItem>
                      <SelectItem value="part-time">Meio Período</SelectItem>
                      <SelectItem value="internship">Estágio</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="experience-level">Nível de Experiência</Label>
                  <Select required>
                    <SelectTrigger id="experience-level">
                      <SelectValue placeholder="Selecione o nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Júnior</SelectItem>
                      <SelectItem value="mid">Pleno</SelectItem>
                      <SelectItem value="senior">Sênior</SelectItem>
                      <SelectItem value="lead">Líder</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descrição da Vaga</Label>
                <Textarea id="description" placeholder="Descreva as responsabilidades, requisitos e benefícios da vaga." rows={8} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="requirements">Requisitos (separados por vírgula)</Label>
                <Input id="requirements" placeholder="Ex: React, Node.js, SQL, Inglês Fluente" />
              </div>
              <Button type="submit" className="w-full">
                Publicar Vaga
              </Button>
            </form>
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
