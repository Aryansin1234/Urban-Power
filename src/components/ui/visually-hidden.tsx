"use client"

import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import React from "react"

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
}

// This component is used to hide content visually while keeping it accessible to screen readers
export function VisuallyHidden({ className, asChild = false, ...props }: VisuallyHiddenProps) {
  const Comp = asChild ? Slot : "span"
  
  return (
    <Comp
      className={cn(
        "absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden clip-[rect(0,_0,_0,_0)] whitespace-nowrap border-0",
        className
      )} 
      {...props} 
    />
  )
}