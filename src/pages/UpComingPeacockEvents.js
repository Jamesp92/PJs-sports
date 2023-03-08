import React, { useState, useEffect } from 'react'
import {
  Link,
} from "react-router-dom";

function UpComingPeacockEvents() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [upComingPeacockEvents, setUpComingPeacockEvents] = useState([]);
  

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/eventstv.php?f=Peacock%20Premium `)
  
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })

  .then((jsonifiedResponse) => {
      setUpComingPeacockEvents(jsonifiedResponse.tvevents)
      setIsLoaded(true)
      console.log(jsonifiedResponse.tvevents)
      
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
      <h1>Up Coming Sporting Events on Peacock </h1>
      <ul>
        {upComingPeacockEvents.map((event, index) =>
          <li key={index}>
            <h3> {event.strEvent}</h3>
            <p>{event.dateEvent}</p>
            <p>Event Streaming on : {event.strChannel} at : {event.strTime}</p>
            <Link to="/">Home</Link>
            
            {/* <img src={`${sport.strSportThumb}`}/> 
            <p>{sport.strSportDescription}</p> */}
          </li>
        )}
      </ul>
    </>
  );
}


}

export default UpComingPeacockEvents;