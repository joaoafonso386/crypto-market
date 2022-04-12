const DetailView = ({ coinData, isEmpty }) => {

  const { hashing_algorithm, links, symbol, genesis_date, description } = coinData;


  return isEmpty ? <div className="no-results"> Search for a coin and get some details!</div> : 
    <div>
      <div className="detail-view-container sm:w-full rounded-lg shadow-lg bg-white my-3">
        <div className="flex justify-between border-b border-gray-300 px-5 py-5">
      		<div> 
            <i className="fas fa-exclamation-circle text-blue-500"></i>
            <span className="font-bold text-gray-700 text-lg">Some curiosities</span>
          </div>
      	</div>
      
      	<div className="px-8 py-5 text-gray-600">
          Short Description (200 chars): {description.en.substring(0,200)}...
      	</div>
      	<div className="px-8 py-5 text-gray-600">
          Hashing Algorithm: {hashing_algorithm}
      	</div>
      	<div className="px-8 py-5 text-gray-600 underline">
          <a href={links.homepage[0]}>Home Page Link</a>
      	</div>
      	<div className="px-8 py-5 text-gray-600">
          Symbol: {symbol}
      	</div>
      	<div className="px-8 py-5 text-gray-600">
          Genesis Date: {genesis_date || "No data"}
      	</div>
	    </div>
    </div>
}

export default DetailView;