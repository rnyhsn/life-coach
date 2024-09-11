import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="h-[550px] bg-secondary relative flex items-center justify-center">
        <Image src="/home-banner.jpg" alt="" className="object-cover" fill />
        <div className="absolute h-full w-full bg-black opacity-50"></div>
        <div className=" absolute z-10 text-white flex flex-col gap-14">
            <h1 className="text-7xl font-semibold tracking-wider leading-normal">Swap Burning Out<br/> For a Fire Within</h1>
            <button className="bg-primary px-8 py-3 tracking-wide rounded-full w-max mx-auto">Start Here</button>
        </div>
    </div>
  )
}

export default Banner
