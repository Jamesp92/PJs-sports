import {useState, useEffect} from 'react'

const useFetch = (url) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(url)
  
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })

  .then((jsonifiedResponse) => {
      setData(jsonifiedResponse)
      setIsLoaded(true)
      
    })
  .catch((error) => {
    setError(error.message)
    setIsLoaded(true)
  });
},[url])
return {error,isLoaded,data}
}

export default useFetch;