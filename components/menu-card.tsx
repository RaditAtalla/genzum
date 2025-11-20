"use client"

import Image from "next/image";
import Button from "./button";
import { ShoppingCart } from "react-feather";
import { useState } from "react";
import ItemCounter from "./item-counter";

export default function MenuCard({ menu, price, count, onIncrement, onDecrement }: { menu: string, price: number, count: number, onIncrement: () => void, onDecrement: () => void }) {
  const [counterVisible, setCounterVisible] = useState(count > 0)

  return(
    <div className="flex gap-4 items-center">
      <Image src={"/dimsum.png"} width={100} height={100} alt="Dimsum" />
      <div className="w-full">
        <p className="text-xl">{menu}</p>
        <p className="text-sm text-grey">Rp{price.toLocaleString('id-ID')}</p>

        {counterVisible ? (
          <ItemCounter style="mt-3.5" count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
        ) : (
          <Button onClick={() => setCounterVisible(true)} label="Masukkan ke Keranjang" icon={<ShoppingCart size={18} />} style="mt-3.5 w-full" />
        )}
      </div>
    </div>
  )
}