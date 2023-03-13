import useFetch from '../components/useFetch'


function MlbHighlights() {
  const {error , isLoaded, data} = useFetch(`https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/eventshighlights.php?l=MLB`)
  let newData = data.tvhighlights

if (error) {
  return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
  return <h1>...Loading...</h1>;
} else {
  return (
    <>
      <h1>Todays Highlights </h1>
      <ul>
        {newData.map((highlight, index) =>
          <li key={index}>
            <h3> {highlight.strEvent} | {highlight.dateEvent} </h3>
            <iframe src={`${highlight.strVideo.replace('watch?v=','embed/')}`}></iframe>

          </li>
        )}
      </ul>
    </>
  );
}
}
export default  MlbHighlights;
