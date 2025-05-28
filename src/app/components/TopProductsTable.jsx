const topProductsData = [
  {
    name: "Cafe Latte",
    id: "CLJ-1023",
    sales: 100,
    price: "Rp. 20.000",
    stock: 150,
    status: "In Stock",
  },
  {
    name: "Aren Latte",
    id: "DHB-3056",
    sales: 350,
    price: "Rp. 20.000",
    stock: 80,
    status: "Low Stock",
  },
  {
    name: "Americano",
    id: "RNS-7892",
    sales: 420,
    price: "Rp. 20.000",
    stock: 200,
    status: "In Stock",
  },
  {
    name: "Croissant",
    id: "MDJ-2210",
    sales: 600,
    price: "Rp. 20.000",
    stock: 50,
    status: "Low Stock",
  },
  {
    name: "Matcha Latte",
    id: "WSS-3345",
    sales: 280,
    price: "Rp. 20.000",
    stock: 300,
    status: "In Stock",
  },
];

const TopProductsTable = () => {
  return (
    // Container tabel dengan background putih dan shadow
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Header tabel */}
      <h2 className="text-lg font-semibold mb-4">Top Products</h2>

      {/* Container scroll horizontal untuk responsivitas */}
      <div className="overflow-x-auto">
        {/* Tabel dengan lebar minimum */}
        <table className="min-w-full text-sm">
          {/* Header tabel */}
          <thead>
            <tr className="bg-gray-50 text-gray-600 uppercase text-xs">
              <th className="p-3 text-left">Nama Produk</th>
              <th className="p-3 text-left">ID Produk</th>
              <th className="p-3 text-left">Penjualan</th>
              <th className="p-3 text-left">Harga</th>
              <th className="p-3 text-left">Stok</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          {/* Body tabel */}
          <tbody>
            {/* Loop data produk */}
            {topProductsData.map((product, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                {/* Kolom nama produk dengan avatar */}
                <td className="p-3 flex items-center gap-3">
                  {/* Avatar placeholder produk */}
                  <div className="w-8 h-8 bg-gray-200 rounded" />
                  {/* Nama produk */}
                  <span className="text-gray-800 font-medium">
                    {product.name}
                  </span>
                </td>

                {/* Kolom ID produk */}
                <td className="p-3 text-gray-600">{product.id}</td>

                {/* Kolom jumlah penjualan */}
                <td className="p-3 text-gray-600">{product.sales}</td>

                {/* Kolom harga */}
                <td className="p-3 text-gray-600">{product.price}</td>

                {/* Kolom stok */}
                <td className="p-3 text-gray-600">{product.stock}</td>

                {/* Kolom status dengan badge berwarna */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      product.status === "In Stock"
                        ? "bg-blue-100 text-blue-700" // Biru untuk stok tersedia
                        : "bg-green-100 text-green-700" // Hijau untuk stok menipis
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProductsTable;
