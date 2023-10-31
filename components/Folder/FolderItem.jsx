import React from 'react'
import Image from 'next/image'

const FolderItem = ({folder}) => {
    console.log(folder)
  return (
    <div className='w-full flex flex-col justify-center items-center h-[120px]border-[1px] rounded-lg p-5 hover:scale-105 hover:shadow-md cursor-pointer'>
      <Image src="/assets/images/folder.png" alt="folder" width={50} height={50}/>
      <h2 className='line-clamp-2 text-center text-[14px]'>{folder.name}</h2>
    </div>
  )
}

export default FolderItem
