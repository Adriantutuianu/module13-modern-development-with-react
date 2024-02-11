import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      Based on `currentPage`, render the appropriate component here.
    </>
  );
}

export default PortfolioContainer;
