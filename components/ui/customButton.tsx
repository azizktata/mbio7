import React from 'react'

import Link from 'next/link'
import { cn } from '../craft'
import { Button } from './button'

export default function CustomButton({ label, className, inverted, asChild, href }: { label: string, className?: string, inverted?: boolean, asChild?: boolean, href: string }) {
  return (
    <Button asChild={asChild} className={cn("bg-mbioSecondary text-white font-base rounded-full px-6 py-4  text-sm hover:opacity-90", { "text-mbioPrimary bg-white hover:bg-gray-100 ": inverted }, className)}>
      <Link href={href} className={cn("text-white", { "text-mbioPrimary": inverted })}>
       
        {label}
    
      </Link>
    </Button>
  )
}
