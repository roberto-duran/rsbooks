'use client'
import SideBarItem from './SideBarItem'
import { sideBarMenuItems } from '../../../data/sideBarMenu'

export default function Sidebar () {
  return (
    <ul className='menu p-4 w-52 bg-base-100 text-base-content shadow-md'>
      {sideBarMenuItems.map((item, index) => (
        <SideBarItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          url={item.url}
        />
      ))}
    </ul>
  )
}
