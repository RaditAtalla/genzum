import React from "react"

export default function Button({ label, icon, style, onClick }: {label: string, icon?: React.ReactNode, style?: string, onClick?: () => void}) {
  return(
    <button onClick={onClick} className={`hover:cursor-pointer bg-primary rounded-sm py-2 flex gap-2 items-center justify-center text-xs text-white ${style} font-bold`}>
      {icon}
      {label}
    </button>
  )
}