import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/@/components/ui/select";

export function DashboardFilters() {
  return (
    <div 
      className="flex items-center justify-between max-w-[1268px] w-full mx-auto sticky top-[80px] pb-4 bg-gray-900"
    >
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
  )
}