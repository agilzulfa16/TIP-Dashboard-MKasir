"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { useWidgets } from "./WidgetContext";

// Array berisi daftar widget yang tersedia untuk dipilih
const widgetList = [
  {
    title: "Total Pendapatan Hari ini",
    description: "Lihat total omset hari ini dari semua outlet",
    content: "Rp 1.000.000",
  },
  {
    title: "Notifikasi",
    description: "Notifikasi Terbaru mengenai usahamu",
    content:
      "🔔 Hari ini kamu menjual 23% lebih banyak dari kemarin, Kopi Susu jadi produk terlaris loh !",
  },
  {
    title: "Produk Terjual",
    description: "Total Produk Terjual hari ini",
    content: "312 Produk",
  },
  {
    title: "Peningkatan Penjualan",
    description: "Progres Penjualan Bulanan/Mingguan",
    content: "Naik 12% dari minggu lalu",
  },
  {
    title: "Peningkatan Pelanggan",
    description: "Progres Jumlah Pelanggan Bulanan/Mingguan",
    content: "15 Pelanggan Baru",
  },
  {
    title: "Alert Stock",
    description:
      "Barista alert : Oat Milk tinggal 2 liter lagi. Yuk restock biar racikanmu tetap juara!",
    content: "⚠️ Oat Milk tersisa 2L",
  },
  {
    title: "Top Product Grafik",
    description: "Menampilkan Grafik Penjulan Produk tertinggi",
    isChart: true,
  },
  {
    title: "Top Products Table",
    description: "Menampilkan tabel produk terlaris",
    isComponent: true,
  },
];

// Komponen WidgetBox - kotak untuk menambahkan widget baru
const WidgetBox = ({ slotIndex, heightClass }) => {
  // State untuk mengontrol tampilan modal (true = tampil, false = tersembunyi)
  const [showModal, setShowModal] = useState(false);
  // Destructure fungsi setWidget dari context untuk menyimpan widget yang dipilih
  const { setWidget } = useWidgets();

  return (
    <>
      {/* Container utama untuk kotak tambah widget */}
      <div
        // Event handler ketika kotak diklik - membuka modal
        onClick={() => setShowModal(true)}
        // Styling untuk kotak tambah widget dengan efek hover dan transisi
        className={`bg-white border-gray-200 rounded-xl border p-3 sm:p-4 flex flex-col justify-between items-center cursor-pointer ${heightClass} hover:shadow-lg transition-shadow duration-200 group`}
      >
        {/* Text label "Tambahkan Widget" */}
        <div className="text-xs sm:text-sm text-green-700 font-medium group-hover:text-green-800">
          Tambahkan Widget
        </div>

        <div className="flex flex-1 items-center justify-center">
          <Plus
            size={36}
            sm={48}
            className="text-green-600 group-hover:text-green-700 transition-colors"
          />
        </div>
      </div>

      {/* Modal yang muncul ketika showModal bernilai true */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            // Event handler untuk menutup modal ketika backdrop diklik
            onClick={() => setShowModal(false)}
          />
          {/* Container konten modal */}
          <div className="relative bg-white p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl z-10 max-h-[90vh] flex flex-col">
            {/* Header modal dengan judul dan tombol close */}
            <div className="flex justify-between items-center mb-4">
              {/* Judul modal */}
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Pilih Widget
              </h2>
              {/* Tombol close (X) */}
              <button
                // Event handler untuk menutup modal
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full -mr-2"
                aria-label="Tutup modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Container untuk konten yang dapat di-scroll */}
            <div className="flex-1 overflow-y-auto pr-1">
              {/* Grid layout untuk menampilkan daftar widget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {/* Loop untuk menampilkan setiap widget dalam widgetList */}
                {widgetList.map((widget, i) => (
                  // Card untuk setiap widget
                  <div
                    key={i}
                    className="border border-gray-200 rounded-lg p-3 sm:p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
                  >
                    {/* Judul widget */}
                    <div className="font-bold text-sm text-green-700 mb-1 truncate">
                      {widget.title}
                    </div>
                    {/* Deskripsi widget */}
                    <div className="text-xs text-gray-500 flex-1 mb-3">
                      {widget.description}
                    </div>
                    {/* Container untuk tombol tambahkan */}
                    <div className="flex justify-end mt-auto">
                      {/* Tombol untuk menambahkan widget */}
                      <button
                        onClick={() => {
                          // Menyimpan widget yang dipilih ke slot tertentu
                          setWidget(slotIndex, widget);
                          // Menutup modal setelah widget dipilih
                          setShowModal(false);
                        }}
                        className="w-full sm:w-auto py-1.5 px-3 text-xs text-white rounded-md bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Plus size={16} className="" /> Tambahkan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WidgetBox;
