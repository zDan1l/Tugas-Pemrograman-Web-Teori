# Dokumentasi Blank Page - Tugas Pemrograman Web

## Deskripsi
Halaman blank page yang dibuat sesuai ketentuan tugas dengan menggunakan template Purple React.

## Ketentuan Tugas yang Dipenuhi

### 1. Layout Dasar (Blank Page)
- ✓ Menggunakan template Purple React
- ✓ Struktur layout yang bersih dan rapi

### 2. Komponen Halaman Minimal

#### a. Title Halaman
Terdapat di bagian `page-header`:
```jsx
<h3 className="page-title">
  Halaman Tugas Saya
</h3>
```

#### b. Breadcrumb
Navigasi breadcrumb yang menunjukkan posisi halaman:
```jsx
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item">Home</li>
    <li className="breadcrumb-item">General Pages</li>
    <li className="breadcrumb-item active">My Blank Page</li>
  </ol>
</nav>
```

#### c. Card untuk Konten
Main content dibungkus dengan komponen Card yang memiliki border:
```jsx
<div className="card">
  <div className="card-body">
    <h4 className="card-title">Konten Utama</h4>
    <p className="card-description">...</p>
    {/* Konten di sini */}
  </div>
</div>
```

## File yang Dibuat/Dimodifikasi

1. **MyBlankPage.js** (Baru)
   - Path: `src/app/general-pages/MyBlankPage.js`
   - Deskripsi: Halaman blank page utama untuk tugas
   - Komponen: Title, Breadcrumb, Card untuk konten

2. **BlankPage.js** (Dimodifikasi)
   - Path: `src/app/general-pages/BlankPage.js`
   - Deskripsi: Update halaman blank page template dengan struktur lengkap

3. **AppRoutes.js** (Dimodifikasi)
   - Path: `src/app/AppRoutes.js`
   - Penambahan: Route `/general-pages/my-blank-page`

4. **Sidebar.js** (Dimodifikasi)
   - Path: `src/app/shared/Sidebar.js`
   - Penambahan: Menu "My Blank Page" di sidebar

5. **package.json** (Dimodifikasi)
   - Penggantian: `node-sass` → `sass` untuk kompatibilitas Node.js v22

## Aset CSS & JS yang Digunakan

### CSS (Minimal yang Diperlukan)
Semua CSS sudah include di template Purple React, yang digunakan untuk blank page:

1. **Bootstrap CSS** (Grid System & Components)
   - `.container`, `.row`, `.col-*`
   - `.card`, `.card-body`, `.card-title`, `.card-description`
   - `.breadcrumb`

2. **Purple Template CSS**
   - `.page-header` - untuk header halaman
   - `.page-title` - untuk title
   - `.grid-margin`, `.stretch-card` - untuk spacing
   - Custom styling template

### JS (Minimal yang Digunakan)
1. **React** (v16.9.0) - Core framework
2. **React Router DOM** - untuk routing/navigasi
3. **React-i18next** - untuk internationalization (breadcrumb menggunakan Trans)
4. **Bootstrap JS** - untuk komponen interaktif (jika diperlukan)

## Cara Mengakses Halaman

### 1. Melalui URL
Akses langsung melalui browser:
```
http://localhost:3000/general-pages/my-blank-page
```

### 2. Melalui Menu Sidebar
1. Klik menu **"General Pages"** di sidebar
2. Pilih **"My Blank Page"**

## Cara Menjalankan Aplikasi

### Prerequisites
- Node.js v22 atau lebih tinggi
- npm atau yarn

### Instalasi
```bash
cd "D:/kuliah/semester-3/pemrograman web/master/Purple-React-master/template/demo_1"
npm install
```

### Menjalankan Development Server
```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

Aplikasi akan berjalan di: `http://localhost:3000`

## Struktur Halaman MyBlankPage

```
MyBlankPage
│
├── Page Header
│   ├── Title: "Halaman Tugas Saya"
│   └── Breadcrumb: Home → General Pages → My Blank Page
│
├── Main Content (Card 1)
│   ├── Card Title
│   ├── Card Description
│   └── Content Area
│
└── Additional Cards (Opsional)
    ├── Card Tambahan 1
    └── Card Tambahan 2
```

## Customisasi

Anda dapat melakukan customisasi pada halaman dengan:

1. **Mengubah Title**
   - Edit bagian `<h3 className="page-title">`

2. **Menambah/Mengurangi Breadcrumb**
   - Tambah/hapus `<li className="breadcrumb-item">` di dalam `<ol className="breadcrumb">`

3. **Menambah Konten di Card**
   - Tambahkan komponen di dalam `<div className="card-body">`

4. **Menambah Card Baru**
   - Copy struktur card yang ada dan paste di bawahnya
   - Sesuaikan grid column (col-12, col-md-6, dll) untuk layout responsif

## Contoh Penambahan Konten

### Menambah Form
```jsx
<div className="card">
  <div className="card-body">
    <h4 className="card-title">Form Input</h4>
    <form>
      <div className="form-group">
        <label>Nama</label>
        <input type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
</div>
```

### Menambah Tabel
```jsx
<div className="card">
  <div className="card-body">
    <h4 className="card-title">Data Table</h4>
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Data 1</td>
            <td><label className="badge badge-success">Active</label></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```

## Komponen Bootstrap yang Tersedia

Template Purple React sudah include Bootstrap, sehingga Anda bisa menggunakan:

- **Layout**: Grid System, Containers
- **Components**: Buttons, Cards, Forms, Tables, Badges, Alerts, Modals
- **Utilities**: Spacing, Colors, Borders, Typography

Dokumentasi Bootstrap: https://getbootstrap.com/docs/4.3/

## Troubleshooting

### Error: "npm run dev" not found
**Solusi**: Gunakan `npm start` bukan `npm run dev`

### Error: node-sass tidak kompatibel
**Solusi**: Sudah diganti dengan `sass` di package.json

### Error: OpenSSL unsupported
**Solusi**: Jalankan dengan `NODE_OPTIONS=--openssl-legacy-provider npm start`

### Halaman tidak muncul di menu
**Solusi**: Pastikan route sudah ditambahkan di `AppRoutes.js` dan menu di `Sidebar.js`

## Kesimpulan

Halaman blank page ini sudah memenuhi semua ketentuan tugas:
- ✓ Layout dasar menggunakan template Purple React
- ✓ Title halaman
- ✓ Breadcrumb navigation
- ✓ Card dengan border untuk main content
- ✓ Menggunakan aset CSS & JS minimal yang diperlukan (dari template)

Anda dapat mengembangkan halaman ini lebih lanjut sesuai kebutuhan proyek Anda.
