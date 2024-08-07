import { NavHeader } from "@/@/components/nav-header";
import { CardOrderCheckIn } from "./components/card-order-check-in";
import { SummaryOrderTotal } from "./components/summary-order-total";

export function CheckIn() {
  return (
    <div className="h-screen w-full">
      <NavHeader />

      <main className="flex flex-col flex-1 mt-[120px] px-4">
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col p-6 gap-10">
            <CardOrderCheckIn />
            <CardOrderCheckIn />
            <CardOrderCheckIn />
            
          </div>

          <SummaryOrderTotal />
        </div>
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