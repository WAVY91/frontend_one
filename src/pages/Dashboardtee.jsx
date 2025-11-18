import React, { useEffect, useState } from 'react'

const Dashboardtee = () => {

    const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <div>
      <h3>Welcome, {user?.firstName} {user?.lastName}</h3>
      <p>You are now logged in successfully!</p>
    </div>
    </>
  )
}

export default Dashboardtee