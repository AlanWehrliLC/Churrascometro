import { useState } from 'react'

function Barbecue(){
const [adults, setAdults] = useState([])
const [adult, setAdult] = useState()

const [kids, setKids] = useState([])
const [kid, setKid] = useState()

const [durations, setDurations] = useState([])
const [duration, setDuration] = useState()

const [resultado, setResultado] = useState()

function calculation(){
  setAdults([adults, adult])
  setKids([kids,kid])
  setDurations([durations,duration])

  const inputAdults = adults.shift(adult)
  const inputKids = kids.shift(kid)
  const inputDurations = durations.shift(duration)

  const todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + (meatPerPerson(inputDurations) / 2 * inputKids)
  const todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults
  const todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + (meatPerPerson(inputDurations) / 2 * inputKids)

  const screenDiv = `
  <p>${todalAmountOfMeat / 1000}Kg de Meat<p/>
  <p>${Math.ceil(todalAmountOfBeer / 355)} Beer Cans<p/>
  <p>${Math.ceil(todalAmountOfDrink / 2000)} Drink Bottle<p/>
  `
  return setResultado(<div>
    <p>{todalAmountOfMeat / 1000}Kg de Meat</p>
    <p>{Math.ceil(todalAmountOfBeer / 355)} Beer Cans</p> 
    <p>{Math.ceil(todalAmountOfDrink / 2000)} Drink Bottle</p> 
  </div>)
}

function meatPerPerson(duration){
  if(duration >= 6){
    return 650
  }else{
    return 400
  }
}

function beerPerPerson(duration){
  if(duration >= 6){
    return 2000
  }else{
    return 1200
  }
}

function drinkPerPerson(duration){
  if(duration >= 6){
    return 1500
  }else{
    return 1000
  }
}


return(
    <div className='container'>
        <h1 className='barbecue'>Barbecue</h1>
        <input className='inputGlobal' value={adult} onChange={(e)=>setAdult(e.target.value)} name='adults' type='number' placeholder='Adults'  />
        <input className='inputGlobal' value={kid} onChange={(e)=>setKid(e.target.value)} name='kids' type='number' placeholder='Kids'  />
        <input className='inputGlobal' value={duration} onChange={(e)=>setDuration(e.target.value)} name='duratio' type='number' placeholder='Duratio'  />
        <button className='calculationGlobal' onClick={calculation}>Calculation</button>
        {resultado}
      </div>
)
}

export default Barbecue