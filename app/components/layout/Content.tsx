'use client'

import useSideMenu from '@/app/hooks/useSideMenu'
import Sidebar from './sidebar/Sidebar'

interface ContentProps {
  children: React.ReactNode
}

export default function Content ({ children }: ContentProps) {
  const side = useSideMenu()
  return (
    <div className='drawer drawer-mobile max-h-[86.6vh] overflow-y-auto'>
      <input
        id='my-drawer-2'
        type='checkbox'
        className='drawer-toggle'
        defaultChecked={side.isOpen}
      />
      <main className='drawer-content flex flex-col'>{children}</main>

      <div className='drawer-side shadow-lg'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <Sidebar />
      </div>
    </div>
  )
}
