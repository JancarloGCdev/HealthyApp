"use client"
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">Wellness<span className='font-bold'>Life</span></h1>
        <nav>
          <Link href="/" className="px-2">Home</Link>
          <Link href="/about" className="px-2">About</Link>
        </nav>
      </div>
    </header>
  )
}
