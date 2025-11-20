import Button from "./button";

export default function TotalPriceCard({ item = 0, totalPrice = 0, style, onClick }: { item?: number, totalPrice?: number, style?: string, onClick: () => void}) {
  return(
    <div className={`bg-white rounded-[10px] flex justify-between items-center py-2 px-6 ${style}`}>
      <div>
        <p className="text-[16px]">Total ({item} item)</p>
        <p className="font-bold">Rp{totalPrice.toLocaleString('id-ID')}</p>
      </div>
      <Button onClick={onClick} label="Lihat Keranjang" style="px-4.5" />
    </div>
  )
}