'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'

  return (
    <div className='flex gap-2'>
      <button className='borderRed px-[1.5rem] py-[0.5rem] text-white text-[1.5rem] bg-red-500'>1</button>
      <button className='borderRed px-[1.5rem] py-[0.5rem] text-[#FF4955] text-[1.5rem] hover:bg-red-500 hover:text-white'>2</button>
      <button className='borderRed px-[1.3rem] py-[0.5rem] text-[#FF4955] text-[1.5rem] hover:bg-red-500 hover:text-white'>→</button>     
    </div>
  )
}

export default PaginationControls