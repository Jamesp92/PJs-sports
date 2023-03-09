import React, { useState, useEffect } from 'react'


function MlbTeams() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mlbTeams, setMlbTeams] = useState([]);


  
  useEffect(() => {
    fetch(`http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams`)
  
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })

  .then((jsonifiedResponse) => {
      setMlbTeams(jsonifiedResponse.sports)
      setIsLoaded(true)
      const teams = jsonifiedResponse.sports

      teams.forEach(team => {
        // console.log(team.leagues[0].teams)
        
      });
      // console.log(jsonifiedResponse.sports[0])
    })

  .catch((error) => {
    setError(error.message)
    setIsLoaded(true)
  });
}, [])

// jsonifiedResponse.leagues[0].teams[0].team.displayName



mlbTeams.forEach(team => {
  console.log(team.leagues[0].teams[0].logos)
  
});


if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
      <h1>MLB Teams </h1>
      <ul>
        {mlbTeams.map((team, index) =>
          <li key={index}>
            <h3> {team.leagues[0].teams[0].team.displayName} </h3>
            <h3> {team.leagues[0].teams[24].team.displayName} </h3>
            <h3> {team.leagues[0].teams[1].team.displayName} </h3>
            <h3> {team.leagues[0].teams[2].team.displayName} </h3>
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
export default  MlbTeams;
