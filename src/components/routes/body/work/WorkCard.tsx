import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WorkCard = ({work}: {work: {title: string, description: string, price: number, img: string, duration: string}}) => {
  return (
    <Link href="/" className="hover:scale-105 transition-all duration-300">
        <div className="relative w-full h-[200px]">
            <Image src={work.img} alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1 pt-3">
            <h2 className="font-semibold"> {work.title} </h2>
            <p className="font-semibold text-secondary">${work.price} </p>
            <p className="text-secondary"> {work.description} </p>
            <h2 className="text-secondary font-semibold">Duration: {work.duration} </h2>
        </div>
    </Link>
  )
}

export default WorkCard
