import React from "react"
import "../pages/topics.css"
function SideNav() {
  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-custom-primary elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link">
          <span className="brand-text font-weight cl">Monitoring Kafka</span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-2 ">
            <ul
              className="nav nav-pills nav-sidebar flex-column "
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

              <li className="nav-item">
                <a href="/topics" className="nav-link">
                  <i className="fa fa-stream"></i>
                  <span className="nav-icon-space"> </span>
                  <p className="topic-color">Topics</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/sendMessage" className="nav-link">
                  <i className="far fa-envelope"></i>
                  <span className="nav-icon-space"> </span>
                  <p className="topic-color">Send Message</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/consumeMessage" className="nav-link">
                  <i className="bi bi-envelope-open"></i>
                  <span className="nav-icon-space"> </span>
                  <p className="topic-color">Consumer</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  )
}

export default SideNav
