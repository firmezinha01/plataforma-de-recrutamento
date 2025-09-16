import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, User, Briefcase, Video, MessageSquare, Edit, XCircle, CheckCircle } from 'lucide-react'

interface InterviewDetailsProps {
  interview: {
    id: number;
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    jobTitle: string;
    company: string;
    date: string;
    time: string;
    platform: string;
    link: string;
    status: string;
    notes?: string;
  };
}

export function InterviewDetails({ interview }: InterviewDetailsProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Agendada":
        return <Badge variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-100">Agendada</Badge>
      case "Concluída":
        return <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">Concluída</Badge>
      case "Cancelada":
        return <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-100">Cancelada</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-2xl">Detalhes da Entrevista</CardTitle>
          <CardDescription>Informações completas sobre a entrevista agendada.</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" /> Editar
          </Button>
          <Button variant="destructive" size="sm">
            <XCircle className="h-4 w-4 mr-2" /> Cancelar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Candidato</p>
              <p className="text-lg font-semibold">{interview.candidateName}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Vaga</p>
              <p className="text-lg font-semibold">{interview.jobTitle}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Data</p>
              <p className="text-lg font-semibold">{interview.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Hora</p>
              <p className="text-lg font-semibold">{interview.time}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Video className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Plataforma</p>
              <p className="text-lg font-semibold">{interview.platform}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Link da Reunião</p>
              <Link href={interview.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline">
                Acessar Link
              </Link>
            </div>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Email do Candidato</p>
              <p className="text-lg font-semibold">{interview.candidateEmail}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Telefone do Candidato</p>
              <p className="text-lg font-semibold">{interview.candidatePhone}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-2">Status</h3>
          {getStatusBadge(interview.status)}
        </div>

        {interview.notes && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Notas</h3>
            <p className="text-muted-foreground">{interview.notes}</p>
          </div>
        )}

        <div className="flex gap-4 mt-4">
          <Button className="flex-1">
            <Video className="h-4 w-4 mr-2" /> Entrar na Chamada
          </Button>
          <Button variant="outline" className="flex-1">
            <MessageSquare className="h-4 w-4 mr-2" /> Enviar Mensagem
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
