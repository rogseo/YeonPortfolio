import React, { useState } from 'react';
import Navbar from './Navbar';
import Resume from './pages/Resume';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
      }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='bg-gray md:sticky top-0 z-10'>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
