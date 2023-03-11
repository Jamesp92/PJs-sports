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

let newArray = basketballScores.map( arrayItem => {
  return 

})
  



if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
      
        {basketballScores.map((basketball) =>
      <div>
        <div className='box'>
          <img src={`${basketball.strAwayTeamBadge}`}  width="100" height="100"/> 
          <img src={`${basketball.strHomeTeamBadge}`} width="100" height="100"/> 
          <h3><strong> {basketball.strAwayTeam} </strong> VS <strong>{basketball.strHomeTeam}</strong> </h3>

          <h3> {basketball.intAwayScore} | {basketball.intHomeScore}</h3>
          <h3> League: {basketball.strLeague}</h3>
          </div>
        </div>
        )}
      
    </>
  );
}
}
export default  BasketBallLiveScores;