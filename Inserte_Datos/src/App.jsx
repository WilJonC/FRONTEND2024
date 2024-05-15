const persona =  {
  nombre : "WILLIAM JONATHAN CARRILLO OLIVERA",
  edad : 21,
  fenacimiento : "27/10/2002",
  lunacimiento : "LOMA BONITA, OAXACA",
  profesion : "INGENIERO EN SISTEMAS",
  signosodiacal: "CAPRICORNIO",
  pasatiempos : [
    "CORRER",
    "JUGAR",
    "ALGO",
    "DORMIR",
    "PINTAR"
]
}
function App() {
  return (
    <div>
      <h1 align="center">INFORMACION PERSONAL</h1>
      <hr/>
        <ul>
          <li>NOMBRE: {persona.nombre}</li><br></br>
          <li>EDAD: {persona.edad}</li><br></br>
          <li>FECHA DE NACIMIENTO: {persona.fenacimiento}</li><br></br>
          <li>LUGAR DE NACIMIENTO: {persona.lunacimiento}</li><br></br>
          <li>PROFESIÓN: {persona.profesion}</li><br></br>
          <li>SIGNO SODIACAL: {persona.signosodiacal}</li><br></br>
          <li>PASATIEMPOS
            <ol type = "1"><br></br>
              <li>{persona.pasatiempos[0]}</li>
              <li>{persona.pasatiempos[1]}</li>
              <li>{persona.pasatiempos[2]}</li>
              <li>{persona.pasatiempos[3]}</li> 
              <li>{persona.pasatiempos[4]}</li>      
            </ol> 
          </li>
        </ul> 
    </div>
  )
}

export default App
