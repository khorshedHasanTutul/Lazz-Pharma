import React from 'react'
import { Link } from 'react-router-dom'
import { urlHomeRoute } from '../../../Service/UrlService'
import ProductModelCategoryWise from '../ProductModelCategoryWise'

const SubCategoryProduct = () => {
  return (
    <div id="body_content">
      <div class="columns-container">
        <div id="columns" class="container">
          <div class="breadcrumb clearfix">
            <Link class="home" title="Return to Home" to={urlHomeRoute()}>
              Home
            </Link>
            <span class="navigation-pipe"> </span>
            <a href>Product SubCategory</a>
          </div>
        </div>
      </div>
      <div class="result_container row">
        <div id="view-product-list" class="view-product-list">
          <ul class="row product-list grid">
            <li class="col-xs-6 col-sm-2 col-md-2">
             <ProductModelCategoryWise />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SubCategoryProduct