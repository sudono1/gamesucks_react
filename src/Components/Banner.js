import React from 'react';

const Banner = () => {
    return (
        <div className="home-banner">
            <div className="row">
                <div id="carouselExampleIndicators" className="carousel slide col-12" data-ride="carousel">
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="carouse-image d-block w-100" src="https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="carouse-image d-block w-100" src="https://i.gadgets360cdn.com/large/pokemon-lets-go_1536566637980.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="carouse-image d-block w-100" src="https://cdn.vox-cdn.com/thumbor/BLtg5c_iByTVS4kXiHAeIBhxuBU=/0x0:1280x720/1200x800/filters:focal(621x191:825x395)/cdn.vox-cdn.com/uploads/chorus_image/image/62301115/Switch_MarioKart8Deluxe_gameplay_04.0.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Banner;