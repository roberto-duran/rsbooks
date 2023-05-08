'use client'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function Login () {
  return (
    <>
      <Image
        src='../logo.svg'
        alt='RS logo'
        width={30}
        height={30}
        className='mx-auto'
      />
      <h1 className='text-xl font-semibold text-center'>Hi, Welcome Back</h1>
      {/* SSO Login */}
      <div className='flex flex-col space-y-3 text-gray-800'>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className='flex btn bg-gray-100 gap-6 hover:bg-gray-300
                    hover:text-gray-800'
        >
          <FcGoogle size={24} className='w-8 inline-block' />
          <span className='w-30 flex-grow-2'>Sign in with Google</span>
        </button>
      </div>
      {/* Separator */}

      <div className='divider uppercase text-xs'>Or Login With Email</div>
      {/* login form */}
      <form className='flex flex-col space-y-3'>
        <input
          type='email'
          placeholder='Email'
          className='input input-bordered input-info w-full bg-gray-100'
        />
        <input
          type='password'
          placeholder='Password'
          className='input input-bordered input-info w-full bg-gray-100'
        />
        <Link
          href='/session/forgot_password'
          className='text-right link link-info'
        >
          Forgot Password?
        </Link>
        <button className='btn btn-info w-full text-white'>Sign in</button>
      </form>
    </>
  )
}
