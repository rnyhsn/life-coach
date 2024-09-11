"use client";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";



import { useState } from "react";

const FAQ = ({item}: {item: {question: string, answer: string}}) => {
    const [open, setOpen] = useState(false);
  return (
    <div>
    <button className="font-bold flex items-center gap-1 transition-all duration-300" onClick={()=> setOpen(prev => !prev)}> {open ? <FaMinus /> : <MdAdd /> }  {item.question} </button>
    <div className={`text-secondary h-0 overflow-hidden ${open && "h-max py-4 transition-all duration-500"} `}>{item.answer}</div>
</div>
  )
}

export default FAQ
