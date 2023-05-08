import Image from 'next/image'

interface AvatarProps {
  src: string | null | undefined
}

export default function Avatar ({ src }: AvatarProps) {
  return (
    <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
      <div className='w-10 rounded-full'>
        <Image
          height={50}
          width={50}
          alt='Avatar'
          src={src || '/images/placeholder.jpg'}
        />
      </div>
    </label>
  )
}
