'use client'

import useSideMenu from '@/app/hooks/useSideMenu'
import Button from '../Button'
import { BiMenuAltLeft } from 'react-icons/bi'
import { signOut } from 'next-auth/react'
import { User } from '@prisma/client'
import Avatar from '../Avatar'

type HeaderProps = {
  currentUser: User | null
}

export default function Header ({ currentUser }: HeaderProps) {
  const sideMenu = useSideMenu()
  const handleOpenMenu = () => {
    sideMenu.toggle()
  }

  const handleLogout = () => {
    sideMenu.close()
    signOut({ callbackUrl: '/session/login' })
  }

  return (
    <nav className='navbar bg-base-100 shadow-md z-50'>
      <div className='flex-none lg:hidden'>
        <Button circle onClick={handleOpenMenu} icon={BiMenuAltLeft} />
      </div>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered'
          />
        </div>
        <div className='dropdown dropdown-end'>
          <Avatar src={currentUser?.image} />
          <ul
            tabIndex={0}
            className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
