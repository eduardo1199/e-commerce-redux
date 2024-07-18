import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/@/components/ui/card"
import { Label } from "./@/components/ui/label"
import { Input } from "./@/components/ui/input"
import { Button } from "./@/components/ui/button"

export function App() {
  return (
    <div className="h-screen bg-gray-900">
      <div className="flex justify-center items-center h-full px-4">
        <Card className="bg-transparent border-2 border-gray-600 flex flex-col w-full max-w-[560px]">
          <CardHeader className="flex flex-col gap-2">
            <CardTitle className="text-gray-200 mb-4">Entrar</CardTitle>
            <CardDescription className="text-blue-300 font-semibold">
              Caso não tenha cadastro, 
              <a href="#">clique aqui</a>
            </CardDescription>
            <CardDescription className="text-blue-300 font-semibold">
              Você pode também se quiser ver os produtos disponíveis
            </CardDescription>

            <Button 
              className="py-6 rounded bg-green-800 hover:bg-green-900 transition-color duration-150"
              asChild
            >
              <a href="#">Navegar para os produtos</a>
            </Button>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-400 text-sm">Email</Label>
                <Input 
                  placeholder="email"
                  type="email"
                  id="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-400 text-sm">Senha</Label>
                <Input 
                  placeholder="password"
                  type="password"
                  id="password"
                  className=""
                />
              </div>

              <Button type="submit" className="rounded bg-gray-800 hover:bg-gray-900 transition-color duration-150">
                ENTRAR
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
