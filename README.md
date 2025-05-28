# Dokumentasi Dashboard MKASIR

## Deskripsi Aplikasi
Dashboard MKASIR adalah aplikasi web manajemen kasir yang dibangun menggunakan React dan Next.js. Aplikasi ini menyediakan interface untuk monitoring bisnis dengan sistem widget yang dapat dikustomisasi, grafik penjualan, dan tabel produk terlaris.

## Teknologi yang Digunakan
- **React 18** - Library UI utama
- **Next.js** - Framework React untuk production
- **Tailwind CSS** - Framework CSS untuk styling
- **Recharts** - Library untuk visualisasi data/grafik
- **Lucide React** - Icon library
- **Context API** - State management untuk widget

## Arsitektur Aplikasi

### Struktur Folder
```
src/
├── app/
│   ├── layout.jsx          # Layout utama aplikasi
│   ├── page.jsx            # Halaman utama (Home)
│   ├── globals.css         # Styles global
│   └── components/
│       ├── DashboardGrid.jsx    # Grid layout untuk widget
│       ├── Header.jsx           # Header dengan greeting dan navigasi
│       ├── Sidebar.jsx          # Sidebar navigasi
│       ├── WidgetBox.jsx        # Komponen untuk menambah widget
│       ├── WidgetContext.jsx    # Context untuk state management widget
│       ├── TopProductChart.jsx  # Komponen grafik line chart
│       └── TopProductsTable.jsx # Tabel produk terlaris
```

## Dokumentasi Komponen

### 1. RootLayout (`layout.jsx`)
**Tujuan**: Layout dasar untuk seluruh aplikasi
**Props**: 
- `children` - Komponen child yang akan dirender

**Fitur**:
- Mengatur bahasa ke Bahasa Indonesia
- Menerapkan styling dasar dengan Tailwind CSS
- Background abu-abu dan antialiased text

```jsx
const RootLayout = ({ children }) => {
  return (
    <html lang="id">
      <body className="bg-gray-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
```

### 2. Home Page (`page.jsx`)
**Tujuan**: Halaman utama yang mengatur layout dashboard
**Dependencies**: 
- `WidgetProvider` - Context provider untuk widget
- `DashboardGrid` - Grid utama dashboard
- `Sidebar` - Navigasi sidebar
- `Header` - Header dengan greeting

**Layout**:
- Responsive design (mobile-first)
- Flex layout dengan sidebar dan main content
- Sidebar collapse di mobile (commented out)

### 3. DashboardGrid (`DashboardGrid.jsx`)
**Tujuan**: Mengelola grid layout untuk widget dengan 10 slot

**Konfigurasi Slot**:
```javascript
const slotsConfig = [
  { col: "col-span-12", h: "min-h-[7rem]" },                    // Slot 0: Full width
  { col: "col-span-12 sm:col-span-6 md:col-span-3", h: "..." }, // Slot 1-4: Quarter width
  { col: "col-span-12 lg:col-span-8 lg:row-span-2", h: "..." }, // Slot 5: Large chart area
  // ... slot lainnya
];
```

**Fitur**:
- Grid system 12 kolom responsive
- 10 slot widget yang dapat dikonfigurasi
- Setiap widget memiliki tombol close (X)
- Menampilkan WidgetBox untuk slot kosong

### 4. Header (`Header.jsx`)
**Tujuan**: Header dengan greeting personal dan navigasi
**Props**:
- `name` - Nama pengguna untuk greeting

**Fitur**:
- Greeting personal dengan nama
- Search button
- Notification bell dengan indicator
- Profile avatar dan info
- Responsive design

### 5. Sidebar (`Sidebar.jsx`)
**Tujuan**: Navigasi sidebar dengan menu utama

**Menu Items**:
- Dashboard (active)
- Manajemen Toko (dropdown)
- Laporan (dropdown)
- Booking
- Konsinyasi (dropdown)
- Print
- Pengaturan Biaya
- Logout

**Fitur**:
- Logo dan branding MKASIR
- Outlet selector dengan dropdown
- Hover effects dan active states
- Responsive design

### 6. WidgetBox (`WidgetBox.jsx`)
**Tujuan**: Komponen untuk menambahkan widget baru ke slot kosong
**Props**:
- `slotIndex` - Index slot untuk widget
- `heightClass` - Class CSS untuk tinggi container

