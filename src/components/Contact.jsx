export default function Contact() {
    return (
        <>
            <div className="container">
                <div className="row">

                    {/* From  */}
                    <div className="col-lg-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Surname</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Mobile</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="col-lg-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.85609370780213!2d74.25310922903859!3d16.692014242364706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1003a82334eff%3A0xe5a531e2e092d8bb!2sM7R3%2BQ6C%2C%20Mandalik%20Park%2C%20Scheme%20No.4%2C%20Sanmitra%20Housing%20Society%2C%20Rajarampuri%2C%20Kolhapur%2C%20Maharashtra%20416008!5e0!3m2!1sen!2sin!4v1736237702029!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
};