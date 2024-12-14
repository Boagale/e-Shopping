import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/public/assets/ecomerslogo.jpeg"
interface headerProbType {
  displayAuthNav: boolean
}
const Header = ({ displayAuthNav }:headerProbType) => {
  return (
    <header className="absolute top-4 left-0 flex w-full h-[60px] items-center justify-between">
        <div className="h-18 w-18 p-2">
          <Link href={'/'}>
            <Image 
            width={60} 
            src={logo} 
            className="rounded-full hover:scale-105 transition-all duration-200"
            alt="logo" />
          </Link>
          </div>
          {displayAuthNav?<div className="px-4 space-x-2">
            <Link href={'/signUp'}>
              <button className="btn btn-outline btn-success py-0">Register</button>
            </Link>
            <Link href={'/signIn'}>
              <button className="btn btn-outline btn-primary">Sign In</button>
            </Link>
          </div> : <div className=""></div>}
      </header>
  )
}

export default Header