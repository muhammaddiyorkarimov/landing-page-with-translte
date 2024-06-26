import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './RootLayout.css';
import { useLanguage } from './../components/LanguageProvider/LanguageProvider';
import { useTranslation } from 'react-i18next';
import logo from '../images/logo.svg'

function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='root-layout'>
      <header>
        <div className="container">
          <Link className="logo" to="/"><h2><span style={{color: 'orange'}}>Tech</span>craft</h2></Link>
          <div className="header-right"></div>
          <nav className={`navbar ${sidebarOpen ? 'open' : ''}`}>
            <div style={{ position: 'absolute', right: '20px' }} className="hamburger-menu" onClick={toggleSidebar}>
              <span className={sidebarOpen ? 'bar open' : 'bar'}></span>
              <span className={sidebarOpen ? 'bar open' : 'bar'}></span>
              <span className={sidebarOpen ? 'bar open' : 'bar'}></span>
            </div>
            <li><ScrollLink className='active' to="home" smooth={true} duration={500}>{t('home')}</ScrollLink></li>
            <li><ScrollLink to="about-us" smooth={true} duration={500}>{t('aboutUs')}</ScrollLink></li>
            <li><ScrollLink to="partners" smooth={true} duration={500}>{t('partners')}</ScrollLink></li>
            <li><ScrollLink to="services" smooth={true} duration={500}>{t('services')}</ScrollLink></li>
            <li><ScrollLink to="our-teams" smooth={true} duration={500}>{t('ourTeam')}</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>{t('contact')}</ScrollLink></li>
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+998+998901602221">+998 90 160 22 21</a>
            </div>
          </nav>
          <div className="select-language">
            <span className={language === 'uz' ? 'active' : ''} onClick={() => toggleLanguage('uz')}>Uz</span>
            <span className={language === 'ru' ? 'active' : ''} onClick={() => toggleLanguage('ru')}>Ru</span>
          </div>
          <div className="hamburger-menu" onClick={toggleSidebar}>
            <span className={sidebarOpen ? 'bar open' : 'bar'}></span>
            <span className={sidebarOpen ? 'bar open' : 'bar'}></span>
            <span className={sidebarOpen ? 'bar open' : 'bar'}></span>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='container'>
        <div style={{ padding: '50px' }} className="contact-card">
          <div className="contact-info">
            <h2>{t('contact')}</h2>
            <p><i className="fa fa-phone"></i>+998 90 160 22 21</p>
            <p><i className="fa fa-envelope"></i>example@gmail.com</p>
            <h3>{t('socialMedia')}</h3>
            <div className="social-media">
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
            <p><i className="fa fa-map-marker"></i> {t('address')}</p>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59915.49844840892!2d69.20407624303485!3d41.31115128493007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4e71171a0e5%3A0x7d64b1d6d5e1c0f4!2z0J3QsNGI0LrQtdC90LjRhtC60LDRjywg0KLQvtC00LDQvQ!5e0!3m2!1suz!2s!4v1688476828371!5m2!1suz!2s"
              
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;
