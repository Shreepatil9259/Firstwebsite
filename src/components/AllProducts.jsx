import Card1 from '../images/82908640.cms.webp';
import Card2 from "../images/I2.image copy.webp"
import Card3 from '../images/29B30DEB-7758-44D8-97BD-F7ACAB88C8A0 copy.jpeg'
import Card4 from "../images/525E2FBF-4A8F-47D3-9B2C-29E30C5C40A9.jpeg"
import Card5 from "../images/75764DDE-C14A-4623-A4A4-286C49E2BDF3.jpeg"
import Card6 from "../images/D529D546-4306-44AA-AA39-53283DCF6167.jpeg"


function AllProducts() {
    return (
        <>
            <div className="container">
                <h1 className='mt-5 mb-3'>Servies</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={Card1} class="card-img-top" style={{height: "200px"}} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Highway</h5>
                                <p class="card-text">We make the best Highways.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={Card3} class="card-img-top" style={{height: "200px"}} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Road</h5>
                                <p class="card-text">We make the best Road.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={Card6} class="card-img-top" style={{height: "200px"}} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">We make the best Highways.</p>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row mt-4">
                <div className="col-lg-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={Card2} class="card-img-top" style={{height: "200px"}} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Building</h5>
                                <p class="card-text">We make the best Buliding.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={Card4} class="card-img-top" style={{height: "200px"}} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">We make the best Highways.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={Card5} class="card-img-top" style={{height: "200px"}} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">We make the best Highways.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AllProducts;