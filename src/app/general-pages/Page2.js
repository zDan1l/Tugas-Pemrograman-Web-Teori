import React, { Component } from 'react'

/**
 * Page2 - Form Input Data
 * Blank page dengan form
 */
export class Page2 extends Component {
  render() {
    return (
      <div>
        {/* Title & Breadcrumb */}
        <div className="page-header">
          <h3 className="page-title">Form Input Data</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Form Input</li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Form Pendaftaran</h4>
                <p className="card-description">Silakan lengkapi data di bawah ini</p>
                
                <form className="forms-sample">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="namaLengkap">Nama Lengkap</label>
                        <input type="text" className="form-control" id="namaLengkap" placeholder="Masukkan nama lengkap" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="email@example.com" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="telepon">No. Telepon</label>
                        <input type="tel" className="form-control" id="telepon" placeholder="08xx-xxxx-xxxx" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="jenisKelamin">Jenis Kelamin</label>
                        <select className="form-control" id="jenisKelamin">
                          <option>Pilih Jenis Kelamin</option>
                          <option>Laki-laki</option>
                          <option>Perempuan</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="alamat">Alamat</label>
                    <textarea className="form-control" id="alamat" rows="4" placeholder="Masukkan alamat lengkap"></textarea>
                  </div>
                  
                  <div className="form-check mb-3">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Saya setuju dengan syarat dan ketentuan yang berlaku
                    </label>
                  </div>
                  
                  <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                  <button type="reset" className="btn btn-light">Reset</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page2
