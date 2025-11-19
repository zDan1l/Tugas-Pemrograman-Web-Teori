import React, { Component } from 'react'

/**
 * Page3 - Data Mahasiswa (Tabel)
 * Blank page dengan tabel data
 */
export class Page3 extends Component {
  render() {
    return (
      <div>
        {/* Title & Breadcrumb */}
        <div className="page-header">
          <h3 className="page-title">Data Mahasiswa</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Data Mahasiswa</li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Daftar Mahasiswa Aktif</h4>
                <p className="card-description">Data mahasiswa semester aktif</p>
                
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Prodi</th>
                        <th>Angkatan</th>
                        <th>Status</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>12345678</td>
                        <td>Ahmad Rizki</td>
                        <td>Teknik Informatika</td>
                        <td>2023</td>
                        <td><label className="badge badge-success">Aktif</label></td>
                        <td>
                          <button className="btn btn-sm btn-gradient-info">Detail</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>12345679</td>
                        <td>Siti Nur Aini</td>
                        <td>Sistem Informasi</td>
                        <td>2023</td>
                        <td><label className="badge badge-success">Aktif</label></td>
                        <td>
                          <button className="btn btn-sm btn-gradient-info">Detail</button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>12345680</td>
                        <td>Budi Santoso</td>
                        <td>Teknik Informatika</td>
                        <td>2022</td>
                        <td><label className="badge badge-warning">Cuti</label></td>
                        <td>
                          <button className="btn btn-sm btn-gradient-info">Detail</button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>12345681</td>
                        <td>Dewi Lestari</td>
                        <td>Sistem Informasi</td>
                        <td>2023</td>
                        <td><label className="badge badge-success">Aktif</label></td>
                        <td>
                          <button className="btn btn-sm btn-gradient-info">Detail</button>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>12345682</td>
                        <td>Eko Prasetyo</td>
                        <td>Teknik Informatika</td>
                        <td>2022</td>
                        <td><label className="badge badge-success">Aktif</label></td>
                        <td>
                          <button className="btn btn-sm btn-gradient-info">Detail</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page3
