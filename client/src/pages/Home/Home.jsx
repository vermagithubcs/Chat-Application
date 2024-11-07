import React from 'react'
import './Home.css'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      Home

      {/* Message Components */}
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default Home
