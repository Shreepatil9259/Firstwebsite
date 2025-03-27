import IMG1 from '../images/82908640.cms.webp';
import IMG2 from '../images/29B30DEB-7758-44D8-97BD-F7ACAB88C8A0 copy.jpeg';

function Home() {
    return (
        <div className='App'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={IMG1} class="d-block w-100 h-10" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={IMG2} class="d-block w-100 h-10" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={require('../images/I2.image copy.webp')} class="d-block w-100 h-10" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
};

export default Home;