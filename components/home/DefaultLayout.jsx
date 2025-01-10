import React from 'react'
import Development from '../Development';
import Footer from './Footer';
import NavbarPage from './NavbarPage';
import { ContactForm } from './ContactForm';
import { Testimonial } from './Testimonial';
import { SalesIq } from './SalesIq';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            {/* <Development /> */}
            <NavbarPage />
            {children}
            <ContactForm />
            <Testimonial />
            <Footer />
            <SalesIq />
        </div>
    );
};

export default DefaultLayout
