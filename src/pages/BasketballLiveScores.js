import React, { useState, useEffect } from 'react'


function BasketBallLiveScores() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [basketballScores, setBasketBallScores] = useState([]);


  
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v2/json/${process.env.REACT_APP_API_KEY}/livescore.php?s=Basketball`)
  
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })

  .then((jsonifiedResponse) => {
      setBasketBallScores(jsonifiedResponse.events)
      setIsLoaded(true)
      
    })

  .catch((error) => {
    setError(error.message)
    setIsLoaded(true)
  });
}, [])

// jsonifiedResponse.leagues[0].teams[0].team.displayName



console.log(basketballScores)




if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
      <h1>Live Scores from basketball around the world </h1>
      <h2>Scores will update every 2 minutes</h2>
      <ul>
        {basketballScores.map((basketball, index) =>
          <li key={index}>
        
            <h3>
            <img src={`${basketball.strAwayTeamBadge}`}  width="75" height="75"/>  {basketball.strAwayTeam} vs {basketball.strHomeTeam} <img src={`${basketball.strHomeTeamBadge}`} width="74" height="74"/> 
            </h3>
            <h3>
            {basketball.intAwayScore} | {basketball.intHomeScore}
            </h3>
            League: {basketball.strLeague}
           
          
          
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
export default  BasketBallLiveScores;