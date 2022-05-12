import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
            <h2 className='footer-title'>Connect on social media</h2>
            <div className='footer-socials'>
                <FaFacebook className='footer-social-icon' size={30} />
                <FaInstagram className='footer-social-icon' size={30} />
                <FaTwitter className='footer-social-icon' size={30} />
                <FaLinkedin className='footer-social-icon' size={30} />
            </div>
        </div>
    );
}