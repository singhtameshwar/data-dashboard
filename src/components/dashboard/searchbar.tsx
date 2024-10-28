import { BarChart, Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="navbar sticky top-0  bg-base-200 shadow-lg px-4">
      <div className="navbar-start flex items-center space-x-4">
        <div className="flex items-center">
          <BarChart className="mr-2" />
          <h2 className="text-lg font-semibold">Data Dashboard</h2>
        </div>
      </div>

      <div className="navbar-center w-full max-w-lg flex items-center justify-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-ghost btn-circle">
          <Search />
        </button>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <button className="btn btn-ghost btn-circle relative">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 12h.01M12 12h.01M18 12h.01"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-28"
          >
            <li><a href="#" className="text-sm">Profile</a></li>
            <li><a href="#" className="text-sm">Settings</a></li>
            <li><a href="#" className="text-sm">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
