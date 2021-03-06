import { useState } from 'react'

function Barbecue(){
const [adult, setAdult] = useState()
const [adults, setAdults] = useState([undefined])

const [kid, setKid] = useState()
const [kids, setKids] = useState([undefined])

const [duration, setDuration] = useState()
const [durations, setDurations] = useState([undefined])

const [resultado, setResultado] = useState()

function calculation(){
  setAdults([adults, adult])
  setKids([kids, kid])
  setDurations([durations, duration])
  const inputAdults = adults.pop(adult)
  const inputKids = kids.pop(kid)
  const inputDurations = durations.pop(duration)
 
  const todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + (meatPerPerson(inputDurations) / 2 * inputKids)
  const todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults
  const todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + (meatPerPerson(inputDurations) / 2 * inputKids)

  const screenDiv = (<div>
    <p>{todalAmountOfMeat / 1000}Kg de Carne </p>
    <p>{Math.ceil(todalAmountOfBeer / 355)} Cerveja</p> 
    <p>{Math.ceil(todalAmountOfDrink / 2000)} Garrafa de bebida</p> 
  </div>)

  const screenAlert = (<div>
    <p>Preencha todos os campos!</p>
  </div>)

  const welcome = (
    <div>
    <p>Welcome!</p>
  </div>
  )

  //console.log(inputAdults, inputKids, inputDurations)

  if(typeof inputAdults === 'undefined'  && typeof inputKids === 'undefined' && typeof inputDurations === 'undefined'){
    return setResultado(welcome)
  }if(inputAdults > 0 || inputKids > 0 || inputDurations > 0){
    return setResultado(screenDiv)
  }else{
    setResultado(screenAlert)
  }
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
        <h1 className='barbecue'>Churrascometro</h1>
        <div className='form'>
          <p className='formP'>Quantidade de adultos</p>
          <input className='inputGlobal' value={adult} onChange={(e)=>setAdult(e.target.value)} name='adults' type='number' placeholder='Adultos'  />
        </div>
        
        <div className='form'>
          <p className='formP'>Quantidade de crianças</p>
          <input className='inputGlobal' value={kid} onChange={(e)=>setKid(e.target.value)} name='kids' type='number' placeholder='crianças'  />
        </div>

        <div className='form'>
          <p className='formP'>Duração do churrasco</p>
          <input className='inputGlobal' value={duration} onChange={(e)=>setDuration(e.target.value)} name='duratio' type='number' placeholder='Duração'  />
        </div>

        <input className='calculationGlobal' type='button' onMouseUp={calculation} onMouseDown={calculation} value='Calculation' />

        <div id='textBarbecue' >{resultado}</div>
      </div>
)
}

export default Barbecue