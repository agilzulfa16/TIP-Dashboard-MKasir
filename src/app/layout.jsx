import './globals.css'; // Mengimpor file CSS global

// Komponen utama layout
const RootLayout = ({ children }) => {
  return (
    <html lang="id"> {/* Mengatur bahasa ke Bahasa Indonesia */}
      <body className="bg-gray-100 min-h-screen antialiased">
        {children} {/* Menampilkan konten anak */}
      </body>
    </html>
  );
}

export default RootLayout;
