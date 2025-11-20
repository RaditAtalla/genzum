"use client"

import Button from "@/components/button";
import Cart from "@/components/cart";
import MenuCard from "@/components/menu-card";
import NavigationBar from "@/components/navigation-bar";
import TotalPriceCard from "@/components/total-price-card";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart, Home, FileText } from "react-feather";

const MENU = [
  {
    name: "Dimsum Original",
    price: 16000
  },
  {
    name: "Dimsum Mix",
    price: 18000
  },
  {
    name: "Dimsum Mentai",
    price: 20000
  },
]

export default function HomePage() {
  const [counts, setCounts] = useState<number[]>(() => MENU.map(() => 0));
  const [cartVisible, setCartVisible] = useState(false);

  let totalItem = 0;
  let totalPrice = 0;
  counts.forEach((count, index) => {
    totalItem += count
    totalPrice += count * MENU[index].price
  })


  function incrementAt(i: number) {
    setCounts(prev => {
      const next = [...prev];
      next[i] = (prev[i] ?? 0) + 1;
      return next;
    })
  }

  function decrementAt(i: number) {
    setCounts(prev => {
      const next = [...prev];
      next[i] = Math.max(0, (prev[i] ?? 0) - 1);
      return next;
    })
  }

  return(
    <div className="flex flex-col h-full relative">
      <div onClick={() => setCartVisible(false)}>
        {/* appbar */}
        <div className="bg-white flex flex-col gap-16 px-4 py-8 mb-1">
          <div className="flex items-center gap-1">
            <div className="size-6 rounded-[5px] bg-primary" />
            <p className="text-xs font-bold">Genzum</p>
          </div>
          
          <h1 className="font-bold text-[32px] leading-[90%]">Menu Dimsum<br />Genzum</h1>
        </div>
        
        {/* Menu list */}
        <div className="flex flex-col gap-14 bg-white px-4 py-8">
          {MENU.map((map, index) => (
            <MenuCard
              key={index}
              menu={map.name}
              price={map.price}
              count={counts[index]}
              onIncrement={() => incrementAt(index)}
              onDecrement={() => decrementAt(index)}
            />
          ))}
          
        </div>
      </div>

      {/* Total price */}
      <div className="px-4 fixed w-full bottom-20 max-w-[440px]">
        <TotalPriceCard item={totalItem} totalPrice={totalPrice} style="shadow-lg" onClick={() => setCartVisible(true)} />
      </div>

      <Cart counts={counts} onDecrement={() => {}} onIncrement={() => {}} style={cartVisible ? "" : "hidden"} />
    </div>
  )
}
