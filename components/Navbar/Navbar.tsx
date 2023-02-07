import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
        <nav>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="21" viewBox="0 0 58 21"><g><g><path d="M16.033 11.648c-3.514.94-6.356.818-7.935-.367-4.146-3.148-.988-9.403.157-11.284C6.242 2.287 4.228 4.576 2.65 7.07.202 10.994-.864 15.287.794 18.026c3 4.988 10.146 2.698 14.726.695L58 .161z"></path></g></g></svg>
          </div>
            <menu>
                <Link href='/'>
                <p>Home</p>
                </Link>
                <Link href='/about'>
                <p>About</p>
                </Link>
                <Link href='/product/1'>
                <p>product</p>
                </Link>
            </menu>
            <style>{`
              nav{
                display:flex;
                color:black;
                align-items:center;
                margin:0 20px;
                justify-content: space-between;
              }
              menu{
                display:flex;
                gap:20px
              }
              a{
                color: black
                transition: all 5s;
              }
              a:hover{
                color: red
              }
            `}</style>
        </nav>
  )
}

export default Navbar