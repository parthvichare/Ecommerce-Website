import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Courosel from './components/Home/Courosel';
import MarqueScroll from './components/Home/MarqueScroll';
import VarietyItems from './components/Home/VarietyItems';
import CallToAction from './components/Home/CallToAction';
import NewArrival from './components/Home/NewArrival';
import BestSeller from './components/Home/BestSeller';
import Footer from './components/Footer';
import NewArrivalPage from './components/Pages/NewArrivalPage'; // Import the New Arrival Page
import Dresses from './components/Pages/DressesPage';
import SalePage from './components/Pages/SalesPage';
import ProductDetails from './components/Product/ProductDetail'
import Cart from './components/Cart/Cart';
import HappyCustomer from './components/HappyCustomer';
import WishList from './components/WishList/WishList';
import SearchResults from './components/Search/SearchResults';


function App() {

  return (
      <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/new_arrival" element={<NewArrivalPage />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/sale" element={<SalePage />} />

        {/* Product Details based on Product Id */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Search Reuslts Filtering */}
        <Route path="/search" element={<SearchResults />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/HappyCustomer" element={<HappyCustomer />} />
        <Route path="/Wishlist" element={<WishList />} />

        <Route
          path="/"
          element={
            <div className="min-h-screen"> 
              <Courosel />
              <MarqueScroll />
              <VarietyItems />
              <CallToAction />
              <NewArrival />
              <BestSeller />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
