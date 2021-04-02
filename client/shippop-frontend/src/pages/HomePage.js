import React from 'react'
import '../styles/style.css'

const HomePage = (props) => {

    return (
        <>
            <div class = 'container'>

                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                        <a class="navbar-brand" href="#"><h1>Book</h1></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link space-left font-nav-item" aria-current="page" href="#"><span class = "black-color">สินค้าใหม่</span></a>
                            </li>
                            <li class="nav-item space-item-left">
                                <a class="nav-link font-nav-item" href="#"><span class = "black-color">สินค้าขายดี</span></a>
                            </li>
                            <li class="nav-item space-item-left">
                                <a class="nav-link font-nav-item" href="#"><span class = "black-color">สินค้าลดราคา</span></a>
                            </li>
                            <li class="nav-item space-item-left">
                                <a class="nav-link font-nav-item" href="#"><span class = "black-color">สินค้าแนะนำ</span></a>
                            </li>
                            </ul>
                            <form class="d-flex">
                                <img src='../images/loupe.png' class="d-block size-of-icon" alt="search-icon" />
                                <img src="../images/shopping-cart.png" class="d-block size-of-icon-search" alt="cart-shopping-icon" />

                                <div class = 'rounded-circle'>
                                    <img src="../assets/images/profile-user.png" class="d-block size-of-icon-profile" alt="dummy-user" />
                                </div>
                            </form>
                        </div>
                        </div>
                    </nav>
                </div>

                <div>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/images/dummy_space.jpg" class="d-block w-100 container-image-height" alt="dummy-space-image" />
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/dummy_space.jpg" class="d-block w-100 container-image-height" alt="dummy-space-image" />
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/dummy_space.jpg" class="d-block w-100 container-image-height" alt="dummy-space-image" />
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div class = 'space-top'>
                    <h3>สินค้าขายดี</h3>
                    <div class = "d-flex flex-row">
                        <div class="card space-right" style={{width: '18rem'}}>
                            <img src="../images/dummy_space.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">อวกาศและดวงดาว</h5>
                            <p class="card-text">THB499.00</p>
                            </div>
                        </div>
                        <div class="card space-right" style={{width: '18rem'}}>
                            <img src="../images/dummy_space.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">อวกาศและดวงดาว</h5>
                            <p class="card-text">THB499.00</p>
                            </div>
                        </div>
                        <div class="card space-right" style={{width: '18rem'}}>
                            <img src="../images/dummy_space.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">อวกาศและดวงดาว</h5>
                            <p class="card-text">THB499.00</p>
                            </div>
                        </div>
                        <div class="card space-right" style={{width: '18rem'}}>
                            <img src="../images/dummy_space.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">อวกาศและดวงดาว</h5>
                            <p class="card-text">THB499.00</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class = 'space-top '>
                    <h3>สินค้าขายดี</h3>
                    <div class = "d-flex flex-row">
                        <div class="card space-right" style={{width: '18rem'}}>
                            <img src="../images/dummy_space.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">อวกาศและดวงดาว</h5>
                            <p class="card-text">THB499.00</p>
                            </div>
                        </div>
                        <div class="card space-right" style={{width: '18rem'}}>
                            <img src="../images/dummy_space.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">อวกาศและดวงดาว</h5>
                            <p class="card-text">THB499.00</p>
                            </div>
                        </div>
                        <div class="card space-right" style={{width: '18rem'}}>
                            <img src="../images/dummy_space.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">อวกาศและดวงดาว</h5>
                            <p class="card-text">THB499.00</p>
                            </div>
                        </div>
                        <div class="card space-right" style={{width: '18rem'}}>
                            <img src="../images/dummy_space.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">อวกาศและดวงดาว</h5>
                            <p class="card-text">THB499.00</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage