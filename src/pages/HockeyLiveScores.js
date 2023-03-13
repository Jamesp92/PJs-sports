import useFetch from '../components/useFetch'

function HockeyLiveScores() {
  const {error , isLoaded, data: basketballScores} = useFetch(`https://www.thesportsdb.com/api/v2/json/${process.env.REACT_APP_API_KEY}/livescore.php?s=Ice_Hockey`)

  let newData = basketballScores.events
if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
      <ul>
        {newData.map((hockey, index) =>
          <li key={index}>
            <div className='box'  >
              <img src={`${hockey.strAwayTeamBadge}`}  width="100" height="100"/>
              <img src={`${hockey.strHomeTeamBadge}`} width="100" height="100"/> 
              <h3><strong> {hockey.strAwayTeam} </strong> VS <strong>{hockey.strHomeTeam}</strong> </h3>
              <h3><ul>{hockey.intAwayScore} | {hockey.intHomeScore}</ul></h3>
              <h3>League: {hockey.strLeague}</h3>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}
}
export default  HockeyLiveScores;