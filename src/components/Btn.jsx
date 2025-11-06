import React from 'react'

const Btn = ({title, color, text}) => {
  return (
    <>
    <button className={`${color} ${text}`}>
        {title}
    </button>
    </>
  )
}

export default Btn