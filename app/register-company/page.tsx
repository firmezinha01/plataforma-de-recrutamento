"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Briefcase } from "lucide-react"

export default function RegisterCompanyPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <Briefcase className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">TalentHub</span>
          </Link>
          <CardTitle className="text-2xl">Cadastre sua Empresa</CardTitle>
          <CardDescription>Crie uma conta para sua empresa (CNPJ) e comece a encontrar talentos.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="company-name">Nome da Empresa</Label>
              <Input id="company-name" type="text" placeholder="Tech Solutions Ltda." required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input id="cnpj" type="text" placeholder="00.000.000/0000-00" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company-email">Email da Empresa</Label>
              <Input id="company-email" type="email" placeholder="contato@techsolutions.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company-password">Senha</Label>
              <Input id="company-password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-company-password">Confirmar Senha</Label>
              <Input id="confirm-company-password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Cadastrar Empresa
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              Cadastrar com Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Já tem uma conta de empresa?{" "}
            <Link href="/login" className="underline">
              Entrar
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
