import React from 'react'
import Navbar1 from './Navbar1'

const Viewbook = () => {
    var booklist={
        "title":"wings of fire",
        "price":"120",
        "author":"APJ"
    }
  return (
    <div>
        <Navbar1/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">{booklist.title}</label>
                    <label for="" className="form-label">{booklist.price}</label>
                    <label for="" className="form-label">{booklist.author}</label>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewbook