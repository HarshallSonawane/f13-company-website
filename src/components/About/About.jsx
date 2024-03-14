import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg';

export default function About() {
    // Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
    <section id="about">
        <div class="container">
            <div className="title_headling">
                <h3>We Deliver expertise you can trust!</h3>
                <p>Not about our management, or beanbags, about who we really are</p>
                <h3>Our Values</h3>
            </div>
            
            <div className="about_box_wrapper">
            
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Customer First</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan sit accusa.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Integrity</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan sit accusa.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Passion</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan sit accusa.</p>
                    </div>
                </div>
            </div>

            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about" className="about_main"/>
                    </div>
                    <div className="img_info__box">
                        <h6 className="img_info__title">GET A PRICE QUOTE TODAY!</h6>
                        <p>Nemo enim ipsam oluptatem quia oluptas <br/>sit aspernatur aut odit aut fugit.</p>
                        <a href="/">{faPhoneIcon} <span>+91 11 47528795</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>Our Consultants Understand your Industry</h3>
                    <p>We leverage our expertise across multiple industries and business to drive business . We are known for our agile , our client , the value we generate, and even how fun it is to work with us!</p>

                    <div className="grid_info">
                        <div className="icon">{faUserClockIcon}</div>
                        
                        <div className="detail">
                            <h4>Education and Non Profit</h4>
                            <p>Streamline technologies to your vision. F13 helps transform the vision of non-profits into reality by having the right people, processes & technologies in place</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Life Sciences and HealthCare</h4>
                            <p>Nurture holistic health to new heights. The era of 'patient- centricity' has been ushered in by the rise of 'digital health', the explosion of patient health data and increased collaboration among all the industry stakeholders - providers, caregivers, insurers, life sciences & medical device organizations. </p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
