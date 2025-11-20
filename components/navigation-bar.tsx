"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Home } from "react-feather";

export default function NavigationBar() {
  const pathname = usePathname();
  const activeStyle = "border-t border-primary text-primary"

  return(
    <div className="bg-white flex">
      <Link href={"/"} className={`py-2.5 flex flex-col items-center flex-1 font-semibold text-grey ${pathname == "/" ? activeStyle : ""}`}>
        <Home />
        Home
      </Link>
      <Link href={"/order"} className={`py-2.5 flex flex-col items-center flex-1 font-semibold text-grey ${pathname == "/order" ? activeStyle : ""}`}>
        <FileText />
        My Order
      </Link>
    </div>
  )
}