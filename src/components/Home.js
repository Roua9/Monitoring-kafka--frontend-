import React from "react"
import "../pages/topics.css"
function Home() {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Welcome</h1>
              </div>
              {/* /.col */}

              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info ">
                  <div className="inner colorOne">
                    <h3>150</h3>
                    <p>Topics</p>
                  </div>
                  <div className="icon ">
                    <i className="ion ion-bag " />
                  </div>

                  <p className="colorOneInfo">
                    More info <i className="fas fa-arrow-circle-right" />
                  </p>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner colorTwo">
                    <h3>
                      {/*  53<sup style={{ fontSize: 20 }}>%</sup>*/}
                      53
                    </h3>
                    <p>Producer</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <p className="colorTwoInfo">
                    More info <i className="fas fa-arrow-circle-right" />
                  </p>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner colorThree">
                    <h3>44</h3>
                    <p>Consumer</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <p className="colorThreeInfo">
                    More info <i className="fas fa-arrow-circle-right" />
                  </p>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner colorFour">
                    <h3>65</h3>
                    <p>messages</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <p className="colorFourInfo">
                    More info <i className="fas fa-arrow-circle-right" />
                  </p>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <section className="col-lg-7 connectedSortable">
                {/* Custom tabs (Charts with tabs)*/}
                <div className="card"></div>

                {/* /.card */}
              </section>
              {/* /.Left col */}
              {/* right col (We are only adding the ID to make the widgets sortable)*/}

              {/* right col */}
            </div>
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  )
}

export default Home
