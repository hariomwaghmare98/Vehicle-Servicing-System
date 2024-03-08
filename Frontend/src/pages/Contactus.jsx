import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap'; 
import '../style/contactus.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
 // Importing the CSS file

const Contactus = () => {
    return (
        <section id="team" class="team section-bg">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Contact Us</h2>
                <p className='teamp'>
                    Welcome to our vehicle serving system application. We are dedicated
                    to providing top-notch services for all your vehicle needs.
                </p>
                <p className='teamp'>
                    Our team of experts is committed to ensuring your vehicles run
                    smoothly and efficiently.
                </p>
                <p className='teamp'>
                    Feel free to contact us if you have any questions or inquiries
                    about our services.
                </p>
            </div>
        </div>

        
        {/* <!--
        <div class="row mt-5">
            Content for Cards
        </div>
        --> */}
    </div>
</section>

    );
};

export default Contactus;
