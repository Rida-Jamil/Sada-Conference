import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';



const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data.results);
      });
  }, [])



  return (
    <>
      {users.map(user => (
        <Cards
          image={user.picture.medium}
          name={user.name.first + " " + user.name.last}
          email={user.email}
          nationality={user.nat}
          age={user.dob.age}
        />
      ))}
    </>
  );

}

export default App;
