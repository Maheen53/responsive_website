import React from 'react'
import Hero from './components/Hero'
import Project from './components/Project'
import Extention from './components/Extention'
import Customize from './components/Customize'
import Choose from './components/Choose'
import Work from './components/Work'
import Data from './components/Data'
import Sponser from './components/Sponser'
import Favorite from './components/Favorite'
import Client from './components/Client'

function page() {
  return (
    <div>

      <Hero/>
      <Project/>
      <Extention/>
      <Customize/>
      <Choose/>
      <Work/>
      <Data/>
      <Sponser/>
      <Favorite/>
      <Client/>
      
    </div>
  )
}

export default page
