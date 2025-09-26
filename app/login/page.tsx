"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Briefcase } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            {/* <Briefcase className="h-8 w-8 text-primary" /> */}
            <img src="/logo.png" alt="Logo da empresa" className="w-18 h-12 rounded"/>

            {/* <span className="text-2xl font-bold">gowid HR Tech</span> */}
          </Link>
          <CardTitle className="text-2xl">Entrar</CardTitle>
          <CardDescription>
            Insira seu email e senha para acessar sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
            <Button variant="outline" className="w-full">
              Entrar com Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <Link href="/register" className="underline">
              Cadastre-se como Candidato
            </Link>
            {" ou "}
            <Link href="/register-company" className="underline">
              Cadastre-se como Empresa
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
