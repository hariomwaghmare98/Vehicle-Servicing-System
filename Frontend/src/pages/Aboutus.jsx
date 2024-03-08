import React from 'react';
import '../style/aboutUs.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from "react-router-dom";


const Aboutus = () => {
  return (
   

<section id="team" className="team section-bg">
<div className="container" data-aos="fade-up">
    <div className="section-title">
    
        
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "6px" }} />
 
            <h2 style={{ margin: "0 10px", color :"Orange" }}>Care Zone </h2>
 
            <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "6px" }} />
        </div>
      

        <p></p>
        <p></p>
        <p className='teamp'>
           
           Welcome to Care Zone, your trusted companion in vehicle servicing and maintenance! At Care Zone, we strive to bridge the gap between vehicle owners and local service centers, making the process of booking appointments and managing automotive care easier and more convenient than ever before.
           
           Our mission is simple: to connect you with the best service centers in your city, ensuring that your vehicle receives top-notch care and attention from professionals you can trust. Whether you're due for routine maintenance, need repairs, or simply want to ensure your vehicle is in tiptop shape, Care Zone is here to help every step of the way.
           </p>
           <p className='teamp'>
           With Care Zone, booking an appointment is a breeze. Our intuitive platform allows you to select your preferred service center based on location, reputation, and the services they offer. Whether you have a specific center in mind or are open to exploring new options, we've got you covered. Gone are the days of endless phone calls and tedious scheduling – with Care Zone, you can book your appointment with just a few clicks, saving you time and hassle.
           
           What sets Care Zone apart is our commitment to transparency and quality. We carefully vet each service center in our network to ensure they meet our stringent standards for excellence. From skilled technicians to state-of-the-art facilities, we only partner with service centers that are dedicated to delivering exceptional results and customer satisfaction.
           
           But Care Zone isn't just for vehicle owners – it's also a platform for service centers to thrive. If you're a service center looking to expand your reach and attract more customers, Care Zone offers a unique opportunity to showcase your expertise and connect with local vehicle owners in need of your services. By joining our network, you'll gain access to a steady stream of customers and benefit from our marketing efforts to promote your business.
           </p>
           <p className='teamp'>
           At Care Zone, we're passionate about empowering both vehicle owners and service centers alike. Whether you're in need of automotive care or looking to grow your business, we're here to support you every step of the way. Join us today and experience the difference that Care Zone can make for you and your vehicle.
           
           Thank you for choosing Care Zone – where quality care meets unparalleled convenience. Let us take the stress out of vehicle servicing so you can get back to enjoying the road ahead.
           </p>
    </div>

    <br></br>
        <br></br>

        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "6px" }} />
 
            <h2 style={{ margin: "0 10px", color :"Orange" }}>Care Zone Team </h2>
 
            <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "6px" }} />
        </div>
        <br></br>
        <br></br>
    <div className="row">
        {/* Member 1 */}
        <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div className="member d-flex align-items-start">
                <div className="pic"><img src="#" className="img-fluid" alt="" /></div>
                <div className="member-info">
                    <h4>Mayur</h4>
                    <span>Member-1</span>
                    <p className='teamp'>Pursuing Post Graution Diploma In Advanced Computing</p>
                    <div className="social">
                        <Link to=""><i className="ri-twitter-fill"></i></Link>
                        <Link to=""><i className="ri-facebook-fill"></i></Link>
                        <Link to=""><i className="ri-instagram-fill"></i></Link>
                        <Link to=""><i className="ri-linkedin-box-fill"></i></Link>

                    </div>
                </div>
            </div>
        </div>
        {/* Member 2 */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="member d-flex align-items-start">
                <div className="pic"><img src="#" className="img-fluid" alt="" /></div>
                <div className="member-info">
                    <h4>Vishal</h4>
                    <span>Member-2</span>
                    <p className='teamp'>Pursuing Post Graution Diploma In Advanced Computing</p>
                    <div className="social">
                        <Link to=""><i className="ri-twitter-fill"></i></Link>
                        <Link to=""><i className="ri-facebook-fill"></i></Link>
                        <Link to=""><i className="ri-instagram-fill"></i></Link>
                        <Link to=""><i className="ri-linkedin-box-fill"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        {/* Member 3 */}
        <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="300">
            <div className="member d-flex align-items-start">
                <div className="pic"><img src="#" className="img-fluid" alt="" /></div>
                <div className="member-info">
                    <h4>Pratik</h4>
                    <span>Member-3</span>
                    <p className='teamp'>Pursuing Post Graution Diploma In Advanced Computing</p>
                    <div className="social">
                        <Link to=""><i className="ri-twitter-fill"></i></Link>
                        <Link to=""><i className="ri-facebook-fill"></i></Link>
                        <Link to=""><i className="ri-instagram-fill"></i></Link>
                        <Link to=""><i className="ri-linkedin-box-fill"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        {/* Member 4 */}
        <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="400">
            <div className="member d-flex align-items-start">
                <div className="pic"><img src="#" className="img-fluid" alt="" /></div>
                <div className="member-info">
                    <h4>Hariom</h4>
                    <span>Member-4</span>
                    <p className='teamp'>Pursuing Post Graution Diploma In Advanced Computing</p>
                    <div className="social">
                        <Link to=""><i className="ri-twitter-fill"></i></Link>
                        <Link to=""><i className="ri-facebook-fill"></i></Link>
                        <Link to=""><i className="ri-instagram-fill"></i></Link>
                        <Link to=""><i className="ri-linkedin-box-fill"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        {/* Member 5 */}
        <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="500">
            <div className="member d-flex align-items-start">
                <div className="pic"><img src="#" className="img-fluid" alt="" /></div>
                <div className="member-info">
                    <h4>Mrunali</h4>
                    <span>Member-5</span>
                    <p className='teamp'>Pursuing Post Graution Diploma In Advanced Computing</p>
                    <div className="social">
                        <Link to=""><i className="ri-twitter-fill"></i></Link>
                        <Link to=""><i className="ri-facebook-fill"></i></Link>
                        <Link to=""><i className="ri-instagram-fill"></i></Link>
                        <Link to=""><i className="ri-linkedin-box-fill"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    
  );
};

export default Aboutus;
