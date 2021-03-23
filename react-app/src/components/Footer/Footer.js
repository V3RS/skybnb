import React from 'react'
import './Footer.css'

function Footer() {
    return(
        <div className='footer__container'>
            <div className='footer__organizer'>
                <div className='about__container'>
                    <h5>ABOUT</h5>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                    <p>HotelTonight</p>
                    <p>Airbnb for Work</p>
                    <p>Made possible by Hosts</p>
                    <p>Olympics</p>
                    <p>Careers</p>
                    <p>Founders' Letter</p>
                </div>
                <div className='community__container'>
                    <h5>COMMUNITY</h5>
                    <p>Diversity & Belonging</p>
                    <p>Against Discrimination</p>
                    <p>Accessibility</p>
                    <p>Airbnb Associates</p>
                    <p>Frontline Stays</p>
                    <p>Guest Referrals</p>
                    <p>Gift cards</p>
                    <p>Airbnb.org</p>
                </div>
                <div className='host__container'>
                    <h5>HOST</h5>
                    <p>Host your home</p>
                    <p>Host an Online Experience</p>
                    <p>Host an Experience</p>
                    <p>Responsible hosting</p>
                    <p>Refer hosts</p>
                    <p>Resource Center</p>
                    <p>Community Center</p>
                </div>
                <div className='support__container'>
                    <h5>SUPPORT</h5>
                    <p>Our COVID-19 Response</p>
                    <p>Help Center</p>
                    <p>Cancellation options</p>
                    <p>Neighborhood Support</p>
                    <p>Trust & Safety</p>
                </div>
            </div>
        </div>
    )
}

export default Footer