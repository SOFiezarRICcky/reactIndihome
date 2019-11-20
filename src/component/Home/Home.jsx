import React, { Component } from 'react';
class Home extends Component {
    render() {
        return (
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                        <img src={require('../../gambar/slider1.jpg')} alt="Responsive image" className="img-fluid rounded slide" />
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-danger danger" role="alert">
                                <p className="text-white text-center">A simple Success alert-check it out</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end slider */}
                <div className="container slide">
                    <div className="row">
                        <div className="col-md-8">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={require('../../gambar/slider1.jpg')} className="img-fluid d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require('../../gambar/slider2.jpg')} className="img-fluid d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require('../../gambar/slider3.jpg')} className="img-fluid d-block w-100" />
                                    </div>
                                    <a href="#carouselExampleIndicators" role="button" className="carousel-control-prev" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a href="#carouselExampleIndicators" role="button" className="carousel-control-next" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid rounded slide" src={require('../../gambar/mini-banner-1-raw.png')} alt="Responsive image" />
                            <img className="img-fluid rounded slide" src={require('../../gambar/desktop.jpg')} alt="Responsive image" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;