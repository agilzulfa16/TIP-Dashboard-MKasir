'use client';

import { Plus } from 'lucide-react'; 
import { useState } from 'react';
import { useWidgets } from './WidgetContext'; 

const widgetList = [
  {
    title: 'Total Pendapatan Hari ini',
    description: 'Lihat total omset hari ini dari semua outlet',
    content: 'Rp 1.000.000',
  },
  {
    title: 'Notifikasi',
    description: 'Notifikasi Terbaru mengenai usahamu',
    content: '🔔 Hari ini kamu menjual 23% lebih banyak dari kemarin, Kopi Susu jadi produk terlaris loh !'
  },
  {
    title: 'Produk Terjual',
    description: 'Total Produk Terjual hari ini',
    content: '312 Produk'
  },
  {
    title: 'Peningkatan Penjualan',
    description: 'Progres Penjualan Bulanan/Mingguan',
    content: 'Naik 12% dari minggu lalu'
  },
  {
    title: 'Peningkatan Pelanggan',
    description: 'Progres Jumlah Pelanggan Bulanan/Mingguan',
    content: '15 Pelanggan Baru'
  },
  {
    title: 'Alert Stock',
    description: 'Barista alert : Oat Milk tinggal 2 liter lagi. Yuk restock biar racikanmu tetap juara!',
    content: '⚠️ Oat Milk tersisa 2L'
  },
  {
    title: 'Top Product Grafik',
    description: 'Menampilkan Grafik Penjulan Produk tertinggi',
    isChart: true
  },
  {
    title: 'Top Product',
    description: 'Menampilkan Produk Terlaris',
    content: 'Kopi Susu Gula Aren'
  },
];

const WidgetBox = ({ slotIndex, heightClass }) => {
  const [showModal, setShowModal] = useState(false); 
  const { setWidget } = useWidgets(); 

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className={`bg-white border-gray-200 rounded-xl border p-3 sm:p-4 flex flex-col justify-between items-center cursor-pointer ${heightClass} hover:shadow-lg transition-shadow duration-200 group`}
      >
        <div className="text-xs sm:text-sm text-green-700 font-medium group-hover:text-green-800">Tambahkan Widget</div>
        <div className="flex flex-1 items-center justify-center">
          <Plus size={36} sm={48} className="text-green-600 group-hover:text-green-700 transition-colors" /> 
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm" 
            onClick={() => setShowModal(false)} 
          />
          <div className="relative bg-white p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl z-10 max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">Pilih Widget</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full -mr-2"
                aria-label="Tutup modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {widgetList.map((widget, i) => (
                  <div 
                    key={i} 
                    className="border border-gray-200 rounded-lg p-3 sm:p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
                  >
                    <div className="font-bold text-sm text-green-700 mb-1 truncate">{widget.title}</div>
                    <div className="text-xs text-gray-500 flex-1 mb-3">{widget.description}</div>
                    <div className="flex justify-end mt-auto"> 
                      <button
                        onClick={() => {
                          setWidget(slotIndex, widget); 
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
}

export default WidgetBox;
