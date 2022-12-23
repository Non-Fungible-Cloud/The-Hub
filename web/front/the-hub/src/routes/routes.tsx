import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FaqPage from "src/pages/faq";

/* import { Loader } from "components/atoms"; */

import { LandingPage, MarketplacePage, MarketplaceItemPage, ProfilePage } from "../pages";

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          {/* <Loader /> */}
        </div>
      }
    >
      <main>
        <Router>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/items" element={<ProfilePage />} />
            <Route path='/faqs' element={<FaqPage/>} />
            {/* <Route path="/login" element={<LogInPage />} /> */}
            <Route
              path="/marketplace/:id"
              element={<MarketplaceItemPage />}
            /> 
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Router>
      </main>
    </Suspense>
  );
};

export default AppRoutes;