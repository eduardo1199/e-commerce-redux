import { Starts } from "@/@/components/starts";
import { Button } from "@/@/components/ui/button";

interface CardOrderProps {
  productName: string;
  orderAmount: number;
  amountFeedback: number[];
  onAddProduct: (productId: string) => void;
  productId: string
  hasProductCart: boolean;
}

export function CardOrder({ 
    amountFeedback = [], 
    onAddProduct, 
    orderAmount, 
    productName, 
    productId, 
    hasProductCart = false
}: CardOrderProps) {

  function handleAddProduct() {
    if(!hasProductCart) {
      onAddProduct(productId)
    }
  }

  return (
    <div className="bg-transparent border border-slate-300 flex flex-col rounded gap-4 w-full p-5">
      <p className="text-gray-200 font-semibold">{productName}</p>

      <span className="text-gray-200">
        Mais de {orderAmount} compras
      </span>

      <div className="flex justify-between">
        <Starts amountFeedback={amountFeedback} />

        <span className="text-sm text-white">Feedbacks positivos</span>
      </div>

      <Button 
        className={`text-gray-900 hover:text-white ${hasProductCart ? 'bg-white' : 'bg-yellow-300'}`} 
        onClick={handleAddProduct}
      >
        Adicionar carrinho
      </Button>
    </div>
  )
}