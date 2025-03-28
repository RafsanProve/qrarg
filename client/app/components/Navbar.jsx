"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const link_style_desktop = "transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 px-3 py-4 h-full flex flex-col items-center gap-1 relative"
  const link_style_mobile = "transition duration-400 ease-in-out hover:bg-white hover:text-zinc-800 py-2 w-full flex flex-col items-center gap-1 relative"
  const underline = <span className="rounded-md bottom-2 w-4/5 h-1 bg-white"></span>

  // Function to check if a link is active
  const isActive = (path) => {
    return pathname === path
  }

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
          <Link href="/" className={`${link_style_desktop} ${isActive('/') ? 'font-bold' : ''}`}>
            Home
            {isActive('/') && underline}
          </Link>
          <Link href="/expertise" className={`${link_style_desktop} ${isActive('/expertise') ? 'font-bold' : ''}`}>
            Expertise
            {isActive('/expertise') && underline}
          </Link>
          <Link href="/mission-vision" className={`${link_style_desktop} ${isActive('/mission-vision') ? 'font-bold' : ''}`}>
            Mission & Vision
            {isActive('/mission-vision') && underline}
          </Link>
          <Link href="/research" className={`${link_style_desktop} ${isActive('/research') ? 'font-bold' : ''}`}>
            Research
            {isActive('/research') && underline}
          </Link>
          <Link href="/products" className={`${link_style_desktop} ${isActive('/products') ? 'font-bold' : ''}`}>
            Products
            {isActive('/products') && underline}
          </Link>
          <Link href="/publications" className={`${link_style_desktop} ${isActive('/Publications') ? 'font-bold' : ''}`}>
            Publications
            {isActive('/publications') && underline}
          </Link>
          <Link href="/members" className={`${link_style_desktop} ${isActive('/Members') ? 'font-bold' : ''}`}>
            Members
            {isActive('/members') && underline}
          </Link>
          <Link href="/about-us" className={`${link_style_desktop} ${isActive('/about-us') ? 'font-bold' : ''}`}>
            About us
            {isActive('/about-us') && underline}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center lg:hidden pb-4">
          <Link href="/" className={`${link_style_mobile} ${isActive('/') ? 'font-bold' : ''}`}>
            Home
            {isActive('/') && underline}
          </Link>
          <Link href="/expertise" className={`${link_style_mobile} ${isActive('/expertise') ? 'font-bold' : ''}`}>
            Expertise
            {isActive('/expertise') && underline}
          </Link>
          <Link href="/mission-vision" className={`${link_style_mobile} ${isActive('/mission-vision') ? 'font-bold' : ''}`}>
            Mission & Vision
            {isActive('/mission-vision') && underline}
          </Link>
          <Link href="/research" className={`${link_style_mobile} ${isActive('/research') ? 'font-bold' : ''}`}>
            Research
            {isActive('/research') && underline}
          </Link>
          <Link href="/products" className={`${link_style_mobile} ${isActive('/products') ? 'font-bold' : ''}`}>
            Products
            {isActive('/products') && underline}
          </Link>
          <Link href="/Publications" className={`${link_style_mobile} ${isActive('/Publications') ? 'font-bold' : ''}`}>
            Publications
            {isActive('/Publications') && underline}
          </Link>
          <Link href="/Members" className={`${link_style_mobile} ${isActive('/Members') ? 'font-bold' : ''}`}>
            Members
            {isActive('/Members') && underline}
          </Link>
          <Link href="/about-us" className={`${link_style_mobile} ${isActive('/about-us') ? 'font-bold' : ''}`}>
            About us
            {isActive('/about-us') && underline}
          </Link>
        </div>
      )}
    </nav>
  )
}
