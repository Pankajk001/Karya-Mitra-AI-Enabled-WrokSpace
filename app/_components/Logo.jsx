import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={'/dashboard'} className='flex  flex-col   items-center '>
        <Image src={'/logo.png'} alt='logo'
        width={120} height={120} className='-ml-3 -mt-6'/>
        <h2 className='font-extrabold text-sm ml-1 -mt-6 font-sans'>Karya Mitra</h2>
    </Link>
  )
}

export default Logo