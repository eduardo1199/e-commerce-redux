import { NavHeader } from "@/@/components/nav-header";
import { CardOrder } from "./components/card-order";

export function Orders() {
  return (
    <div className="h-screen w-full">
      <NavHeader />

      <main className="flex flex-col mt-[120px] px-4 gap-4">
        <CardOrder />
        <CardOrder />
        <CardOrder />
      </main>

      <footer className="p-4 bg-slate-200 w-full fixed bottom-0">
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