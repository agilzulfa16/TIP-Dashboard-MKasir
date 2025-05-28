"use client";

import { useWidgets } from "./WidgetContext";
import WidgetBox from "./WidgetBox";
import TopProductsChart from "./TopProductsChart";
import TopProductsTable from "./TopProductsTable";

// Konfigurasi layout untuk setiap slot widget (10 slot total)
const slotsConfig = [
  // Slot 0: Full width untuk banner atau info utama
  { col: "col-span-12", h: "min-h-[7rem] sm:min-h-[7rem]" },

  // Slot 1-4: Quarter width untuk metric cards
  {
    col: "col-span-12 sm:col-span-6 md:col-span-3",
    h: "min-h-[7rem] sm:min-h-[7rem]",
  },
  {
    col: "col-span-12 sm:col-span-6 md:col-span-3",
    h: "min-h-[7rem] sm:min-h-[7rem]",
  },
  {
    col: "col-span-12 sm:col-span-6 md:col-span-3",
    h: "min-h-[7rem] sm:min-h-[7rem]",
  },
  {
    col: "col-span-12 sm:col-span-6 md:col-span-3",
    h: "min-h-[7rem] sm:min-h-[7rem]",
  },

  // Slot 5: Large area untuk chart utama (8 kolom, 2 baris di desktop)
  {
    col: "col-span-12 lg:col-span-8 lg:row-span-2",
    h: "min-h-[20rem] sm:min-h-[25rem]",
  },

  // Slot 6-7: Medium widgets untuk info tambahan
  {
    col: "col-span-12 md:col-span-6 lg:col-span-4",
    h: "min-h-[7rem] sm:min-h-[7rem]",
  },
  {
    col: "col-span-12 md:col-span-6 lg:col-span-4",
    h: "min-h-[15rem] sm:min-h-[17rem]",
  },

  // Slot 8-9: Half width untuk tabel atau chart kecil
  { col: "col-span-12 md:col-span-6", h: "min-h-[16rem] sm:min-h-[18rem]" },
  { col: "col-span-12 md:col-span-6", h: "min-h-[16rem] sm:min-h-[18rem]" },
];

const DashboardGrid = () => {
  // Mengambil state dan functions dari Widget Context
  const { widgets, removeWidget } = useWidgets();

  return (
    // Grid container dengan 12 kolom dan gap responsive
    <div className="grid grid-cols-12 gap-3 sm:gap-4 pt-4">
      {/* Loop melalui setiap konfigurasi slot */}
      {slotsConfig.map((cfg, idx) => {
        // Dapatkan widget untuk slot ini (bisa null jika kosong)
        const widget = widgets[idx];

        return (
          // Container untuk setiap slot dengan konfigurasi kolom dan baris
          <div key={idx} className={`${cfg.col} ${cfg.row ?? ""}`}>
            {widget ? (
              // Jika slot memiliki widget, render widget container
              <div
                className={`bg-white rounded-xl border border-green-600 p-3 sm:p-4 ${cfg.h} flex flex-col overflow-hidden`}
              >
                {/* Header widget dengan judul dan tombol hapus */}
                <div className="flex justify-between items-center mb-2">
                  {/* Judul widget */}
                  <div className="font-bold text-xs sm:text-sm text-green-700 truncate pr-2">
                    {widget.title}
                  </div>
                  {/* Tombol X untuk menghapus widget */}
                  <button
                    onClick={() => removeWidget(idx)}
                    className="border rounded px-1.5 py-0.5 text-xs font-extrabold text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    X
                  </button>
                </div>

                {/* Konten widget dengan scroll vertikal */}
                <div className="flex-1 overflow-y-auto">
                  {widget.isChart ? (
                    // Jika widget adalah chart, render komponen chart
                    <TopProductsChart />
                  ) : widget.isComponent ? (
                    // Jika widget adalah komponen khusus, render komponen table
                    <TopProductsTable />
                  ) : (
                    // Jika widget biasa, render konten text
                    <div className="text-xs sm:text-sm text-gray-600">
                      {widget.content}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // Jika slot kosong, render WidgetBox untuk menambah widget
              <WidgetBox slotIndex={idx} heightClass={cfg.h} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DashboardGrid;
