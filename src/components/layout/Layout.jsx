import React from "react"
import Header from "../Header"
import SideNav from "../SideNav"

import Router from "../../router/Router"
const Layout = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <Router />
    </div>
  )
}

export default Layout
