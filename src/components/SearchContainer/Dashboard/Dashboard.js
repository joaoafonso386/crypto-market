import "./Dashboard.css";


const Dashboard = ({ coinData, isEmpty }) => {

  const { name, image, market_data } = coinData;

  return isEmpty ? (
    <div className="no-results"> Search for a coin and get an overview!</div>
  ) : (
    <div className="dashboard-container">
      <div className="card max-w-sm bg-white mt-6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img src={image.large} alt="cryptocurrency" />
        <div className="p-3">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coin Name: {name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Price: {market_data.current_price.eur}€
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;