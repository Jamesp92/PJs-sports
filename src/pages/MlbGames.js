import React, { useState, useEffect } from 'react'

function MlbGames() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mlbGames, setMlbGames] = useState([]);
  

  
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
      setMlbGames(jsonifiedResponse.dates[0].games)
      setIsLoaded(true)
      const games = jsonifiedResponse.dates[0].games
      // console.log(games[0].teams.away.team)
      games.forEach(game => {
        // console.log(game.teams.away.team)
        // console.log(game.teams.home.team)
        // console.log(game.teams.home.score)
      });
    })
    
  .catch((error) => {
    setError(error.message)
    setIsLoaded(true)
  });
}, [])

mlbGames.forEach(game =>{
console.log(game)
});

if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
      <h1>MLB Games today</h1>
      <ul>
        {mlbGames.map((game, index) =>
          <li key={index}>
            <h3>{game.teams.home.team.name} VS {game.teams.away.team.name}  </h3>
            <h3>Score: {game.teams.home.score}  | {game.teams.away.score}  </h3>
            {/* <img src={`${sport.strSportThumb}`}/> 
            <p>{sport.strSportDescription}</p> */}
          </li>
        )}
      </ul>
    </>
  );
}


}

export default MlbGames;