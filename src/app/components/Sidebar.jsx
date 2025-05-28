import {
  Store,
  LayoutDashboard,
  FileText,
  CalendarClock,
  ShoppingBasket,
  Printer,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

const Sidebar = () => {
  return (
    // Container sidebar dengan styling responsive
    <aside
      className={`
        bg-white shadow-md min-h-screen flex flex-col p-3 sm:p-4 
        w-full md:w-60 lg:w-64 flex-shrink-0
        transition-all duration-300 ease-in-out
        overflow-y-auto
      `}
    >
      {/* Header section dengan logo dan brand */}
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        {/* Logo dengan fallback jika gagal load */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-8 h-8 sm:w-10 sm:h-10"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/40x40/22c55e/ffffff?text=Logo";
          }}
        />
        {/* Brand name dengan styling khusus */}
        <div className="text-lg sm:text-xl font-bold text-green-700">
          <span className="text-yellow-600">M</span>KASIR{" "}
          {/* M berwarna kuning */}
          <div className="text-xs font-normal text-gray-400 tracking-tight">
            manajemen kasir
          </div>
        </div>
      </div>

      {/* Outlet selector dengan dropdown */}
      <div className="flex items-center mb-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
        {/* Avatar outlet dengan inisial */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded flex items-center justify-center text-blue-500 font-semibold">
          AS
        </div>
        {/* Info outlet */}
        <div className="ml-2 flex-1 overflow-hidden">
          <div className="text-xs sm:text-sm font-medium text-gray-800 truncate">
            Outlet
          </div>
          <div className="text-xs text-gray-500 truncate">Alfath Store</div>
        </div>
        {/* Dropdown arrow */}
        <ChevronDown className="ml-auto w-4 h-4 text-gray-500 flex-shrink-0" />
      </div>

      {/* Navigation menu */}
      <nav className="flex-1 space-y-1 sm:space-y-2">
        {/* Array menu items dengan konfigurasi */}
        {[
          { label: "Dashboard", icon: LayoutDashboard, active: true },
          { label: "Manajemen Toko", icon: Store, hasDropdown: true },
          { label: "Laporan", icon: FileText, hasDropdown: true },
          { label: "Booking", icon: CalendarClock },
          { label: "Konsinyasi", icon: ShoppingBasket, hasDropdown: true },
          { label: "Print", icon: Printer },
          { label: "Pengaturan Biaya", icon: Settings },
        ].map((item, index) => (
          // Link menu dengan styling conditional
          <a
            key={index}
            href="#"
            className={`
              flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-md text-sm
              transition-colors duration-150
              ${
                item.active
                  ? "bg-green-600 text-white shadow-sm" // Style untuk menu aktif
                  : "text-gray-700 hover:bg-green-50 hover:text-green-700" // Style untuk menu inactive
              }
            `}
          >
            {/* Icon menu */}
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            {/* Label menu  */}
            <span className="flex-1 truncate">{item.label}</span>
            {/* Dropdown arrow jika ada */}
            {item.hasDropdown && (
              <ChevronDown className="ml-auto w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            )}
          </a>
        ))}
      </nav>

      {/* Logout section di bagian bawah */}
      <div className="mt-6">
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-md text-sm text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors duration-150"
        >
          <LogOut className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="flex-1 truncate">Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
