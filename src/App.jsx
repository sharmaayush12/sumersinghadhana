import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import MarketingAgencyPage from './components/Pages/MarketingAgencyPage';
import StudioAgencyPage from './components/Pages/StudioAgencyPage';
import DigitalAgencyPage from './components/Pages/DigitalAgencyPage';
import ServicePage from './components/Pages/ServicePage';
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import BlogListPage from './components/Pages/BlogListPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import TeamPage from './components/Pages/TeamPage';
import TeamDetailsPage from './components/Pages/TeamDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import Layout2 from './components/Layout/Layout2';
import TechStartupPage from './components/Pages/TechStartupPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import Shop from './components/Pages/Shop';
import ProductDetails from './components/Pages/Shop/ProductDetails';
import Cart from './components/Pages/Shop/Cart';
import Checkout from './components/Pages/Shop/Checkout';
import Success from './components/Pages/Shop/Success';
import Wishlist from './components/Pages/Shop/Wishlist';
import Layout3 from './components/Layout/Layout3';
import ErrorPage from './components/Pages/ErrorPage';
import Photos from './components/Custom/Photos'
import Videos from './components/Custom/Videos'
import Childhood from './components/Custom/Childhood'
import Education from './components/Custom/Education'
import Test from './components/Custom/test'
import Property from './components/Custom/Property'
import Portfolio from './components/Custom/Portfolio'
import Goldenvisa from './components/Custom/Goldenvisa'
import Mortgages from './components/Custom/Mortgages'
import Homeforsale from './components/Custom/Homeforsale'
import  Clientrelationship from './components/Custom/Clientrelationship'
import TeamDetailsPageAlisha from './components/Pages/TeamDetailsPageAlisha';
import Blog from './components/Custom/Blog';
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
  
      {/* Start Light Mode */}
      <Route path="/" element={<Layout />}>
        <Route path="marketing-agency" element={<MarketingAgencyPage />} />
        <Route path="/" element={<StudioAgencyPage />} />
        <Route path="digital-agency" element={<DigitalAgencyPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="Photos" element={<Photos/>}/>
        <Route path="Videos" element={<Videos/>}/>
        <Route path="Childhood" element={<Childhood/>}/>
        <Route path="Education" element={<Education/>}/>
        <Route path="Test" element={<Test/>}/>
        <Route path="Property" element={<Property/>}/>
        <Route path="Portfolio" element={<Portfolio/>}/>
        <Route path="Goldenvisa" element={<Goldenvisa/>}/>
        <Route path="Mortgages" element={<Mortgages/>}/>
        <Route path="Homeforsale" element={<Homeforsale/>}/>
        <Route path="Clientrelationship" element={<Clientrelationship/>}/>
        <Route path="Blog" element={<Blog/>}/>
        
        





        <Route
          path="service/:serviceDetailsId"
          element={<ServiceDetailsPage />}
        />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-list" element={<BlogListPage />} />
        <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route
          path="portfolio/:portfolioDetailsId"
          element={<PortfolioDetailsPage />}
        />
        <Route path="case-study-details" element={<CaseStudyDetailsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="team/:teamDetailsId" element={<TeamDetailsPage />} />
        <Route path="team/Details" element={<TeamDetailsPageAlisha />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="/light/" element={<Layout2 />}>
        <Route index element={<Home />} />
        <Route path="tech-startup" element={<TechStartupPage />} />
      </Route>
      <Route path="/light/" element={<Layout3 />}>
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:productId" element={<ProductDetails />} />
        <Route path="shop/cart" element={<Cart />} />
        <Route path="shop/checkout" element={<Checkout />} />
        <Route path="shop/success" element={<Success />} />
        <Route path="shop/wishlist" element={<Wishlist />} />
      </Route>
      {/* End Light Mode */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
