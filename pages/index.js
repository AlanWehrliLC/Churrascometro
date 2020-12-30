import '../styles'

import React from 'react'

function Barbecue(){
const adults = window.document.getElementById('adults').value
const kids = window.document.getElementById('kids').value
const duration = window.document.getElementById('duration').value
const result = window.document.getElementById('result')

function calculation(){
  const inputAdults = adults
  const inputKids = kids
  const inputDuratio = duration

  const todalAmountOfMeat = meatPerPerson(inputDuratio) * inputAdults + (meatPerPerson(inputDuratio) / 2 * inputKids)
  const todalAmountOfBeer = beerPerPerson(inputDuratio) * inputAdults
  const todalAmountOfDrink = drinkPerPerson(inputDuratio) * inputAdults + (meatPerPerson(inputDuratio) / 2 * inputKids)

  result.innerHTML = `<p>${todalAmountOfMeat / 1000}Kg de Meat<p/>`
  result.innerHTML += `<p>${Math.ceil(todalAmountOfBeer / 355)} Beer Cans<p/>`
  result.innerHTML += `<p>${Math.ceil(todalAmountOfDrink / 2000)} Drink Bottle<p/>`
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
        <input className='inputGlobal' id='adults' name='adults' type='number' placeholder='Adults' />
        <input className='inputGlobal' id='kids' name='kids' type='number' placeholder='Kids' />
        <input className='inputGlobal' id='duration' name='duration' type='number' placeholder='Duration (h)' />
        <button className='calculationGlobal' onClick={calculation}>Calculation</button>
        <div id='result'></div>
      </div>
)

}

export default Barbecue