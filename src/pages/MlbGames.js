import useFetch from '../components/useFetch'


function MlbGames() {
  const {error , isLoaded, data} = useFetch(`http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1`)
  
  // let newData = data.dates[0]


  // console.log(newData)


if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
      {/* <ul>
        {newData.map((game, index) =>
          <li key={index}>
            <div className='box'>
              <h3>{game.teams.home.team.name} VS {game.teams.away.team.name} </h3>
              <h3>Score: {game.teams.home.score}  | {game.teams.away.score} </h3>
            </div>
          </li>
        )}
      </ul> */}
    </>
  );
}
}

export default MlbGames;