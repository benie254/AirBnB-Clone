import { useState } from 'react'
import Navbar from './components/navigation/Navbar'
import Grid from './components/grid/Grid'
import Card from './components/card/Card'
import Contact from './components/contact/Contact'
import Joke from './components/joke/Joke'
import JokesData from './JokesData'
import AirbnbData from './AirbnbData'


  function App() {
    const airBnb = AirbnbData.map(
      bnb => 
      <Card
        key={bnb.id}
        id={bnb.id}
        title={bnb.title}
        description={bnb.description}
        price={bnb.price}
        coverImg={bnb.coverImg}
        stats={bnb.stats}
        location={bnb.location}
        openSpots={bnb.openSpots}
      />
    )
  return (
    <div className="cards-list">
      {airBnb}
    </div>
  )
}

export default App
