import { Badge } from "@/@/components/ui/badge";

export function FiltersApplys() {
  return (
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
  )
}