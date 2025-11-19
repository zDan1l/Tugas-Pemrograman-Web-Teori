import React, { Component } from 'react'

/**
 * Page1 - Profil Mahasiswa
 * Blank page dengan konten profil
 */
export class Page1 extends Component {
  render() {
    return (
      <div>
        {/* Title & Breadcrumb */}
        <div className="page-header">
          <h3 className="page-title">Profil Mahasiswa</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Profil</li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <div className="row">
          <div className="col-lg-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Data Diri</h4>
                <p className="card-description">Informasi profil mahasiswa</p>
                
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td style={{width: '200px'}}><strong>Nama Lengkap</strong></td>
                        <td>: John Doe</td>
                      </tr>
                      <tr>
                        <td><strong>NIM</strong></td>
                        <td>: 12345678</td>
                      </tr>
                      <tr>
                        <td><strong>Program Studi</strong></td>
                        <td>: Teknik Informatika</td>
                      </tr>
                      <tr>
                        <td><strong>Angkatan</strong></td>
                        <td>: 2023</td>
                      </tr>
                      <tr>
                        <td><strong>Email</strong></td>
                        <td>: johndoe@university.ac.id</td>
                      </tr>
                      <tr>
                        <td><strong>No. Telepon</strong></td>
                        <td>: +62 812-3456-7890</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body text-center">
                <h4 className="card-title">Foto Profil</h4>
                <img 
                  src={require("../../assets/images/faces/face1.jpg")} 
                  alt="profile" 
                  className="img-fluid rounded mb-3"
                  style={{maxWidth: '200px'}}
                />
                <button className="btn btn-primary btn-sm">Edit Foto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page1
