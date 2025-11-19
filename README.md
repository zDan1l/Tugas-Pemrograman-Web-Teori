# Purple React - Proyek Tugas Pemrograman Web

Proyek ini adalah template React admin dashboard yang telah disesuaikan untuk tugas pemrograman web. Template menggunakan Purple React Free dari BootstrapDash dengan 3 halaman blank page sederhana.

## Fitur Utama

- 3 halaman blank page dengan struktur lengkap (Title, Breadcrumb, Card)
- Sidebar navigasi yang clean dan sederhana
- Responsive design menggunakan Bootstrap 4
- Routing menggunakan React Router

## Instalasi dan Menjalankan Proyek

### Prasyarat
- Node.js v12 atau lebih tinggi (sudah ditest dengan Node.js v22.15.0)
- npm (Node Package Manager)
- Git

### Langkah-langkah Instalasi

1. **Clone repository dari GitHub**
   ```bash
   git clone https://github.com/zDan1l/Tugas-Pemrograman-Web-Teori.git
   cd Tugas-Pemrograman-Web-Teori
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm start
   ```

4. **Buka browser**
   
   Aplikasi akan otomatis terbuka di browser pada alamat:
   - Local: http://localhost:3000/
   - Network: http://192.168.x.x:3000/

### Troubleshooting

#### Error: "error:0308010C:digital envelope routines::unsupported"

Jika Anda menggunakan Node.js versi 17 atau lebih tinggi dan mendapat error ini, jangan khawatir! Script `npm start` sudah dikonfigurasi dengan flag OpenSSL legacy provider:

```json
"scripts": {
  "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start"
}
```

Error ini terjadi karena versi terbaru Node.js menggunakan OpenSSL v3 yang tidak kompatibel dengan webpack 4.x yang digunakan react-scripts 3.x. Solusinya sudah diterapkan di `package.json`.

#### Deprecation Warnings

Warnings deprecation dari Sass dan Bootstrap adalah normal dan tidak mempengaruhi jalannya aplikasi. Ini hanya peringatan untuk versi mendatang.

## Struktur Proyek

```
demo_1/
├── public/              # File statis
│   ├── index.html       # HTML template utama
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── App.js              # Komponen utama aplikasi
│   │   ├── AppRoutes.js        # Konfigurasi routing
│   │   ├── general-pages/      # Folder halaman utama
│   │   │   ├── Page1.js        # Halaman Pertama
│   │   │   ├── Page2.js        # Halaman Kedua
│   │   │   └── Page3.js        # Halaman Ketiga
│   │   └── shared/             # Komponen yang digunakan bersama
│   │       ├── Navbar.js       # Navigation bar
│   │       ├── Sidebar.js      # Sidebar menu
│   │       ├── Footer.js       # Footer
│   │       └── Spinner.js      # Loading spinner
│   ├── assets/                 # File aset (gambar, styles)
│   ├── i18n.js                 # Konfigurasi internationalization
│   └── index.js                # Entry point aplikasi
├── package.json                # Konfigurasi npm dan dependencies
└── README.md                   # File ini
```

## Halaman yang Tersedia

Proyek ini memiliki 3 halaman blank page:

1. **Halaman Pertama** - http://localhost:3000/profil-mahasiswa
2. **Halaman Kedua** - http://localhost:3000/form-pendaftaran
3. **Halaman Ketiga** - http://localhost:3000/daftar-mahasiswa

Setiap halaman memiliki struktur yang sama:
- **Title halaman** di bagian atas
- **Breadcrumb** untuk navigasi (Beranda → Nama Halaman)
- **Card** untuk konten utama

## Cara Menambahkan Halaman Baru

Jika Anda ingin menambahkan halaman baru, ikuti langkah berikut:

### 1. Buat file komponen baru

Buat file baru di folder `src/app/general-pages/`, misalnya `Page4.js`:

```javascript
import React, { Component } from 'react';

export class Page4 extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">Halaman Keempat</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Beranda</li>
              <li className="breadcrumb-item active" aria-current="page">
                Halaman Keempat
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Konten Halaman Keempat</h4>
                <p>Ini adalah area konten utama untuk halaman keempat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page4;
```

### 2. Tambahkan route di AppRoutes.js

Buka file `src/app/AppRoutes.js` dan tambahkan:

```javascript
import Page4 from './general-pages/Page4';

// Di dalam <Switch>
<Route path="/halaman-keempat" component={ Page4 } />
```

### 3. Tambahkan menu di Sidebar.js

Buka file `src/app/shared/Sidebar.js` dan tambahkan menu item:

```javascript
<Collapse in={this.state.basicUiMenuOpen}>
  <ul className="nav flex-column sub-menu">
    {/* Menu yang sudah ada */}
    <li className="nav-item">
      <Link className="nav-link" to="/halaman-keempat">
        Halaman Keempat
      </Link>
    </li>
  </ul>
</Collapse>
```

### 4. Restart development server

Tekan `Ctrl + C` di terminal untuk menghentikan server, lalu jalankan `npm start` lagi.

## Teknologi yang Digunakan

- **React** 16.9.0 - Library JavaScript untuk membangun UI
- **React Router DOM** 5.0.1 - Routing untuk aplikasi React
- **Bootstrap** 4.3.1 - Framework CSS untuk responsive design
- **Sass** 1.50.0 - CSS preprocessor
- **React i18next** - Library untuk internationalization
- **Compass Mixins** - Mixin library untuk Sass

## Scripts yang Tersedia

Di direktori proyek, Anda dapat menjalankan:

### `npm start`

Menjalankan aplikasi dalam mode development.
Buka http://localhost:3000 untuk melihatnya di browser.

Halaman akan otomatis reload jika Anda membuat perubahan pada code.

### `npm test`

Menjalankan test runner dalam mode interactive watch.

### `npm run build`

Build aplikasi untuk production ke folder `build`.
Aplikasi akan di-optimize untuk performa terbaik.

### `npm run eject`

**Note: ini adalah operasi one-way. Setelah `eject`, Anda tidak bisa kembali!**

Jika Anda tidak puas dengan pilihan build tool dan konfigurasi, Anda bisa `eject` kapan saja.

## Catatan Penting

1. Proyek ini menggunakan `react-scripts` versi 3.1.1 yang menggunakan webpack 4.x
2. Untuk Node.js v17+, diperlukan flag `--openssl-legacy-provider` (sudah dikonfigurasi)
3. Deprecation warnings dari Sass dan Bootstrap tidak mempengaruhi fungsionalitas
4. Disarankan untuk tidak melakukan `npm run eject` kecuali benar-benar diperlukan

## Author

**zDan1l**
- GitHub: [@zDan1l](https://github.com/zDan1l)
- Repository: [Tugas-Pemrograman-Web-Teori](https://github.com/zDan1l/Tugas-Pemrograman-Web-Teori)

## Template Original

Proyek ini berbasis pada **Purple React Free** dari [BootstrapDash](https://www.bootstrapdash.com/)

## Lisensi

Template ini adalah versi gratis dari Purple React dan dapat digunakan untuk proyek pribadi dan komersial.

---

**Happy Coding! 🚀**
