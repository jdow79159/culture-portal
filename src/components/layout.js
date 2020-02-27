import React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation/navigation"
import AOS from 'aos'

const Layout = ({ children, location }) => {
  if (window) {
    AOS.init();
  }
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header className="bg-primary">
        <div className="container-fluid">
          <Navigation location={location}/>
        </div>
      </header>
      <div className="container-fluid d-flex flex-column flex-grow-1">
        <main className="flex-grow-1">{children}</main>
      </div>
        <footer className="bg-primary mt-5">
          <div className="container-fluid">
            <div className="text-center p-4">
              © Songbirds Team {new Date().getFullYear()}
            </div>
          </div>
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
