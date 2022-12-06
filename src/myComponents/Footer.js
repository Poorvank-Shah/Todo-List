import React from 'react'
import './footer.css'

export const Footer = () => {
  // footerstyle an object
  let footerStyle = {
    border : "4px solid red",
  }
  return (
    <footer className='bg-dark text-light py-2' style={footerStyle}>
        <p className="bg-dark text-center m-0">
          Copyright &copy; MyTodosList.com
        </p>
    </footer>
  )
}
