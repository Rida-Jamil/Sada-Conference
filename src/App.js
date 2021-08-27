import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Navbars from './Components/Navbar/Navbars';
import './Components/Home/Home.css'



const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data.results);
      });
  }, [])



  return (
    <>
      <Navbars />
      <div className="container">

        {users.map(user => (
          <Home
            image={user.picture.medium}
            name={user.name.first + " " + user.name.last}
            email={user.email}
            nationality={user.nat}
            age={user.dob.age}
          />
        ))}

      </div>
    </>
  );

}

export default App;
