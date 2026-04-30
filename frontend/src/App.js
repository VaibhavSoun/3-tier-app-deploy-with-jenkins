
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");

  const fetchTasks = () => {
    axios.get('/tasks').then(res => setTasks(res.data));
  };

  const addTask = () => {
    axios.post('/tasks', { name }).then(fetchTasks);
  };

  useEffect(fetchTasks, []);

  return (
    <div style={{padding:20}}>
      <h1>3 Tier App</h1>
      <input onChange={(e)=>setName(e.target.value)} />
      <button onClick={addTask}>Add</button>
      {tasks.map((t,i)=><p key={i}>{t.name}</p>)}
    </div>
  );
}

export default App;
