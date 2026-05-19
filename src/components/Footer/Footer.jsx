import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

// Importing standard icons from react-icons
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        
        {/* 1. Social Media Section */}
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>

        {/* 2. Contact Phone Number */}
        <p className={styles.contactText}>
          Questions? Call <a href="tel:1-800-892-0000">1-800-892-0000</a>
        </p>

        {/* 3. Links Grid (Using explicit, easy-to-read Link components) */}
        <div className={styles.linksGrid}>
          <div className={styles.linkColumn}>
            <Link to="/faq">FAQ</Link>
            <Link to="/investor-relations">Investor Relations</Link>
            <Link to="/ways-to-watch">Ways to Watch</Link>
            <Link to="/corporate-information">Corporate Information</Link>
          </div>

          <div className={styles.linkColumn}>
            <Link to="/help-center">Help Center</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>

          <div className={styles.linkColumn}>
            <Link to="/account">Account</Link>
            <Link to="/redeem-gift-cards">Redeem Gift Cards</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/speed-test">Speed Test</Link>
          </div>

          <div className={styles.linkColumn}>
            <Link to="/media-center">Media Center</Link>
            <Link to="/buy-gift-cards">Buy Gift Cards</Link>
            <Link to="/cookie-preferences">Cookie Preferences</Link>
            <Link to="/legal-notices">Legal Notices</Link>
          </div>
        </div>

        {/* 4. Language Selector Box */}
        <div className={styles.languageBox}>
          <MdLanguage className={styles.globeIcon} />
          <select>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>

        {/* 5. Copyright */}
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Netflix Clone.
        </p>

      </div>
    </footer>
  );
};

export default Footer;