import React from 'react'
import "./Header.css";

function scrolll() {
  var right = document.querySelector(".scroll-images");
  right.scrollBy(-550, 0)
}
function scrollr() {
  var left = document.querySelector(".scroll-images");
  left.scrollBy(550, 0)
}

function Header() {
  return (
    <>
      <div className='main'>
        <h1 className='head'>New this week</h1>
        <div className='arrow-main'>
          <div className='arrow-right'>
            <button className='icon' onClick={scrolll}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></button>
          </div>
          <div className='arrow-left'>
            <button className='icon' onClick={scrollr}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header