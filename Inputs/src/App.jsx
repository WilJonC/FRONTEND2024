import { useForm } from "./Hooks/userForm";
import './App.css';

const InputsData = {
  username: '',
  password: '',
  checkbox: false,
  color: '#ffffff',
  date: '',
  datetimeLocal: '',
  email: '',
  hidden: '',
  month: '',
  number: '',
  passwordInput: '',
  radio: '',
  range: 50, // Puedes ajustar el valor inicial según el rango que establezcas
  search: '',
  tel: '',
  text: '',
  time: '',
  url: '',
  week: ''
};

function App() {
  const [values, handleInputChange, inputsReset] = useForm(InputsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values); // Aquí puedes manejar los valores del formulario como necesites
    inputsReset();
  };

  return (
    <>
      <div className='main-container'>
        <h1 align="center">INPUT</h1>
        <hr />
        <hr />
        <br></br>
        <form onSubmit={handleSubmit} className='form-container'>
          <div>
            <label htmlFor="username" className="label">Username</label>
            <input onChange={handleInputChange} id="username" name="username" type="text" value={values.username} />
          </div>
          <div>
            <label htmlFor="password" className="label">Password</label>
            <input onChange={handleInputChange} id="password" name="password" type="password" value={values.password} />
          </div>
          
          {/* Nuevos inputs agregados */}
          <div>
            <label htmlFor="checkbox" className="label">Checkbox</label>
            <input onChange={handleInputChange} id="checkbox" name="checkbox" type="checkbox" checked={values.checkbox} />
          </div>
          <div>
            <label htmlFor="color" className="label">Color</label>
            <input onChange={handleInputChange} id="color" name="color" type="color" value={values.color} />
          </div>
          <div>
            <label htmlFor="date" className="label">Date</label>
            <input onChange={handleInputChange} id="date" name="date" type="date" value={values.date} />
          </div>
          <div>
            <label htmlFor="datetimeLocal" className="label">Datetime-Local</label>
            <input onChange={handleInputChange} id="datetimeLocal" name="datetimeLocal" type="datetime-local" value={values.datetimeLocal} />
          </div>
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input onChange={handleInputChange} id="email" name="email" type="email" value={values.email} />
          </div>
          <div>
            <label htmlFor="month" className="label">Month</label>
            <input onChange={handleInputChange} id="month" name="month" type="month" value={values.month} />
          </div>
          <div>
            <label htmlFor="number" className="label">Number</label>
            <input onChange={handleInputChange} id="number" name="number" type="number" value={values.number} />
          </div>
          <div>
            <label htmlFor="passwordInput" className="label">New Password</label>
            <input onChange={handleInputChange} id="passwordInput" name="passwordInput" type="password" value={values.passwordInput} />
          </div>
          <div>
            <label htmlFor="radio" className="label">Radio</label>
            <input onChange={handleInputChange} id="radio" name="radio" type="radio" value={values.radio} />
          </div>
          <div>
            <label htmlFor="range" className="label">Range</label>
            <input onChange={handleInputChange} id="range" name="range" type="range" value={values.range} />
          </div>
          <div>
            <label htmlFor="search" className="label">Search</label>
            <input onChange={handleInputChange} id="search" name="search" type="search" value={values.search} />
          </div>
          <div>
            <label htmlFor="tel" className="label">Telephone</label>
            <input onChange={handleInputChange} id="tel" name="tel" type="tel" value={values.tel} />
          </div>
          <div>
            <label htmlFor="text" className="label">Text</label>
            <input onChange={handleInputChange} id="text" name="text" type="text" value={values.text} />
          </div>
          <div>
            <label htmlFor="time" className="label">Time</label>
            <input onChange={handleInputChange} id="time" name="time" type="time" value={values.time} />
          </div>
          <div>
            <label htmlFor="url" className="label">URL</label>
            <input onChange={handleInputChange} id="url" name="url" type="url" value={values.url} />
          </div>
          <div>
            <label htmlFor="week" className="label">Week</label>
            <input onChange={handleInputChange} id="week" name="week" type="week" value={values.week} />
          </div>
          <div className="form-footer">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
        <div className='extra-container'>
          <h3>INICIO DE SESION CON LAS SIGUIENTES CREDENCIALES:</h3>
          <p>USERNAME:{values.username}</p>
          <p>PASSWORD:{values.password}</p>
          <p>CHECKBOX:{values.checkbox}</p>
          <p>COLOR:{values.color}</p>
          <p>DATE: {values.date}</p>
          <p>DATETIME-LOCAL: {values.datetimeLocal}</p>
          <p>EMAIL: {values.email}</p>
          <p>MONTH: {values.month}</p>
          <p>NUMBER: {values.number}</p>
          <p>NEW PASSWORD: {values.newpassword}</p>
          <p>RADIO: {values.radio}</p>
          <p>RANGE: {values.range}</p>
          <p>SEARCH: {values.search}</p>
          <p>TELEPHONE: {values.telephone}</p>
          <p>TEXT: {values.text}</p>
          <p>TIME: {values.time}</p>
          <p>URL: {values.url}</p>
          <p>WEEK: {values.week}</p>
        </div>
    </>
  );
}

export default App;
