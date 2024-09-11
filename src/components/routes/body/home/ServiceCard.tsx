import Image from 'next/image'
import React from 'react'

const ServiceCard = ({title, description, img}: {title: string, description: string, img: string}) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Image src={img} alt={title} width={60} height={60} />
      <h2 className="text-3xl font-semibold"> {title} </h2>
      <p className="text-lg text-secondary text-center"> {description} </p>
    </div>
  )
}

export default ServiceCard
