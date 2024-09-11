import Image from 'next/image'
import React from 'react'

const CoachTeacher = () => {
  return (
    <div className="px-4 md:px-10 lg:px-28 flex gap-10">
        <div className="relative h-[450px] w-1/3">
            <Image src="/profile-picture.jpg" alt="" fill className="object-contain" />
        </div>
        <div className="flex flex-col gap-2 w-2/3 justify-center">
            <h2 className="text-xl font-semibold">Coach</h2>
            <h1 className="text-xl font-semibold">Sara John</h1>
            <div className="h-0.5 bg-secondary w-14 my-8">  </div>
            <p className="text-secondary text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="px-8 py-3 rounded-full text-white bg-primary mt-8 w-max">Read My Story</button>
        </div>
    </div>
  )
}

export default CoachTeacher
