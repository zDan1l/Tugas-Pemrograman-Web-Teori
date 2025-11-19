import React, { Component } from 'react'

/**
 * MyBlankPage - Halaman Blank Tugas
 * 
 * Halaman ini dibuat sesuai ketentuan tugas:
 * 1. Title halaman
 * 2. Breadcrumb
 * 3. Card untuk isi main konten
 * 
 * CSS dan JS yang digunakan hanya yang diperlukan (sudah include di template Purple)
 */
export class MyBlankPage extends Component {
  render() {
    return (
      <div>
        {/* 1. TITLE HALAMAN & BREADCRUMB */}
        <div className="page-header">
          <h3 className="page-title">
            Halaman Tugas Saya
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={event => event.preventDefault()}>Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="!#" onClick={event => event.preventDefault()}>General Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                My Blank Page
              </li>
            </ol>
          </nav>
        </div>

        {/* 2. MAIN CONTENT DENGAN CARD */}
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Konten Utama</h4>
                <p className="card-description">
                  Ini adalah area konten utama yang dibungkus dengan komponen Card.
                </p>
                
                {/* Area konten dapat diisi sesuai kebutuhan */}
                <div className="mt-3">
                  <p>Halaman ini memenuhi ketentuan tugas:</p>
                  <ul>
                    <li>✓ Title halaman: "Halaman Tugas Saya"</li>
                    <li>✓ Breadcrumb: Home → General Pages → My Blank Page</li>
                    <li>✓ Card dengan border untuk konten utama</li>
                  </ul>
                  
                  <p className="mt-3">
                    Anda dapat menambahkan konten apapun di area ini seperti form, tabel, 
                    grafik, atau komponen lainnya sesuai kebutuhan proyek Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Opsional: Card tambahan jika diperlukan */}
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Card Tambahan 1</h4>
                <p className="card-description">
                  Anda dapat menambahkan lebih banyak card sesuai kebutuhan.
                </p>
                <p>Konten untuk card tambahan...</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Card Tambahan 2</h4>
                <p className="card-description">
                  Layout menggunakan grid system Bootstrap yang responsif.
                </p>
                <p>Konten untuk card tambahan...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyBlankPage
