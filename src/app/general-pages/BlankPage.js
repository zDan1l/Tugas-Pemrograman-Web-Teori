import React, { Component } from 'react'

export class BlankPage extends Component {
  render() {
    return (
      <div>
        {/* Page Header dengan Title dan Breadcrumb */}
        <div className="page-header">
          <h3 className="page-title">
            Blank Page
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Blank Page</li>
            </ol>
          </nav>
        </div>

        {/* Main Content dengan Card */}
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Main Content Area</h4>
                <p className="card-description">
                  Ini adalah area konten utama dari blank page. Anda dapat menambahkan konten apapun di sini.
                </p>
                <div className="template-demo">
                  {/* Konten tambahan bisa ditambahkan di sini */}
                  <p>Silakan tambahkan konten sesuai kebutuhan Anda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlankPage
