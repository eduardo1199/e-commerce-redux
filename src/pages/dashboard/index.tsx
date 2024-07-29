import { Starts } from "@/@/components/starts"
import { Avatar, AvatarFallback, AvatarImage } from "@/@/components/ui/avatar"
import { Badge } from "@/@/components/ui/badge"
import { Button } from "@/@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/@/components/ui/dropdown-menu"
import { Input } from "@/@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/@/components/ui/select"

export function Dashboard() {
  return (
    <div>
      <header className="flex w-full px-4">
        <div className="max-w-[1268px] w-full flex mx-auto justify-between py-3">
          <p className="font-semibold text-lg text-white">
            e-commerce-redux 👏
          </p>

          <div className="flex gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="bg-yellow-400 font-semibold text-gray-700 py-1 px-3 rounded">
                <button>Categoria</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Categorias</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-gray-600">Masculino</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-gray-600">Feminino</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-gray-600">Infantil</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-gray-600">Casa</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-gray-600">Eletrodoméstico</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-gray-600">Notebooks</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-gray-600">Smartphones</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Input type="text" className="w-[350px]" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Não autenticado</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-gray-600">Login</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex flex-col flex-1 mt-10 px-4 ">
        <div className="flex items-center justify-between max-w-[1268px] w-full mx-auto">
       
          <span className="text-slate-200">Resultados: 36 de 150</span>
     

          <Select>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Ordernar por:" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="biggest_price">Preço: Maior para menor</SelectItem>
              <SelectItem value="low_price">Preço: Menor para maior</SelectItem>
              <SelectItem value="most_purchased">Mais comprado</SelectItem>
              <SelectItem value="most_rated">Mais avaliado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2 flex-col mt-10 max-w-[1268px] w-full mx-auto">
         <span className="font-bold text-yellow-400">
          Filtros aplicados: 
         </span>
          <div className="flex gap-3 items-center">
            <Badge variant="secondary">Badge</Badge>
            <Badge variant="secondary">Badge</Badge>
            <Badge variant="secondary">Badge</Badge>
            <Badge variant="secondary">Badge</Badge>
            <Badge variant="secondary">Badge</Badge>
          </div>
        </div>


        <div className="grid grid-cols-4 gap-10 mt-10 w-full mx-auto max-w-[1268px]">
          <div className="bg-transparent border border-slate-300 flex flex-col rounded gap-4 w-full p-5">
            <p className="text-gray-200 font-semibold">Relógio Casio G- Shock Digital Masculino DW-5600BB-1DR</p>

            <span className="text-gray-200">
              Mais de 200 compras
            </span>

            <div className="flex justify-between">
              <Starts amountFeedback={[2, 5, 3, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />

              <span className="text-sm text-white">Feedbacks positivos</span>
            </div>

            <Button className="bg-yellow-300 text-gray-900 hover:text-white">
              Adicionar carrinho
            </Button>
          </div>
          <div className="bg-transparent border border-slate-300 flex flex-col rounded gap-4 w-full p-5">
            <p className="text-gray-200 font-semibold">Relógio Casio G- Shock Digital Masculino DW-5600BB-1DR</p>

            <span className="text-gray-200">
              Mais de 200 compras
            </span>

            <div className="flex justify-between">
              <Starts amountFeedback={[2, 5, 3, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />

              <span className="text-sm text-white">Feedbacks positivos</span>
            </div>

            <Button className="bg-yellow-300 text-gray-900 hover:text-white">
              Adicionar carrinho
            </Button>
          </div>
          <div className="bg-transparent border border-slate-300 flex flex-col rounded gap-4 w-full p-5">
            <p className="text-gray-200 font-semibold">Relógio Casio G- Shock Digital Masculino DW-5600BB-1DR</p>

            <span className="text-gray-200">
              Mais de 200 compras
            </span>

            <div className="flex justify-between">
              <Starts amountFeedback={[2, 5, 3, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />

              <span className="text-sm text-white">Feedbacks positivos</span>
            </div>

            <Button className="bg-yellow-300 text-gray-900 hover:text-white">
              Adicionar carrinho
            </Button>
          </div>
          <div className="bg-transparent border border-slate-300 flex flex-col rounded gap-4 w-full p-5">
            <p className="text-gray-200 font-semibold">Relógio Casio G- Shock Digital Masculino DW-5600BB-1DR</p>

            <span className="text-gray-200">
              Mais de 200 compras
            </span>

            <div className="flex justify-between">
              <Starts amountFeedback={[2, 5, 3, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />

              <span className="text-sm text-white">Feedbacks positivos</span>
            </div>

            <Button className="bg-yellow-300 text-gray-900 hover:text-white">
              Adicionar carrinho
            </Button>
          </div>
          <div className="bg-transparent border border-slate-300 flex flex-col rounded gap-4 w-full p-5">
            <p className="text-gray-200 font-semibold">Relógio Casio G- Shock Digital Masculino DW-5600BB-1DR</p>

            <span className="text-gray-200">
              Mais de 200 compras
            </span>

            <div className="flex justify-between">
              <Starts amountFeedback={[2, 5, 3, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />

              <span className="text-sm text-white">Feedbacks positivos</span>
            </div>

            <Button className="bg-yellow-300 text-gray-900 hover:text-white">
              Adicionar carrinho
            </Button>
          </div>
        </div>
      </main>

      <footer className="mt-10 p-4 bg-slate-200 fixed bottom-0 w-full">
        <div className="flex justify-center items-center flex-col gap-4">
          <span className="text-sm text-gray-600">E-Commerce Redux . | CNPJ xx.xxx.xxx/xxxx-xx</span>

          <span className="text-sm text-gray-600">
          Av. Perimetral, Parnamirimn - Rio Grande do Norte CEP: xxxxx-xxx| Fale conosco | eduardosooares@hotmail.com
          </span>
        </div>
      </footer>
    </div>
  )
}