import { Button } from "@/@/components/ui/button";
import { Link } from "react-router-dom";

export function CardOrder() {
  return (
    <div className="flex justify-between border border-gray-100 p-4">
      <div className="flex flex-col gap-2">
        <Button asChild>
          <Link to="/dashboard">
            <strong 
              className="
              text-gray-300 px-1 rounded-full font-bold text-2xl
              ">
              Max Titanium Creatina - 300g
            </strong>
          </Link>
        </Button>
        <div className="px-1 py-1 bg-yellow-400 rounded font-semibold max-w-[100px] justify-center items-center flex">
          <span>
            Enviado
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <strong className="text-yellow-400">Quantidade: 5</strong>
        <p className="text-gray-200">Preço total: <span className="text-yellow-400 text-lg font-semibold">R$ 1.200,00</span></p>
      </div>
    </div>
  )
}