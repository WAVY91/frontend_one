import React from 'react'
import Btn from '../components/Btn'

const Props = () => {
  return (
    <>
    <Btn title='change' color='btn btn-danger' text='text-info'/>
    <Btn title='Beautify' color='btn btn-primary' text='text-warning'/>
    <Btn title='Decorate' color='btn btn-dark' text='text-light'/>
    <Btn title='Add' color='btn btn-info' text='text-primary'/>
    <Btn title='Update' color='btn btn-warning' text='text-danger'/>
    <Btn title='Delete' color='btn btn-outline-primary' text='text-dark'/>
    {/* <Btn title='change' color='' text=''/>
    <Btn title='change' color='' text=''/> */}
    </>
  )
}

export default Props