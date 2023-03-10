import React, { useState, useEffect } from 'react'


function HockeyLiveScores() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hockeyScores, setHockeyScores] = useState([]);


  
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
      const teams = jsonifiedResponse.events

      teams.forEach(team => {
        console.log(team)
        
      });
      // console.log(jsonifiedResponse.sports[0])
    })

  .catch((error) => {
    setError(error.message)
    setIsLoaded(true)
  });
}, [])

// jsonifiedResponse.leagues[0].teams[0].team.displayName



hockeyScores.forEach(team => {
  console.log(team)
  
});




if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
      <h1>Live Scores from Hockey around the world </h1>
      <ul>
        {hockeyScores.map((hockey, index) =>
          <li key={index}>
        
            <h3>
            <img src={`${hockey.strAwayTeamBadge}`}  width="100" height="100"/>  {hockey.strAwayTeam} vs {hockey.strHomeTeam} <img src={`${hockey.strHomeTeamBadge}`} width="100" height="100"/> 
            </h3>
            <h3>
            {hockey.intAwayScore} | {hockey.intHomeScore}
            </h3>
            League: {hockey.strLeague}
            <h3>
            </h3>
            <h3>
    
            </h3>
          
          
            {/* <img src={`${highlight.strThumb}`}/> */}
            {/* <iframe src={`${highlight.strVideo.replace('watch?v=','embed/')}`}></iframe> */}
            {/* <img width = "200" height ="200" src={`${highlight.strFanart}`}></img> */}
          </li>
        )}
      </ul>
    </>
  );
}
}
export default  HockeyLiveScores;