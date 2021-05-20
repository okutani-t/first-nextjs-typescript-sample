import React, { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>© 2021 Next.js + TypeScript Sample</span>
    </footer>
  </>
)

export default Layout
