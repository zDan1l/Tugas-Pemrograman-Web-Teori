import React, { Component } from 'react'

export class Page2 extends Component {
  render() {
    return (
      <div>
        {/* Title & Breadcrumb */}
        <div className="page-header">
          <h3 className="page-title">Blank Page 2</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Beranda</a></li>
              <li className="breadcrumb-item active" aria-current="page">Blank Page 2</li>
            </ol>
          </nav>
        </div>

        {/* Main Content Card */}
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Konten Blank Page 2</h4>
                <p className="card-description">Ini adalah area konten utama dari blank page kedua.</p>
                <p>Halaman ini menampilkan layout dasar dengan title, breadcrumb, dan card untuk konten.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page2
