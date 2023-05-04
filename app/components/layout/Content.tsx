'use client'

import useSideMenu from '@/app/hooks/useSideMenu'
import Main from './Main'
import Sidebar from './Sidebar'

export default function Content () {
  const side = useSideMenu()
  return (
    <div className='drawer drawer-mobile h-[86.6vh]'>
      <input
        id='my-drawer-2'
        type='checkbox'
        className='drawer-toggle'
        defaultChecked={side.isOpen}
      />
      <div className='drawer-content flex flex-col'>
        <Main />
      </div>

      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <Sidebar />
      </div>
    </div>
  )
}
