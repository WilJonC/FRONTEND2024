import { useState } from "react";

function App() {
  const [cuenta, setCuenta] = useState(0)


  const handleButtonIncrementar = () => {
    //cuenta = cuenta + 1;
    setCuenta(cuenta + 1)
  }
  //const handleButtonDecrementar = () => {
    //cuenta = cuenta + 1;
    //setCuenta(cuenta - 1)
  //}

  return (
    <div>
      <h1 align="center">CONTADOR</h1>
      <hr />
      <h2>{cuenta}</h2>
      <button
        onClick={handleButtonIncrementar}>
        INCREMENTAR
      </button>
      <button onClick={() => setCuenta(cuenta-1)}>
        DECREMENTAR
      </button>
      <button onClick={() => setCuenta(cuenta - cuenta)}>
        RESET
      </button>
    </div>
  )
}
export default App
