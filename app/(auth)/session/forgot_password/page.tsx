import Image from 'next/image'
import Link from 'next/link'

export default function Page () {
  return (
    <>
      <Image
        src='../logo.svg'
        alt='RS logo'
        width={30}
        height={30}
        className='mx-auto'
      />
      <h1 className='text-xl font-semibold text-center'>Forgot Password?</h1>
      <h3 className='text-md font-semibold text-center'>
        Remember your password? {/*@ts-ignore*/}
        <Link
          href='/session/login'
          className='text-right link link-info whitespace-nowrap'
        >
          Login here
        </Link>
      </h3>
      <form className='flex flex-col space-y-3'>
        <input
          type='email'
          placeholder='Email'
          className='input input-bordered input-info w-full bg-gray-100'
        />

        <button className='btn btn-info w-full text-white'>
          Reset Password
        </button>
      </form>
    </>
  )
}
