import "./globals.css";

// Komponen utama layout yang membungkus seluruh aplikasi
const RootLayout = ({ children }) => {
  return (
    <html lang="id">
      <body className="bg-gray-100 min-h-screen antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
