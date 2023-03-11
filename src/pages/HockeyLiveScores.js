import React, { useState, useEffect } from 'react'


function HockeyLiveScores() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hockeyScores, setHockeyScores] = useState([]);

const data = [];
  
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v2/json/${process.env.REACT_APP_API_KEY}/livescore.php?s=Ice_Hockey`)
  
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })

  .then((jsonifiedResponse) => {
      setHockeyScores(jsonifiedResponse.events)
      setIsLoaded(true)
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
      <ul>
        {hockeyScores.map((hockey, index) =>
          <li key={index}>
            <div className='box'  >
              <img src={`${hockey.strAwayTeamBadge}`}  width="100" height="100"/>
              <img src={`${hockey.strHomeTeamBadge}`} width="100" height="100"/> 
              <h3><strong> {hockey.strAwayTeam} </strong> VS <strong>{hockey.strHomeTeam}</strong> </h3>
              <h3><ul>{hockey.intAwayScore} | {hockey.intHomeScore}</ul></h3>
              <h3>League: {hockey.strLeague}</h3>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}
}
export default  HockeyLiveScores;