import { useState, FormEvent } from 'react'
import './App.css'

/*
  Calculo: alcool / gasolina
  E se o resultado for menor que 0.7 compensa usar alcool
*/


function App() {

  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);

  function calcular(event: FormEvent) {
    event.preventDefault();
    const calculo = (alcoolInput / gasolinaInput)
    if(calculo <= 0.7) {
      alert("Compensa usar alcool")
    } else {
      alert("compensar usar gasolina")
    }
    
  }

  return (
    <div>
      <main className='container'>
        <img className='logo' src="" alt="logo do projeto" />
        <h1 className='title'>Qual a melhor opção?</h1>
        <form className='form' onSubmit={calcular}>
          <label>Álcool (preço por litro):</label>
          <input 
            className='input' 
            type="number" 
            placeholder='0.00' 
            min="1" 
            step="0.01" 
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro):</label>
          <input 
            className='input' 
            type="number" 
            placeholder='0.00' 
            min="1" 
            step="0.01" 
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input className='button' type="submit" value="Calcular"/>
        </form>
      </main>
    </div>
  )
}

export default App
