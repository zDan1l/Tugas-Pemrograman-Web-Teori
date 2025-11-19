import React, { Component } from 'react'

/**
 * Page4 - Dashboard Statistik
 * Blank page dengan cards statistik
 */
export class Page4 extends Component {
  render() {
    return (
      <div>
        {/* Title & Breadcrumb */}
        <div className="page-header">
          <h3 className="page-title">Dashboard Statistik</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
          </nav>
        </div>

        {/* Statistik Cards */}
        <div className="row">
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card bg-gradient-primary text-white">
              <div className="card-body">
                <h4 className="font-weight-bold mb-0">250</h4>
                <p className="mb-0">Total Mahasiswa</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card bg-gradient-success text-white">
              <div className="card-body">
                <h4 className="font-weight-bold mb-0">45</h4>
                <p className="mb-0">Mahasiswa Baru</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card bg-gradient-warning text-white">
              <div className="card-body">
                <h4 className="font-weight-bold mb-0">12</h4>
                <p className="mb-0">Mahasiswa Cuti</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card bg-gradient-danger text-white">
              <div className="card-body">
                <h4 className="font-weight-bold mb-0">8</h4>
                <p className="mb-0">Mahasiswa DO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Mahasiswa Berdasarkan Prodi</h4>
                <p className="card-description">Distribusi mahasiswa per program studi</p>
                
                <div className="mt-4">
                  <div className="d-flex justify-content-between mb-2">
                    <p className="mb-0">Teknik Informatika</p>
                    <p className="mb-0">150 mahasiswa</p>
                  </div>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-primary" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  
                  <div className="d-flex justify-content-between mb-2">
                    <p className="mb-0">Sistem Informasi</p>
                    <p className="mb-0">100 mahasiswa</p>
                  </div>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-success" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Mahasiswa Berdasarkan Angkatan</h4>
                <p className="card-description">Jumlah mahasiswa per tahun angkatan</p>
                
                <div className="mt-4">
                  <div className="d-flex justify-content-between mb-2">
                    <p className="mb-0">Angkatan 2023</p>
                    <p className="mb-0">85 mahasiswa</p>
                  </div>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  
                  <div className="d-flex justify-content-between mb-2">
                    <p className="mb-0">Angkatan 2022</p>
                    <p className="mb-0">90 mahasiswa</p>
                  </div>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-warning" role="progressbar" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  
                  <div className="d-flex justify-content-between mb-2">
                    <p className="mb-0">Angkatan 2021</p>
                    <p className="mb-0">75 mahasiswa</p>
                  </div>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-danger" role="progressbar" style={{width: '45%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page4
