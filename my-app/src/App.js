
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const [limit,setLimit]=useState(0)
  useEffect(() => {
    axios.get('http://localhost:4000/' )
      .then((response) => setData(response.data))
  }, [])
  return (
    <div className="App"> 
  
       {data.map((item)=>{
        return <h1 className='title'> {item.title} <img className='images' src={item.url} /> </h1>
       })}
      
    </div>
   
  );
}

export default App;
