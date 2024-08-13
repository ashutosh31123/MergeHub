import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={'/dashboard'} className='flex items-center gap-2'>
        <Image src={'/MergeHub Light.png'} alt='logo'
        width={30} height={30} />
        <h2 className='font-bold text-xl'>MergeHub</h2>
    </Link>
  )
}

export default Logo