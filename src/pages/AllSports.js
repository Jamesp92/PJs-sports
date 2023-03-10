import React, { useState, useEffect } from 'react'

function AllSports() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allSports, setAllSports] = useState([]);
  

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/all_sports.php`)
  
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })

  .then((jsonifiedResponse) => {
      setAllSports(jsonifiedResponse.sports)
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
      <h1>ALL SPORTS</h1>
      <ul>
          {allSports.map((sport, index) =>
            <li key={index}>
              <div className='box'>
                <h3> {sport.strSport}</h3>
                <img src={`${sport.strSportThumb}`}/> 
                <p>{sport.strSportDescription}</p>
                </div>
            </li>
        )}
      </ul>
    </>
  );
}


}

export default AllSports;