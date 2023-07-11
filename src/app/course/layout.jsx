import Link from "next/link";
import React from 'react'

export const metadata = {
    title: 'Course Information',
    description: 'About the courses we offer'
}

export default function layout({children}) {
  return (
    <div className="grid grid-cols-2[200px_600px] gap-2 ">
        <nav className="text-left">
            <ul>
                <Link href='/course/frontend'>
                <li>Frontend</li>
                </Link>
                <Link href='/course/backend'>
                <li>Backend</li>
                </Link>
            </ul>
        </nav>
        <div>
        {children}
        </div>
    </div>
  )
}
