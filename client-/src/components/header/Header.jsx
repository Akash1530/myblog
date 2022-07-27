import React from 'react'
import "./header.css"
export default function Header() {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">Share & Care</span>
      <span className="headerTitleLg">Blog</span>
    </div>
    <img
      className="headerImg"
      src="https://images.unsplash.com/photo-1656870680065-fb37a0dc8f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
  </div>
  )
}
