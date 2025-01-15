import { useState, FormEvent } from 'react'
import './App.css'

/*
  Calculo: alcool / gasolina
  E se o resultado for menor que 0.7 compensa usar alcool
*/

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number
}

function App() {

  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();
    const calculo = (alcoolInput / gasolinaInput)
    if(calculo <= 0.7) {
      setInfo({
        title: "Compensa usar ácool",
        gasolina: gasolinaInput,
        alcool: alcoolInput
      });
    } else {
      setInfo({
        title: "Compensa usar gasolina",
        gasolina: gasolinaInput,
        alcool: alcoolInput
      });
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

        <section className='result'>
          <h2 className='result-title'>{info?.title}</h2>
          <span>Álcool {info?.alcool}</span>
          <span>Gasolina {info?.gasolina}</span>
        </section>
      </main>
    </div>
  )
}

export default App
