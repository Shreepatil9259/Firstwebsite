import { Link } from "react-router-dom";
import logo from '../images/Image_2-removebg-preview.png'


function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">
                        <Link to={"/"}>
                            <img style={{ width: "50px" }} src={logo} alt="logo" />
                        </Link>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to={"/"} class="nav-item">
                                <a class="nav-link active" aria-current="page">Home</a>
                            </Link>
                            <Link to={"/about"} class="nav-item">
                                <a class="nav-link">About</a>
                            </Link>
                            <Link to={"/allproducts"} class="nav-item">
                                <a class="nav-link">Services</a>
                            </Link>
                            <Link to={"/contact"} class="nav-item">
                                <a class="nav-link">Contact</a>
                            </Link>
                            {/* <Link to={"/counter"} class="nav-item">
                                <a class="nav-link">Counter</a>
                            </Link> */}
                            {/* <Link to={"/adminlogin"} class="nav-item">
                                <a class="nav-link">Admin Login</a>
                            </Link> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Header;