import Button from "./button";
import ItemCounter from "./item-counter";

export default function Cart({ data, counts, onIncrement, onDecrement, style }: { data: object[], counts: number[], onIncrement: () => void, onDecrement: () => void, style?: string }) {
  let totalItem = 0;
  let totalPrice = 0;
  counts.forEach((count, index) => {
    totalItem += count
    totalPrice += count * data[index].price
  })
  
  return(
    <div className={`bg-lightOrange rounded-t-[50px] w-full max-w-[440px] flex flex-col justify-between min-h-[646px] fixed bottom-0 z-20 ${style}`}>
      <div>
        <div className="bg-white px-4 pt-14 pb-6 mb-1 rounded-t-[50px]">
          <h2 className="font-bold text-xl">Keranjang Anda</h2>
        </div>

        <div className="bg-white px-4 py-6">
          <p className="font-bold">Pesanan ({totalItem})</p>

          <div className="flex flex-col gap-7">
            {counts.map((count, index) => {
              if(count == 0) {
                return;
              }

              return(
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="text-xl ">{data[index].name} <span className="font-bold text-[16px]">({count}x)</span></p>
                    <p className="text-sm text-grey">Rp{(count * data[index].price).toLocaleString('id-ID')}</p>
                  </div>
                  <ItemCounter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-4 pt-4 pb-10 bg-white">
        <div className="flex justify-between items-center">
          <p className="font-bold">Total</p>
          <p className="text-primary font-bold">Rp{totalPrice.toLocaleString('id-ID')}</p>
        </div>
        <Button label="Lanjutkan ke Pembayaran" />
      </div>
    </div>
  )
}