**Widget yang Tersedia**:
1. **Total Pendapatan Hari ini** - Menampilkan omset harian
2. **Notifikasi** - Alert dan update bisnis
3. **Produk Terjual** - Jumlah produk terjual hari ini
4. **Peningkatan Penjualan** - Progress penjualan
5. **Peningkatan Pelanggan** - Jumlah pelanggan baru
6. **Alert Stock** - Peringatan stok menipis
7. **Top Product Grafik** - Grafik line chart (isChart: true)
8. **Top Products Table** - Tabel produk terlaris (isComponent: true)

**Fitur**:
- Modal popup untuk pemilihan widget
- Grid responsive untuk widget list
- Hover effects dan transitions

### 7. WidgetContext (`WidgetContext.jsx`)
**Tujuan**: State management untuk widget menggunakan Context API

**State**:
- `widgets` - Array 10 slot widget (default: null)

**Methods**:
- `setWidget(slotIndex, widget)` - Menambahkan widget ke slot
- `removeWidget(slotIndex)` - Menghapus widget dari slot

**Custom Hook**:
- `useWidgets()` - Hook untuk mengakses context

### 8. TopProductsChart (`TopProductChart.jsx`)
**Tujuan**: Grafik line chart untuk data penjualan bulanan

**Data**:
- Perbandingan 3 tahun (2020, 2021, 2022)
- Data bulanan (Jan-Dec)
- Rentang nilai 0-100

**Fitur Recharts**:
- ResponsiveContainer untuk responsive
- CartesianGrid dengan dash pattern
- Tooltip dengan styling custom
- Legend dengan ukuran font kecil
- 3 line dengan warna berbeda

### 9. TopProductsTable (`TopProductsTable.jsx`)
**Tujuan**: Tabel produk terlaris dengan informasi lengkap

**Data Struktur**:
```javascript
{
  name: 'Cafe Latte',      // Nama produk
  id: 'CLJ-1023',          // ID produk
  sales: 100,              // Jumlah penjualan
  price: 'Rp. 20.000',     // Harga
  stock: 150,              // Stok tersedia
  status: 'In Stock'       // Status stok
}
```

**Fitur**:
- Avatar placeholder untuk produk
- Status badge dengan color coding
- Hover effects pada rows
- Responsive table dengan scroll horizontal

## Styling dan Design System

### Color Palette
- **Primary Green**: `green-600`, `green-700` - Warna utama brand
- **Yellow Accent**: `yellow-600` - Aksen logo
- **Gray Scale**: `gray-100` sampai `gray-800` - Background dan text
- **Status Colors**: 
  - Blue: `blue-100`, `blue-700` - In Stock
  - Green: `green-100`, `green-700` - Low Stock
  - Red: `red-500` - Danger/Delete

### Responsive Breakpoints
- **Mobile**: Default (< 640px)
- **SM**: 640px+ - Small tablet
- **MD**: 768px+ - Tablet
- **LG**: 1024px+ - Desktop
- **XL**: 1280px+ - Large desktop

### Typography
- **Headings**: `text-lg`, `text-xl`, `text-2xl`
- **Body**: `text-sm`, `text-base`
- **Small**: `text-xs`
- **Weights**: `font-medium`, `font-semibold`, `font-bold`

## State Management

### Widget System
Aplikasi menggunakan Context API untuk mengelola state widget:

1. **WidgetProvider** membungkus komponen yang membutuhkan akses widget
2. **useWidgets hook** menyediakan akses ke state dan actions
3. **Widget state** berupa array 10 elemen untuk setiap slot
4. **Actions** untuk menambah dan menghapus widget

### Data Flow
```
User Click (+) → WidgetBox → Modal → Select Widget → setWidget() → Context Update → DashboardGrid Re-render
```

## Fitur Utama

### 1. Dashboard Grid System
- 10 slot widget yang dapat dikonfigurasi
- Responsive grid layout
- Drag-and-drop ready architecture

### 2. Dynamic Widgets
- 8 jenis widget yang tersedia
- Chart integration dengan Recharts
- Table component untuk data tabular
- Content widgets untuk informasi text

### 3. Responsive Design
- Mobile-first approach
- Sidebar collapse di mobile
- Responsive typography dan spacing
- Touch-friendly interface

### 4. Data Visualization
- Line chart untuk trend penjualan
- Table untuk data produk
- Status indicators dan badges

