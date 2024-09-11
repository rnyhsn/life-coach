import Image from 'next/image'
import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const BookCard = ({item}: {item: {title: string, img: string}}) => {
    console.log(item.img)
  return (
    <div>
      <div className="relative w-full h-[360px]">
        <Image src={item.img} alt="" className="object-cover" fill />
      </div>
      <div className="py-4 flex items-center justify-center flex-col">
        <h2 className="text-center text-2xl font-semibold"> {item.title} </h2>
        <button className="py-2 px-8 rounded-full w-max bg-primary text-white mt-3 flex items-center gap-1 hover:bg-[#D8673D] transition-all duration-300"> <IoIosArrowDroprightCircle /> Get it Now </button>
      </div>
    </div>
  )
}

export default BookCard
