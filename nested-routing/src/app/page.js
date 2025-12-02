import Link from 'next/link'
import React from 'react'

export function Page() {
  return (
    <div><h1>home
    </h1>
    
    <Link href="/services">Service</Link>
    </div>
  )
}

export default Page