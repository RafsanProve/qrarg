"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-zinc-800 text-white">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center py-2">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden p-2"
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
        <div className="hidden md:flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/Expertise">Expertise</Link>
          <Link href="/Mission-Vision">Mission & Vision</Link>
          <Link href="/Research-Areas">Research Areas</Link>
          <Link href="/Publications">Publications</Link>
          <Link href="/Members">Members</Link>
          <Link href="/Events">Events</Link>
          <Link href="/Announcements">Announcements</Link>
          <Link href="/Achievements">Achievements</Link>
          <Link href="/Products">Products</Link>
          <Link href="/About-us">About us</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center pb-4">
          <Link href="/" className="py-2">Home</Link>
          <Link href="/Expertise" className="py-2">Expertise</Link>
          <Link href="/Mission-Vision" className="py-2">Mission & Vision</Link>
          <Link href="/Research-Areas" className="py-2">Research Areas</Link>
          <Link href="/Publications" className="py-2">Publications</Link>
          <Link href="/Members" className="py-2">Members</Link>
          <Link href="/Events" className="py-2">Events</Link>
          <Link href="/Announcements" className="py-2">Announcements</Link>
          <Link href="/Achievements" className="py-2">Achievements</Link>
          <Link href="/Products" className="py-2">Products</Link>
          <Link href="/About-us" className="py-2">About us</Link>
        </div>
      )}
    </nav>
  )
}