const Dashboard = ({ coinData, isEmpty }) => {

  const { name, image, market_data } = coinData;

  return isEmpty ? (
    <div> Search for a coin and get an overview!</div>
  ) : (
    <div>
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg" src={image.large} alt="cryptocurrency" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Price: {market_data.current_price.eur}€
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;