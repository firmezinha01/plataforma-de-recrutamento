"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Briefcase, Mail, Phone, Linkedin, Github, Globe, Edit, Download, MapPin, DollarSign, Clock, Calendar, MessageSquare, Star, Plus } from 'lucide-react'
import Image from "next/image"

export default function MyProfilePage() {
  const user = {
    name: "João Silva",
    title: "Desenvolvedor Full Stack",
    location: "São Paulo, Brasil",
    email: "joao.silva@example.com",
    phone: "+55 11 98765-4321",
    linkedin: "joaosilva-linkedin",
    github: "joaosilva-github",
    website: "joaosilva.dev",
    bio: "Desenvolvedor full stack com 5 anos de experiência em construir aplicações web escaláveis e de alta performance. Apaixonado por novas tecnologias e por resolver problemas complexos. Experiência em React, Node.js, TypeScript, e bancos de dados SQL/NoSQL.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "Python", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    experience: [
      {
        id: 1,
        title: "Desenvolvedor Full Stack Sênior",
        company: "Tech Innovators",
        duration: "Jan 2022 - Presente",
        description: "Liderança no desenvolvimento de novas funcionalidades e manutenção de sistemas críticos, utilizando React, Node.js e PostgreSQL. Implementação de arquiteturas de microsserviços e CI/CD.",
      },
      {
        id: 2,
        title: "Desenvolvedor Frontend Pleno",
        company: "Creative Solutions",
        duration: "Fev 2019 - Dez 2021",
        description: "Desenvolvimento de interfaces de usuário responsivas e otimizadas com React e Redux. Colaboração com equipes de design para garantir a melhor experiência do usuário.",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Bacharelado em Ciência da Computação",
        institution: "Universidade Federal de São Paulo (UNIFESP)",
        duration: "2015 - 2019",
      },
    ],
    certifications: [
      {
        id: 1,
        name: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services",
        date: "Maio 2023",
      },
    ],
    languages: ["Português (Nativo)", "Inglês (Fluente)", "Espanhol (Intermediário)"],
  }

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
          {/* Profile Header */}
          <Card className="p-6 flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-24 w-24 md:h-32 md:w-32">
              <AvatarImage src="/diverse-user-avatars.png" alt={`${user.name} avatar`} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-lg text-muted-foreground">{user.title}</p>
              <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1 mt-1">
                <MapPin className="h-4 w-4" /> {user.location}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                <Link href={`mailto:${user.email}`} className="text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
                <Link href={`tel:${user.phone}`} className="text-muted-foreground hover:text-primary">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Telefone</span>
                </Link>
                <Link href={`https://linkedin.com/in/${user.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href={`https://github.com/${user.github}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                {user.website && (
                  <Link href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" /> Editar Perfil
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" /> Baixar CV
              </Button>
            </div>
          </Card>

          {/* About Me */}
          <Card>
            <CardHeader>
              <CardTitle>Sobre Mim</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{user.bio}</p>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Habilidades</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle>Experiência Profissional</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              {user.experience.map((exp, index) => (
                <div key={exp.id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.duration}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                  {index < user.experience.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Educação</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              {user.education.map((edu, index) => (
                <div key={edu.id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{edu.duration}</span>
                  </div>
                  {index < user.education.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          {user.certifications.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Certificações</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                {user.certifications.map((cert, index) => (
                  <div key={cert.id}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{cert.name}</h3>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    {index < user.certifications.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle>Idiomas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {user.languages.map((lang, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 text-sm">
                  {lang}
                </Badge>
              ))}
            </CardContent>
          </Card>
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
          © {new Date().getFullYear()} gowid HR Tech. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
