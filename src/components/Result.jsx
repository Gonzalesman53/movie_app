function Result({ results }) {
  return (
  <div className="">
    {
        results.map((result) => (
            <div className="" key={result.id}>
                <h2 className="">{result.original_title}</h2>
            </div>
        ))
    }
  </div>)
}
export default Result;
