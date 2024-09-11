import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
  return (
    <div className="bg-slate-800  py-14 mt-20">
      <div className="flex gap-12 px-4 md:px-10 lg:px-28 mb-16">
        {/* Top Footer Section */}
        <div className="flex flex-col gap-6 flex-[30%]">
          <h1 className="text-[40px] text-white">Subscribe To My Newsletter</h1>
          <p className="text-gray-300">Consider subscribing if you don’t want to miss it when new posts go up!!</p>
          <div className="flex gap-4 text-white">
            <FaFacebookSquare className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer"  />
            <FaGoogle className="cursor-pointer" />
            <IoLogoYoutube className="cursor-pointer" />
          </div>
        </div>
        <div className="flex-[70%] mt-5">
          <form className="flex flex-col gap-5 text-white">
            <div>
              <label htmlFor="fname">First Name <span className="text-red-600 text-lg">*</span> </label>
              <input type="text" name="fname" className="py-3 px-3 bg-white w-full text-black outline-none" />
            </div>
            <div>
              <label htmlFor="name">Last Name <span className="text-red-600 text-lg">*</span> </label>
              <input type="text" name="lname" className="py-3 px-3 bg-white w-full text-black outline-none" />
            </div>
            <div>
              <label htmlFor="name"> E-mail <span className="text-red-600 text-lg">*</span> </label>
              <input type="email" name="email" className="py-3 px-3 bg-white w-full text-black outline-none" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">I want to subscribe because... <span>*</span> </h2>
              <div className="flex gap-6">
                <div className="">
                  <input type="checkbox" value="" /> I want to find my heckin happy!
                </div>
                <div>
                  <input type="checkbox" value="" /> Happiness Compass is relatable
                </div>
              </div>
              <div>
                <input type="checkbox" value="" /> Happiness Compass is relatable
              </div>
            </div>
            <button className="bg-primary text-white py-2 px-10 rounded-full w-max hover:bg-[#D8673D]">Submit</button>
          </form>
        </div>
      </div>
      <div className="h-0.5 bg-gray-700"></div>
      <div className="px-4 md:px-10 lg:px-28 mt-8 text-white flex justify-between">
        {/* Bottom Footer Section */}
        <span>Copyright © 2024 Life Coach</span>
        <span>Powered by <a href="/" className="text-blue-300 hover:underline">Rony Hossain</a></span>
      </div>
    </div>
  )
}

export default Footer
