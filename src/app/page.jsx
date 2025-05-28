"use client"; // Directive Next.js untuk client-side rendering

// Import komponen dan context yang dibutuhkan
import { WidgetProvider } from "./components/WidgetContext";
import DashboardGrid from "./components/DashboardGrid";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function Home() {
  return (
    // Container utama dengan flex layout responsive
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Sidebar navigasi */}
      <Sidebar />

      {/* Container konten utama */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header dengan greeting personal */}
        <Header name="Alfath" />

        {/* Container untuk konten dashboard dengan padding responsive */}
        <div className="flex-1 p-3 sm:p-4 md:p-6">
          {/* Provider context untuk state management widget */}
          <WidgetProvider>
            <main>
              {/* Grid dashboard yang berisi widget */}
              <DashboardGrid />
            </main>
          </WidgetProvider>
        </div>
      </div>
    </div>
  );
}
