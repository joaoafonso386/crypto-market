const DetailView = ({ coinData, isEmpty }) => {

  const { hashing_algorithm, links, symbol, genesis_date, description } = coinData


  return isEmpty ? <div> Search for a coin and get some details!</div> : 
    <div>
      <h3>Some curiosities</h3>
      <p>Short Description (200 chars): {description.en.substring(0,200)}...</p>
      <ul>
        <li>Hashing Algorithm: {hashing_algorithm}</li>
        <li><a href={links.homepage[0]}>Home Page Link</a></li>
        <li>Symbol: {symbol}</li>
        <li>Genesis Date: {genesis_date}</li>
      </ul>
    </div>
}

export default DetailView;