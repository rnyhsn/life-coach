import Image from 'next/image'
import React from 'react'

const WorkWithMe = () => {
  return (
    <div className="px-4 md:px-10 lg:px-28 bg-gray-100 flex gap-12 py-28">
        <div className="flex flex-col gap-6 w-1/2 justify-center">
            <div className="h-0.5 bg-secondary w-12"></div>
            <h1 className="text-[42px] font-semibold">Work With Me</h1>
            <p className="text-secondary text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Unim ad minim veniam, quepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
            <button className="bg-primary text-white py-3 px-8 rounded-full w-max hover:bg-[#D8673D] transition-all duration-300">Read More</button>
        </div>
        <div className="w-1/2 relative h-[350px]">
            <Image src="/work-with-me.jpg" alt="" className="object-cover" fill />
        </div>
    </div>
  )
}

export default WorkWithMe
