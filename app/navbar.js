import Link from "next/link";

export default function Navbar() {
  return (
    <h1 className='font-bold underline'>
      <Link href="/">
        Home
      </Link> 
      <Link href="/about">
        About
      </Link> 
      <Link href="/contacts">
        Contacts
      </Link> 
    </h1>
  )
  
}