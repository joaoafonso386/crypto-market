import { Link } from "react-router-dom";

const Menu = () => {
  
  return (
    <div>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div class="container dark:text-white flex flex-wrap items-center">
        <h2 className="text-xl">Crypto Market</h2>
          <div class="w-full block w-auto" id="mobile-menu">
            <ul class="flex mt-4 space-x-8 mt-0 text-sm font-medium">
              <li>
                <Link
                  className="block py-2 pr-1 pl-10 text-white rounded dark:text-white"
                  to="/"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pr-4 pl-3 text-white rounded dark:text-white"
                  to="/detail-view"
                >
                  Details
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;