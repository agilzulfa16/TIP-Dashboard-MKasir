// import Head from "next/head"; // Dihapus jika tidak digunakan
// import { Menu } from "lucide-react"; // Dihapus jika tidak digunakan untuk toggle

const Header = ({ name /*, toggleSidebar */ }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-3 sm:p-4 gap-3 sm:gap-4">
      {/* <button onClick={toggleSidebar} className="md:hidden p-2 text-gray-600 hover:text-green-600">
        <Menu size={24} />
      </button> */}

      <div className="text-xl sm:text-2xl font-semibold leading-tight text-center sm:text-left">
        <div>
          Hi <span className="text-green-600 font-bold">{name}</span>, apakah bisnismu
        </div>
        <div>
          sehat hari ini<span className="font-bold">?</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1010 17a7 7 0 006.65-6.65z"
            />
          </svg>
        </button>

        <button className="p-2 relative rounded-full hover:bg-gray-200 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-200 rounded-full border-2 border-blue-300" />

        <div className="text-sm text-left sm:text-right">
          <div className="font-semibold text-gray-800">{name}</div>
          <div className="text-gray-500 text-xs">Alfath Store</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
