import useFetch from '../components/useFetch'

function BasketBallLiveScores() {
  
const {error , isLoaded, data: basketballScores} = useFetch(`https://www.thesportsdb.com/api/v2/json/${process.env.REACT_APP_API_KEY}/livescore.php?s=Basketball`)

let newdata = basketballScores.events

if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
      
      {newdata.map((basketball) =>
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