import React from 'react'
import '../estilos/contador.css'

export default function Contador({ numeroDeClics }) {
  return (
    <div className='contador'>
      {numeroDeClics}
    </div>
  )
}
