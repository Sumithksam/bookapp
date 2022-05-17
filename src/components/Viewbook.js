import React from 'react'
import Navbar1 from './Navbar1'

const Viewbook = () => {
    var booklist=[
        {
        "title":"wings of fire",
        "price":"120",
        "author":"APJ",
        "image":"https://www.teahub.io/photos/full/17-173844_hd-wallpapers-of-books.jpg"
        
    },
    {
        "title":"wings",
        "price":"170",
        "author":"BB",
        "image":"https://wallpaperaccess.com/full/124378.jpg"
       
    },
    {
        "title":"xyz",
        "price":"100",
        "author":"AA",
        "image":"https://hdwallpaperim.com/wp-content/uploads/2017/08/27/138631-macro-books-748x421.jpg"

    }
]
  return (
    <div>
        <Navbar1/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                    {booklist.map((value,key)=>{
return <div className='col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
    <div class="card" >
  <img src={value.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BOOK TITLE:{value.title}</h5>
    <p class="card-text">AUTHOR:{value.author}</p>
    <p class="card-text">PRICE:{value.price}</p>
    <a href="#" class="btn btn-primary">BUY NOW</a>
  </div>
</div>
</div>
                    })}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Viewbook