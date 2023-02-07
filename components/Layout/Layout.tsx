import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import { Props } from 'next/script'

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <footer className='footer-container'>This is the footer</footer>
        <style jsx>{`
            .footer-container{
                background: black;
                color: white;
                text-align:center
            }
        `}</style>
    </div>
  )
}

export default Layout