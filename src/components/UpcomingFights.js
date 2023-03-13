import useFetch from './useFetch'

function UpComingEvents() {
  const {error , isLoaded, data} = useFetch(`https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/eventstv.php?d=2018-07-07&s=Fighting`)

  let newData = data.tvevents


if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
    <div class="text">
      <h1>Upcoming Fights </h1>
    </div> 
        {newData.map((event) =>
      <div className='box'>
            <h3> {event.strEvent}</h3>
            <p>{event.dateEvent}</p>
            <p>Event Streaming on : {event.strChannel} </p>
            <p>at : {event.strTime}</p>
      </div>
        )}
  
    </>
  );
}
}

export default UpComingEvents;