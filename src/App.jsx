import { useState } from 'react'
import quoteDb from "./db/quote.json"
import QuoteButton from './components/QuoteButton'
import QuoteBox from './components/QuoteBox'
import colors from "./db/colors.js"


function App() {
  
 
  const getRandomElementFromArray = (array) =>{
    const randomIndex = Math.floor(array.length*Math.random())
    return array[randomIndex]
  }
  const [quote, setQuote] = useState(getRandomElementFromArray(quoteDb))
  const[color, setColor] = useState(getRandomElementFromArray(colors))

  const getNewValues = () =>{
    const newColor =getRandomElementFromArray(colors)
    const newQuote  = getRandomElementFromArray(quoteDb)
    setQuote(newQuote)
    setColor(newColor)
  }
  const backgroundObject ={
    backgroundColor : color

  }
  const colorObjet ={
     color : color
  }
  console.log(quote)
  return (
    <div className="App" style ={backgroundObject}>
    <QuoteBox
      quote={quote}
      getNewValues={getNewValues}
      backgroundObject={backgroundObject}
      colorObject={colorObjet}
      />
    </div>
  )
}

export default App
