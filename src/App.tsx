import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <main className='container'>
        <img className='logo' src="" alt="logo do projeto" />
        <h1 className='title'>Qual a melhor opção?</h1>
        <form className='form'>
          <label>Álcool (preço por litro):</label>
          <input className='input' type="number" placeholder='0.00' min="1" step="0.01" required/>

          <label>Gasolina (preço por litro):</label>
          <input className='input' type="number" placeholder='0.00' min="1" step="0.01" required/>

          <input className='button' type="submit" value="Calcular"/>
        </form>
      </main>
    </div>
  )
}

export default App
