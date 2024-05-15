import List from "./list"
import TaskModal from "./TaskModal"

const taskList = [
  {
    id: 1,
    task: 'Estudiar',
    limit: '13:00',
    description:'Estudiar para el examen',
    done:false
  },
  {
    id: 2,
    task: 'Practicar',
    limit: '15:00',
    description:'Estudiar para el partido',
    done:false
  },
  {
    id: 3,
    task: 'Cantar',
    limit: '17:00',
    description:'Vocalizar rapido',
    done:false
  },
];

function App() {
  return(
    <div className="container">
    <h1> TO DO LIST</h1>
    <hr/>
    <List taskList={taskList}/>
    <hr />
    <div className="text-end">
      <TaskModal taskList={taskList}/>
      <button 
      className="btn btn-outline-primary"
      data-bs-target='#taskModal'
      data-bs-toggle='modal'
      >
        <i className="bi bi-plus-lg"></i>
        ADD
      </button>
    </div>
    </div>
  )
  
}

export default App
