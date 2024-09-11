import React from 'react'
import ServiceCard from './ServiceCard'
import { IoIosArrowForward } from "react-icons/io";


const services = [
    {
        title: "Sample Service 1", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper dapibus leo.", 
        img: "/service1.png"
    },
    {
        title: "Sample Service 2", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper dapibus leo.", 
        img: "/service2.png"
    },
    {
        title: "Sample Service 3", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper dapibus leo.", 
        img: "/service3.png"
    },
    
]

const SupportSection = () => {
  return (
    <div className="flex flex-col px-4 md:px-10 lg:px-28">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-5xl font-semibold">How May I Help You?</h1>
        <div className="h-0.5 bg-secondary w-14"></div>
        <p className="text-secondary">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-14">
       {
        services.map((item) => (
            <ServiceCard title={item.title} description={item.description} img={item.img} />
        ))
       }
      </div>
      <button className="px-8 py-2 flex items-center gap-2 bg-primary rounded-full text-white font-semibold w-max mt-8 mx-auto"> <IoIosArrowForward className="bg-white rounded-full text-primary text-sm" /> View More </button>
    </div>
  )
}

export default SupportSection
