import React, { useEffect, useState } from 'react';
import Main from './Main/Main';


const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://randomuser.me/api/?results=8")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setUsers(data.results);
        });
    }, [])
  
    return (
      <>
        <div className="wrapp">
  
          {users.map(user => (
            <Main
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

export default Home;