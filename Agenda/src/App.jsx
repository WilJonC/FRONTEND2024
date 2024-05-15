import ListItem from "./ListItem"
const personas = [
  {
    nombre: 'WILLIAM',
    apellidos: 'CARRILLO',
    email: 'WilCar@gmail.com',
    telefono: '2581472536',

  },
  {
    nombre: 'JONATHAN',
    apellidos: 'OLIVERA',
    email: 'JonOli@gmail.com',
    telefono: '2365694785',

  },
  {
    nombre: 'ANTONIO',
    apellidos: 'VARGAS',
    email: 'AntVar@gmail.com',
    telefono: '3692581245',

  },
  {
    nombre: 'MIGUEL',
    apellidos: 'JIMENEZ',
    email: 'MigJim@gmail.com',
    telefono: '7894565869',

  }
]
function App() {

  return (
    <div>
      <h1 align="center">AGENDA</h1>
      <hr />
      <ul>
        {personas.map((persona) => (
          <ListItem
            key={persona.email}
            persona={persona}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
