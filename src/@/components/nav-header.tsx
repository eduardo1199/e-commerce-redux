import { Avatar, AvatarFallback, AvatarImage } from "@/@/components/ui/avatar";
import { Button } from "@/@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/@/components/ui/dropdown-menu";
import { Input } from "@/@/components/ui/input";
import { ShoppingCart } from '@phosphor-icons/react'
import { Link } from "react-router-dom";

export function NavHeader() {
  return (
    <header className="flex w-full px-4 py-2 bg-gray-900 fixed top-0">
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

          <Button className="relative" asChild>
            <Link to="/check-in">
              <ShoppingCart size={25} className="hover:text-gray-300" />
              <span 
                className="
                  absolute top-1 right-1 text-gray-900 bg-yellow-300 px-1 rounded-full
                ">
                2
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}