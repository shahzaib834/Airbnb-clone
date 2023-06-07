'use client';

import Image from 'next/image'
import React, { FC } from 'react'

interface AvatarProps {
  src?: string | null | undefined
}

const Avatar: FC<AvatarProps> = ({src}) => {
  return (
    <Image 
    height='30'
    width='30'
    alt='avatar'
    src={src || '/images/placeholder.jpg'}
    className='rounded-full'
    />
  )
}

export default Avatar