import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Building2 } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
        <Link href="/" className="flex items-center justify-center">
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
        <div className="max-w-4xl mx-auto grid gap-6">
          <h1 className="text-2xl font-bold">Bem-vindo ao seu Dashboard!</h1>

          {/* Role Selection */}
          <div className="flex min-h-[100dvh] items-center justify-center bg-muted px-4 py-12">
            <Card className="w-full max-w-md">
              <CardHeader className="space-y-1 text-center">
                <div className="flex justify-center mb-4">
                  <Briefcase className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold">Acessar Dashboard</CardTitle>
                <CardDescription>
                  Selecione o tipo de dashboard que deseja acessar.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Link href="/dashboard/candidate">
                  <Button className="w-full h-20 flex flex-col items-center justify-center text-lg">
                    <Users className="h-8 w-8 mb-2" />
                    Dashboard do Candidato
                  </Button>
                </Link>
                <Link href="/dashboard/company">
                  <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center text-lg">
                    <Building2 className="h-8 w-8 mb-2" />
                    Dashboard da Empresa
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats (Example for a combined view or general stats) */}
          {/* Call to Action */}
        </div>
      </main>
    </div>
  )
}
