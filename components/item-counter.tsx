"use client"

import { MinusCircle, PlusCircle } from "react-feather";

export default function ItemCounter({ style, count, onIncrement, onDecrement }: { style?: string, count: number, onIncrement: () => void, onDecrement: () => void }) {
  return(
    <div className={`bg-white px-4 py-2 flex justify-between items-center ${style}`}>
      <MinusCircle onClick={() => onDecrement()} className="text-primary" />
      <p className="mx-2">{count}</p>
      <PlusCircle onClick={() => onIncrement()} className="text-primary" />
    </div>
  )
}