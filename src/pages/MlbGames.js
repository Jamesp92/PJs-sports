import React, { useState, useEffect } from 'react'

function MlbGames() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mlbGames, setMlbSports] = useState([]);
  

  
  useEffect(() => {
    fetch(`http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1`)
  
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })

  .then((jsonifiedResponse) => {
      setMlbSports(jsonifiedResponse.dates)
      setIsLoaded(true)
      console.log(jsonifiedResponse.dates)
    })
    
  .catch((error) => {
    setError(error.message)
    setIsLoaded(true)
  });
}, [])


if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
      <h1>ALL SPORTS</h1>
      <ul>
        {mlbGames.map((sport, index) =>
          <li key={index}>
            <h3> {sport.games}</h3>
            <img src={`${sport.strSportThumb}`}/> 
            <p>{sport.strSportDescription}</p>
          </li>
        )}
      </ul>
    </>
  );
}


}

export default MlbGames;