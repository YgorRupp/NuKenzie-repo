import React from 'react'
import "./styles.css"
import logoNuKenzie from "../../../src/assets/Nu Kenzie.svg"
import secondImage from "../../../src/assets/Group 262.svg"

const LandingPage = ({setLogin}) => {
  return (
    <div className='container'>
      <div className='containerLeft'>
        <img src={logoNuKenzie} alt="" />
        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rápida e segura</p>
        <button onClick={ () => setLogin(true)}>Iniciar</button>
      </div>
      <div className='containerRight'>
        <img src={secondImage} alt="" />
      </div>
    </div>
  )
}

export default LandingPage