import ListItem from "./Listitem"
const links = [
  {
    name: 'Google',
    url: 'http://google.com'
  },
  {
    name: 'Twitter',
    url: 'http://twitter.com'
  },
  {
    name: 'Facebook',
    url: 'http://facebook.com'
  },
  {
    name: 'Intagram',
    url: 'http://instagram.com',
  }
]
function App() {
  return (
    <div>
      <h1 align="center">LINKS</h1>
      <hr />
      <ul>
        {
          links.map((link) => {
            <ListItem
              key={link.name}
              name={link.name}
              url={link.name} />
          })
        }
      </ul>
    </div>
  )
}

export default App
