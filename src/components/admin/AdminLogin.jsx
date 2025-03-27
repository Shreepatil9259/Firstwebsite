import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (email === "vky@gmail.com" && password === "1234") {
            alert("Welcome vky");
            navigate("/products")
        } else {
            alert("Invalid Credential")
        }
    };

    return (
        <div>
            <section class="bg-light py-3 py-md-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div class="card border border-light-subtle rounded-3 shadow-sm">
                                <div class="card-body p-3 p-md-4 p-xl-5">
                                    <h1 class="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your account</h1>
                                    <form action="#!">
                                        <div class="row gy-2 overflow-hidden">
                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required />
                                                    <label for="email" class="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" name="password" id="password" placeholder="Password" required />
                                                    <label for="password" class="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid my-3">
                                                    <button onClick={handleSubmit} class="btn btn-primary btn-lg" type="submit">Log in</button>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <p class="m-0 text-secondary text-center">Don't have an account? <a href="#!" class="link-primary text-decoration-none">Sign up</a></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminLogin