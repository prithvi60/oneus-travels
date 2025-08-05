import React from 'react'
import Footer from './Footer';
import NavbarPage from './NavbarPage';
import { ContactForm } from './ContactForm';
import { Testimonial } from './Testimonial';
import { SalesIq } from './SalesIq';
import { ContactFormComponent } from './ContactFormComponent';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            {/* <Development /> */}
            <NavbarPage />
            {children}
            <ContactFormComponent />
            <Testimonial />
            <Footer />
            <SalesIq />
        </div>
    );
};

export default DefaultLayout
