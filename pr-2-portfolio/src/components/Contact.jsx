import React from "react";

function Contact() {
    return (
        <section id="contact" className="contact-section py-5">
            <div className="container">

                <div className="text-center mb-4">
                    <h2 className="fw-bold">Contact Us</h2>
                    <p>Have questions about your favourite car?</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-7">

                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Email"
                                />
                            </div>

                            <div className="mb-3">
                                <textarea className="form-control" rows="4" placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button type="button" className="btn btn-warning w-100">
                                Send Message
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;