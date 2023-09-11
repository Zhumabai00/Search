import { useEffect, useState } from 'react'
import './App.scss';
import axios from 'axios'

import { Routes, Route, Link } from 'react-router-dom'
import { SingleCard } from './SingleCard/SingleCard';
import { Home } from './home/Home';
import { React } from 'react'
import { Header } from './Header';

function App() {
  const [users, setUsers] = useState([]) // create main hook for saving all datas
  const getUsers = async () => { /// function for getting the data of date
    await axios.get('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => { /// activate when starting
    getUsers()
  }, [])

  const [value, setValue] = useState('') /// saving new data after filtering

  const filterUsers = users.filter(item => { /// the filtering
    return item.title.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className="App">
      <div className='container'>
        <Header setValue={setValue} />
        <div className='mt'>
          <Routes>
            <Route path='/' element={<Home filterUsers={filterUsers} />} />
            <Route path='/:id' element={<SingleCard filterUsers={filterUsers} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
