import React from 'react'
import Image from 'next/image'

const FileItems = ({file}) => {
  return (
    <div
        className="grid grid-cols-1
        md:grid-cols-2 justify-between
        cursor-pointer hover:bg-gray-100
        p-3 rounded-md">
            <Image src={`/assets/images/${
                (file.type === "doc") ? "docx" : 
                (file.type === "pptx") ? "pptx":
                (file.type === "pdf") ? "pdf" : "image"
            }.png`} 
            alt="file type" width={40} height={40}/>
        </div>
  )
}

export default FileItems
