import React from 'react'
import Button from '../components/Button'
import { useState } from 'react'

const Home = () => {

  const [myAge, setmyAge] = useState(0)
  const [myName, setmyName] = useState('cena')
  const [count, setCount] = useState(0)
  // const myAge = 0
  const increaseBtn = () => {
    setmyAge (myAge + 1)
    setmyName('Tomi')
    // myAge++ ;
    // show.innerHTML = myAge
    // // alert('sdfghjk')
  }
  const decreaseBtn = () => {
    setmyAge(myAge - 1)
    setmyName('cena')
    // myAge--;
    // show.innerHTML = myAge
    // // alert('asdcfvb')
  }
  return (
    <div>
        <h3>This is my new Home Page</h3>
        <p>Click the button below to register</p>
        <Button/>
        <p>you clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>Click Me</button>
        <button onClick={()=>increaseBtn()}>increase</button>
        <p>{myAge}</p>
        <p>{myName}</p>
        <button onClick={decreaseBtn}>Decrease</button>
    </div>
  )
}

export default Home