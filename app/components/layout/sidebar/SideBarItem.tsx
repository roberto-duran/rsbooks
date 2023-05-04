'use client'

import useSideMenu from '@/app/hooks/useSideMenu'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface SideBarItemProps {
  label: string
  url: string
  icon: IconType
}

export default function SideBarItem ({
  label,
  url,
  icon: Icon
}: SideBarItemProps) {
  const { close } = useSideMenu()
  return (
    <li>
      <Link onClick={() => close()} href={url}>
        <Icon size={22} />
        {label}
      </Link>
    </li>
  )
}
