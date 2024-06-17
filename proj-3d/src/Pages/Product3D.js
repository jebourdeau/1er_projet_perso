import React from 'react';

const Product3D = () => {
    return (
        <div>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../assets/img/3d/socle.jpg" class="d-block w-100" alt="socleFrost"/>
                </div>
                <div class="carousel-item">
                <img src="../assets/img/3d/loup.jpg" class="d-block w-100" alt="loup"/>
                </div>
                <div class="carousel-item">
                <img src="../assets/img/3d/zavatti.jpg" class="d-block w-100" alt="zavattin"/>
                </div>
                 <div class="carousel-item">
                <img src="../assets/img/3d/3dXL.jpg" class="d-block w-100" alt="Frost"/>
                </div>
                 <div class="carousel-item">
                <img src="../assets/img/3d/scan3D.jpg" class="d-block w-100" alt="scanner"/>
                </div>
                 <div class="carousel-item">
                <img src="../assets/img/3d/sculpture.jpg" class="d-block w-100" alt="pointer"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default Product3D;