import { Checkbox } from "@/@/components/ui/checkbox"
import { Minus, Plus } from "@phosphor-icons/react"

export function CardOrderCheckIn() {
  return (
    <div className="flex items-center gap-4 border-b pb-6">
      <Checkbox />

      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between mb-8">
          <h4 className="text-2xl font-bold text-yellow-200">Creatina Pura 300G Monohidratada Dark Lab</h4>

          <span className="text-xl font-bold text-gray-300">R$ 63,90</span>
        </div>
        
        <div className="flex items-center gap-4 p-2 bg-white rounded-md max-w-[200px]">
          <span className="text-gray-900 text-sm font-semibold">Quant.</span>

          <button>
            <Minus />
          </button>

          <p className="text-gray-900 font-semibold">5</p>

          <button>
            <Plus />
          </button>
        </div>

        <div className="flex items-center mt-4">
          <button className="text-gray-200 font-semibold text-sm">
            Excluir
          </button>
        </div>
      </div>
    </div> 
  )
}