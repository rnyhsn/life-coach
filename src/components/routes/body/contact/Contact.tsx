import React from 'react'

const Contact = () => {
  return (
    <div className="flex gap-16 px-4 md:px-10 lg:px-28 mt-20">
      <div className="flex-1 flex flex-col gap-6">
        <div className="h-0.5 bg-secondary w-16"></div>
        <h1 className="text-4xl font-semibold">Contact</h1>
        <div className="text-secondary">
            <p>At vero eos et Paccusamus</p>
            <p>20 4030 Puna ST 123</p>
        </div>
        <div className="text-secondary">
            <p>Tel: 123 456 7890</p>
            <p>Fax: 123 456 7890</p>
        </div>
        <div className="text-secondary">
            <p>info@example.com</p>
            <div></div>
        </div>
      </div>
      <div className="flex-[3]">
        <form action="" className="flex flex-col gap-5 w-full py-16 px-12 bg-gray-100 rounded-md">
            <div className="flex flex-col gap-1 font-semibold">
                <label htmlFor="">First Name <span className="text-red-500">*</span></label>
                <input type="text" name="firstName" className="py-3 px-4 outline-none focus:border focus:border-dashed" />
            </div>
            <div className="flex flex-col gap-1 font-semibold">
                <label htmlFor="">Last Name <span className="text-red-500">*</span></label>
                <input type="text" name="lastName" className="py-3 px-4 outline-none focus:border focus:border-dashed" />
            </div>
            <div className="flex flex-col gap-1 font-semibold">
                <label htmlFor="">E-mail <span className="text-red-500">*</span></label>
                <input type="text" name="firstName" className="py-3 px-4 outline-none focus:border focus:border-dashed" />
            </div>
            <div className="flex flex-col gap-1 font-semibold">
                <label htmlFor="">Message</label>
                <textarea  name="firstName" className="py-3 px-4 outline-none focus:border focus:border-dashed h-28" />
            </div>
            <div>
                <h2 className="font-semibold">The mandated reminder that I am…  <span className="text-red-500">*</span> </h2>
                <div className="flex gap-6 items-center">
                    <label htmlFor="" className="flex gap-2">
                        <input type="checkbox" />  Loved
                    </label>
                    <label htmlFor="" className="flex gap-2">
                        <input type="checkbox" />  Special
                    </label>
                    <label htmlFor="" className="flex gap-2">
                        <input type="checkbox" />  Resilient
                    </label>
                </div>
            </div>
            <button className="px-10 py-2 rounded-full w-max bg-primary text-white">Submit</button>
            
        </form>
      </div>
    </div>
  )
}

export default Contact
