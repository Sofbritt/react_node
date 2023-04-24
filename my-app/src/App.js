
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';




function App() {
  const [data, setData] = useState([])
  const [form, setForm] = useState(false);
  const [name, setName] = useState('')
  const [lastName, setlastName] = useState('')
  const [age, setAge] = useState('')
  const [limit, setLimit] = useState(0)



  useEffect(() => {
    axios.get('http://localhost:4200/')
      .then((response) => setData(response.data))
  }, [limit])



  function post() {


    axios.post('http://localhost:4200/registration', {
      name,
      lastName,
      age
    })

      .then((response) => {
        setData(response.data);
        setName("")
      })
  }


  return (
    <div className="App">
      {/* <button onClick={post}>Add new picture</button>
      <hr />
      <hr />
      <input type='number' onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => setLimit(number)}>Click</button>
      {data.map((item) => {
        return <h1 key={item.id} className='title'> {item.title} <img className='images' src={item.url} /> </h1>
      })} */}

      {
        <button className='open-but' onClick={() => setForm(true)}>Open Form</button>
      }

      {form ? <form>

        <input className='inp' onChange={(e) => setName(e.target.value)} type="text" value={name} /><br />
        <input className='inp' onChange={(e) => setlastName(e.target.value)} type='text' value={lastName} /> <br />
        <input className='inp' onChange={(e) => setAge(e.target.value)} type='number' value={age} /> <br />
        <button type="button" className='send-but' onClick={post}>SEND</button>

      </form> : <></>}

      <div className='items'> <br />
        {
          data.map((item) => {
            return <h2 key={item.id}>  <img className='imgs' src={item.url} /> {item.name} {item.lastName} {item.age}  </h2>
          })
        }

      </div>


    </div>

  );
}

export default App;