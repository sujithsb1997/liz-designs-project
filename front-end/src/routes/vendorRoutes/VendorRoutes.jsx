import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequestPendingPage from '../../Components/VendorComponents/RequestPending';
import VendorSignIn from '../../pages/VendorPages/VendorSignInPage';
import VendorSignupPage from '../../pages/VendorPages/VendorSignupPage';
import VendorRequestPendingPage from '../../pages/VendorPages/VendorRequestPendingPage';
import VendorHomePage from '../../pages/VendorPages/VendorHomePage';
import VendorAddProductsPage from '../../pages/VendorPages/VendorAddProductsPage';
const VendorRoutes = () => {

    

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/vendorsignin" element={<VendorSignIn />} />
          <Route path="/vendor" element={<VendorSignIn />} />
          <Route path="/vendorsignup" element={<VendorSignupPage />} />
          <Route
            path="/vendorVerification"
            element={<VendorRequestPendingPage />}
          />
          <Route
            path="/vendorhome"
            element={<VendorHomePage />}
          />
          <Route
            path="/vendor/addproducts"
            element={<VendorAddProductsPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default VendorRoutes
