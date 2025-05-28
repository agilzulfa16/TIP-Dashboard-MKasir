'use client'; 

import { WidgetProvider } from './components/WidgetContext';
import DashboardGrid from './components/DashboardGrid';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import { useState } from 'react'; // Dihapus jika tidak digunakan untuk toggle sidebar

export default function Home() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full">
        <Header name="Alfath" /* toggleSidebar={toggleSidebar} */ />
        <div className="flex-1 p-3 sm:p-4 md:p-6">
          <WidgetProvider>
            <main> 
              <DashboardGrid />
            </main>
          </WidgetProvider>
        </div>
      </div>
    </div>
  );
}
