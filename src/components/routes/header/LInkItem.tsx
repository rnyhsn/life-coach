"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const LInkItem = ({item}: {item: {title: string, path: string}}) => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <Link href={item.path} className={`${item.path === pathname && "text-primary"}`} > {item.title} </Link>
  )
}

export default LInkItem
