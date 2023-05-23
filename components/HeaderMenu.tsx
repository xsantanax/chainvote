import React from 'react'

function HeaderMenu({ closeMenu }: { closeMenu: any }) {
  return (
    <div className='col items-center pt-48 w-full h-full gap-8'>
      <div
        className='headerItem text-center'
        onClick={() => {
          window.location.href = '#'
          closeMenu()
        }}
      >
        Home
      </div>

      <div
        className='headerItem text-center'
        onClick={() => {
          window.location.href = '#about'
          closeMenu()
        }}
      >
        About
      </div>

      <div
        className='headerItem text-center'
        onClick={() => {
          window.location.href = '#experience'
          closeMenu()
        }}
      >
        Experience
      </div>

      <div
        className='headerItem text-center'
        onClick={() => {
          window.location.href = '#contact'
          closeMenu()
        }}
      >
        Contact
      </div>
    </div>
  )
}

export default HeaderMenu
