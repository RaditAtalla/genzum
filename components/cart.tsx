import Button from "./button";
import ItemCounter from "./item-counter";

export default function Cart({ counts, onIncrement, onDecrement, style }: { counts: number[], onIncrement: () => void, onDecrement: () => void, style?: string }) {
  return(
    <div className={`bg-green-800 border-2 border-yellow-800 rounded-t-[50px] w-full max-w-[440px] flex flex-col justify-between min-h-[646px] fixed bottom-0 z-10 ${style}`}>
      <div>
        <div className="bg-white px-4 py-14 mb-1">
          <h2 className="font-bold text-xl">Keranjang Anda</h2>
        </div>

        <div className="bg-white px-4 py-6">
          <p className="font-bold">Pesanan (3x)</p>

          <div className="flex flex-col gap-7">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl ">Dimsum Mix <span className="font-bold text-[16px]">(2x)</span></p>
                <p className="text-sm text-grey">Rp36.000</p>
              </div>
              <ItemCounter count={2} onIncrement={onIncrement} onDecrement={onDecrement} />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl ">Dimsum Mix <span className="font-bold text-[16px]">(2x)</span></p>
                <p className="text-sm text-grey">Rp36.000</p>
              </div>
              <ItemCounter count={2} onIncrement={onIncrement} onDecrement={onDecrement} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-4 pt-4 pb-10 bg-white">
        <div className="flex justify-between items-center">
          <p className="font-bold">Total</p>
          <p className="text-primary">Rp56.000</p>
        </div>
        <Button label="Lanjutkan ke Pembayaran" />
      </div>
    </div>
  )
}