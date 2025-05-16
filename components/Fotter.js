import React from 'react'

const Fotter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
        <footer className='footer flex text-white bg-black justify-center px-4 h-10 items-center'>
        <p>Copyright &copy; {currentYear} Get me a chai - All rights reserved</p>
        </footer>
    </div>
  )
}

export default Fotter