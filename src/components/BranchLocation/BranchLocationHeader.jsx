import React from 'react'
import { Link } from 'react-router-dom'
import { urlHomeRoute } from '../../Service/UrlService'

const BranchLocationHeader = () => {
  return (
    <div class="columns-container">
        <div id="columns" class="container">
          <div class="breadcrumb clearfix">
            <Link class="home" title="Return to Home" to={urlHomeRoute()}>
              Home
            </Link>
            <span class="navigation-pipe"> </span>
            <a href>Branch Location</a>
          </div>
        </div>
      </div>
  )
}

export default BranchLocationHeader