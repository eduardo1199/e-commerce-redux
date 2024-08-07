export function SummaryOrderTotal() {
  return (
    <div className="flex flex-col w-[300px] bg-white rounded p-4 gap-10">
      <p className="font-normal text-xl">Quantidade total (8 produtos)</p>

      <span className="text-xl font-bold">R$ 2.500,00</span>

      <button aria-label="buy-order" type="button" className="bg-yellow-400 p-3 rounded text-white font-semibold text-lg hover:brightness-105 transition-all">
        Comprar
      </button>
    </div>
  )
}