import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
   return (
      <nav className="glass-effect flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white">
         <div className="flex-between mx-auto w-full max-w-screen-xl px-6 xs:px-8 sm:px-16">
            <Link href='/'>
               <Image src='/logo.png' alt="logo" width={55} height={40} />
            </Link>


            <Image
               src='/hamburger-menu.svg'
               alt="hamburger-menu"
               width={30}
               height={30}
               className="block md:hidden"
               style={{ cursor: "pointer" }}
            />

            <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
               <li className="body-text text-gradient_blue-purple font-bold">
                  <Link href='/' target="_blank">Some Text</Link>
               </li>
               <li className="body-text font-normal">
                  <Link href='/' target="_blank">Some Text</Link>
               </li>
            </ul>
         </div>
      </nav>
   )
}
