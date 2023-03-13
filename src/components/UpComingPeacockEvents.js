import useFetch from './useFetch'

function UpComingPeacockEvents() {
  const {error , isLoaded, data} = useFetch(`https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/eventstv.php?f=Peacock%20Premium`)

  let newData = data.tvevents


if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
    <div class="text">
      <h1>Up Coming Sporting Events on Peacock </h1>
      </div>
        {newData.map((event) =>
      <div className='box'>
            <h3> {event.strEvent}</h3>
            <h1>{event.dateEvent}</h1>
            <h1>Event Streaming on : {event.strChannel} </h1>
            <p>at : {event.strTime}</p>
      </div>
        )}
  
    </>
  );
}
}

export default UpComingPeacockEvents;