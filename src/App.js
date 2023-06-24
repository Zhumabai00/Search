import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [users, setUsers] = useState([]) // create main hook for saving all datas
  const getUsers = () => { /// function for getting the data of date
    // axios.get('https://fakestoreapi.com/products')
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data)
      })
  }
  useEffect(() => { /// activate when starting
    getUsers()
  }, [])

  const [value, setValue] = useState('') /// saving new data after filtering

  const filterUsers = users.filter(item => { /// the filtering
    return item.name.toLowerCase().includes(value.toLowerCase())
  })
  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          placeholder='Search the users'
          className='item__input'
          onChange={(event) => setValue(event.target.value)} /// receive the contents from customers
        />
      </div>
      <div className="users">
        {
          filterUsers.map((item) => {
            return (
              <>
                <h1>{item.name}</h1>
                {/* <h1>{item.username}</h1> */}
              </>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
