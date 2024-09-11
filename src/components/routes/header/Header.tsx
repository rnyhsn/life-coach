import Image from 'next/image'
import Link from 'next/link'
import { IoBag } from "react-icons/io5";
import LInkItem from './LInkItem';

const links = [
    {title: "Home", path: "/"},
    {title: "About", path: '/about'},
    {title: "Work With Me", path: '/work'},
    {title: "Books", path: '/books'},
    {title: "Contact", path: '/contact'},
]
const Header = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 bg-white h-20 flex items-center justify-between">
        {/* Left Section */}   
            <Link href="/" className="flex gap-4 items-center">
                <Image src="/logo.png" alt="" width={55} height={55} />
            <div>
                <h2 className="text-[33px] font-semibold tracking-wider">Life Coach</h2>
                <span className="text-sm text-secondary">Where Smiles Lead The Way</span>
            </div>
            </Link>

        {/* Right Section */}
        <div className="flex gap-5 text-lg  font-semibold">
        {
            links.map((item)=> (
               <LInkItem item={item} key={item.title} />
            ))
        }
            <div className="text-primary flex items-center gap-2  font-semibold">
                <span>$100</span>
                <div className="relative">
                    <IoBag className='text-2xl' />
                    <span className="absolute w-4 h-4 bg-primary text-white text-xs rounded-full -right-1 -top-1 flex items-center justify-center">0</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header