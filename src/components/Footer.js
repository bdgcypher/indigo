import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Sign up for our newsletter to receive updates and great deals
                </p>
                <p className="footer-subscription-text">Unsubscribe at any time</p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" type="email" name="email" placeholder="Email" />
                        <btn buttonStyle="btn--outline">Subscribe</btn>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <a to='#/sign-up'>How it works</a>
                        <a to='#/sign-up'>Testimonials</a>
                        <a to='#/sign-up'>Careers</a>
                        <a to='#/sign-up'>Investors</a>
                        <a to='#/sign-up'>Terms of Service</a>
                    </div>
                    <div className="footer-link-items">
                        <h2>Discover</h2>
                        <a to='#/sign-up'>Products</a>
                        <a to='#/sign-up'>Deals</a>
                        <a to='#/sign-up'>Seasonal Specials</a>
                        <a to='#/sign-up'>Payment Options</a>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <a to='#/sign-up'>Contact</a>
                        <a to='#/sign-up'>Support</a>
                        <a to='#/sign-up'>Sponsorships</a>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <a to='#/sign-up'>Facebook</a>
                        <a to='#/sign-up'>Instagram</a>
                        <a to='#/sign-up'>Youtube</a>
                        <a to='#/sign-up'>Twitter</a>
                        <a to='#/sign-up'>LinkedIn</a>
                    </div>
                </div>
            </div>
            <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a href='#top' className='social-logo'>
              INDIGO
            </a>
          </div>
          <small class='website-rights'>INDIGO © {new Date().getFullYear()}</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              to='#'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              to='#'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              to='#'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              to='#'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              to='#'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Footer
