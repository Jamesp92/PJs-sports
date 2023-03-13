import useFetch from '../components/useFetch'

function AllSports() {

  const {error , isLoaded, data} = useFetch(`https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/all_sports.php`)

  let newData = data.sports

if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
    <div class="text">
      <h1>ALL SPORTS</h1>
    </div>  

          {newData.map((sport) =>
              <div className='box'>
                <h3> {sport.strSport}</h3>
                <img src={`${sport.strSportThumb}`}/> 
                <h2>{sport.strSportDescription}</h2>
                </div>

          
        )}
    
    </>
  );
}


}

export default AllSports;