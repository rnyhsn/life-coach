import React from 'react'

const Consultation = () => {
  return (
    <div className="flex gap-20 mt-16 px-4 md:px-10 lg:px-28 bg-gray-100 py-20">
        <div className="flex-[30%] flex flex-col gap-10">
            <div className="h-0.5 bg-secondary w-14"></div>
            <h1 className="text-5xl font-semibold">Free Consultation</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, praesentium. Commodi asperiores dolorum cum deserunt.</p>
        </div>
        <div className="flex-[70%]">
            <form action="" className="w-full bg-white shadow-md flex flex-col gap-5 py-14 px-10">
                <div className="flex flex-col">
                    <label htmlFor="name">Your Name <span className="text-red-500 text-sm">*</span></label>
                    <input type="text" className="py-2 px-4 border-2 border-gray-300 rounded-md outline-none focus:border-dotted" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Your Email <span className="text-red-500 text-sm">*</span></label>
                    <input type="text" className="py-2 px-4 border-2 focus:border-dotted border-gray-300 rounded-md outline-none" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Phone <span className="text-red-500 text-sm">*</span></label>
                    <input type="text" className="py-2 px-4 border-2 focus:border-dotted border-gray-300 rounded-md outline-none" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name"> Additional Request?</label>
                    <input type="text" className="py-2 px-4 border-2 focus:border-dotted border-gray-300 rounded-md outline-none" />
                </div>
                <button className="px-10 py-2 rounded-full bg-primary w-max text-white hover:bg-[#D8673D]">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Consultation
