import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Clock, User, Briefcase, Video, Mail } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function InterviewScheduler() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState("")
  const [candidate, setCandidate] = useState("")
  const [job, setJob] = useState("")
  const [platform, setPlatform] = useState("")
  const [notes, setNotes] = useState("")

  const handleSchedule = () => {
    console.log({ date, time, candidate, job, platform, notes })
    // Logic to schedule interview
    alert("Entrevista agendada com sucesso!")
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Agendar Entrevista</CardTitle>
        <CardDescription>Preencha os detalhes para agendar uma nova entrevista.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="candidate">Candidato</Label>
            <Select value={candidate} onValueChange={setCandidate}>
              <SelectTrigger id="candidate">
                <SelectValue placeholder="Selecione o candidato" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="joao-silva">João Silva (Desenvolvedor)</SelectItem>
                <SelectItem value="maria-oliveira">Maria Oliveira (Designer)</SelectItem>
                <SelectItem value="pedro-santos">Pedro Santos (Analista de Dados)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="job">Vaga</Label>
            <Select value={job} onValueChange={setJob}>
              <SelectTrigger id="job">
                <SelectValue placeholder="Selecione a vaga" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-stack">Desenvolvedor Full Stack Sênior</SelectItem>
                <SelectItem value="ux-ui">Designer UX/UI Pleno</SelectItem>
                <SelectItem value="data-analyst">Analista de Dados Júnior</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="date">Data</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Selecione uma data</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time">Hora</Label>
            <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="platform">Plataforma de Videoconferência</Label>
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger id="platform">
              <SelectValue placeholder="Selecione a plataforma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="google-meet">Google Meet</SelectItem>
              <SelectItem value="zoom">Zoom</SelectItem>
              <SelectItem value="microsoft-teams">Microsoft Teams</SelectItem>
              <SelectItem value="skype">Skype</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="notes">Notas Adicionais (Opcional)</Label>
          <Textarea id="notes" placeholder="Adicione quaisquer notas relevantes para a entrevista..." value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>

        <Button className="w-full" onClick={handleSchedule}>
          Agendar Entrevista
        </Button>
      </CardContent>
    </Card>
  )
}
