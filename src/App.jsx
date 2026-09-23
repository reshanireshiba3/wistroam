import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

import WebsiteDevelopment from './Pages/WebsiteDevelopment.jsx';
import EcommerceWebsites from './Pages/EcommerceWebsites.jsx';
import MobileAppDevelopment from './Pages/MobileAppDevelopment.jsx';
import WebApplications from './Pages/WebApplications.jsx';
import ApiDevelopment from './Pages/ApiDevelopment.jsx';
import BusinessAutomation from './Pages/BusinessAutomation.jsx';
import MaintenanceSupport from './Pages/MaintenanceSupport.jsx';


import AboutUs from './Pages/AboutUs';

import ContactUs from './Pages/ContactUs';

import ClientFeedback from "./Pages/ClientFeedback";

const HomePage = () => (
  <>
    <Home />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/ecommerce-websites" element={<EcommerceWebsites />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/web-applications" element={<WebApplications />} />
        <Route path="/api-development" element={<ApiDevelopment />} />
        <Route path="/business-automation" element={<BusinessAutomation />}/>
        <Route path="/maintenance-support"  element={<MaintenanceSupport />} />


        
        
        <Route path="/about-us" element={<AboutUs />} />
       
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/client-feedback" element={<ClientFeedback />} />
          

          
          
       

      </Routes>

      <Footer />
    </>
  );
};

export default App;