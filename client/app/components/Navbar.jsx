"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="z-20 fixed bg-zinc-800 w-full text-TEXT">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center py-2">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="lg:flex hidden h-full">
          <Link href="/" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">Home</Link>
          <Link href="/expertise" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">Expertise</Link>
          <Link href="/Mission-Vision" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">Mission & Vision</Link>
          <Link href="/research" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">Research</Link>
          <Link href="/products" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">Products</Link>
          <Link href="/Publications" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">Publications</Link>
          <Link href="/Members" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">Members</Link>
          {/* <Link href="/Events" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">Events</Link>
          <Link href="/Announcements" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">Announcements</Link>
          <Link href="/Achievements" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">Achievements</Link> */}
          <Link href="/About-us" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex items-center">About us</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center lg:hidden pb-4">
          <Link href="/" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">Home</Link>
          <Link href="/expertise" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">Expertise</Link>
          <Link href="/Mission-Vision" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">Mission & Vision</Link>
          <Link href="/research" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">Research</Link>
          <Link href="/products" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">Products</Link>
          <Link href="/Publications" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">Publications</Link>
          <Link href="/Members" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">Members</Link>
          {/* <Link href="/Events" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">Events</Link>
          <Link href="/Announcements" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">Announcements</Link>
          <Link href="/Achievements" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">Achievements</Link> */}
          <Link href="/About-us" className="transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full text-center">About us</Link>
        </div>
      )}
    </nav>
  )
}