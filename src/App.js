import './App.css';
import {useState} from 'react';
function App() {
  
  const [input,setInput]=useState('');
  const [tasks,setTasks] = useState(['Design To-Do App']);

  function handleChange(e){
    setInput(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    setTasks([...tasks,input]);
    setInput('');
  }

  function handleDelete(task){
    setTasks(tasks.filter(i => i!=task))
  }

  return (
    
    <div className='body'>
      <div className='App'>
        <h2>My Tasks</h2>
        <div className='tasks'>
          {tasks.map((task)=>(
            <form className='task'>
              <div >{task} <button type='button'onClick={()=>handleDelete(task)} >-</button></div>
            </form>
          ))}
        </div>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={input}/>
            <button>+</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
