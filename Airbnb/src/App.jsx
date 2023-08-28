import { useState } from 'react'
import Navbar from './components/navigation/Navbar'
import Grid from './components/grid/Grid'
import Card from './components/card/Card'
import Contact from './components/contact/Contact'
import Joke from './components/joke/Joke'

function App() {

  return (
    <div>
      {/* the problem with rendering four instances of the same component,
            e.g. the contact cards below is:
            - broken structure (the contents will be displayed in different lines, one component after the other)
            - repetition
            - time consumption
            - rigidity (the data must be hard coded) */}
      <Joke 
        setup='I got my daughter a fridge for her birthday.'
        punchline="I can't wait to see her face light up when she opens it."
        rating={1}
        isPun={true}
        comments={[{msg:"tester",by:"janja"}]}
      />
      <Joke 
        setup='How did the hacker escape the police?'
        punchline='He just ransomware!'
        isPun={true}
      />
      <Joke 
        setup="Why don't pirates travel on mountain roads?"
        punchline='Scurvy.'
      />
      <Joke 
        setup='Why do bees stay in the hive in the winter?'
        punchline='Swarm.'
      />
      <Joke 
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
      <Joke 
      punchline="It's hard to explain puns to kleptomaniacs because 
      they always take things literally." 
      />
    </div>
  )
}

export default App
