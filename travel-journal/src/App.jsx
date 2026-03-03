import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from "./data.js" 


function App() {
  const dataArray = data.map((entry) => {
      return(
        <Entry 
          img={{
            src: entry.img.src,
            alt: entry.img.alt
          }}
          country={entry.country.toUpperCase()}
          maps={entry.googleMapsLink}
          attractionSite={entry.title}
          dates={entry.dates}
          description={entry.text}

          //the above lines of code can be summarzed like {...entry} instead of writing every prop and its corosponding data value
        />
      )
  })

  return (
    <>
      <Header />
      {dataArray}
    </>
  )
}

export default App
