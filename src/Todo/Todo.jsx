import {useState, useEffect} from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [dateTime, setDatetime] = useState();

  const todos = 'tasks';
  const [task, setTask] = useState(()=>{
    const todo = localStorage.getItem(todos);
    if(!todo) return [];
    return JSON.parse(todo)
  });
 

    localStorage.setItem('tasks',JSON.stringify(task));

  
  const handleTask = (value) =>{
    setInputValue(value);
  
  };


  const addTask = (e) => {
    e.preventDefault();
    if(!inputValue) return;
    if(task.includes(inputValue)){
      setInputValue("");
      return;
    }
    setTask((prev) => [...prev, inputValue])
  
    setInputValue(""); 
  }

  const handleClear = () =>{
    setTask([]);
  }

  const handleDelete = (value) =>{
    console.log(value);
    const updatedTask = task.filter((item) => item !== value);
    setTask(updatedTask);
  }
  useEffect(() => {
    const interval = setInterval(() => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    setDatetime(`${date}-${time}`)
  }, 1000);
   
  return() => clearInterval(interval);
  }, [])

  return (
    <>
    <section className='text-center m-30' >
      <h1 className='text-[#444444] font-bold text-5xl'>Todo List</h1>
    <div className='mt-10 text-2xl text-[#444444]'>
      {dateTime}
    </div>
    <div>
      <input type='text'
      className='task text-[#444444] mt-15 border-2 rounded-2xl p-2 w-70'
      value={inputValue}
      onChange={(e) =>{handleTask(e.target.value)}}/>
      <button className='add-task !bg-[#A5A5A5] rounded-2xl p-2' onClick={addTask}>Add Task</button>
    </div>
      <section className='todo-list'>
        <ul className=''>
          {task.map((item, index) => {
            return(
            <li key={index} className="flex justify-center items-center gap-4 mt-4">
              <span className='border !bg-[#f1f0f0] hover:!bg-[#c4c3c3] rounded-2xl p-2 w-60'>{item}</span>
              <button className='cursor-pointer'><FaCheck /></button>
              <button className='delete-btn cursor-pointer' onClick={() => handleDelete(item)}>< MdDeleteForever size={30}/></button>
            </li>
            );
           })}
        </ul>
      </section>
      <div>
        <button className={`clear-all mt-10 p-2.5 rounded-2xl !bg-red-500 ${task.length === 0 ? 'cursor-not-allowed' : ''}`}
        onClick={handleClear}>Clear All</button>
      </div>
    </section>
    </>
  )
}

export default Todo
