import React, { useState, useEffect } from 'react'


function MlbHighlights() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mlbHighlights, setMlbHighlights] = useState([]);


  
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/eventshighlights.php?l=MLB`)
  
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })

  .then((jsonifiedResponse) => {
      setMlbHighlights(jsonifiedResponse.tvhighlights)
      setIsLoaded(true)
      console.log(jsonifiedResponse.tvhighlights)
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
      <h1>MLB Highlights </h1>
      <ul>
        {mlbHighlights.map((highlight, index) =>
          <li key={index}>
            <h3> {highlight.strEvent} | {highlight.dateEvent} </h3>
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
export default  MlbHighlights;

