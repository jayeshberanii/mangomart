import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/dashboard/HomePage";
import { Suspense } from "react";
import Spinner from "./components/Spinner";
import ProductsPage from "./pages/products/ProductsPage";
import MainLayout from "./layouts/MainLayout";
import Products from "./pages/products/Products";


function App() {
  console.log("hello");
  
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Home Route */}
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
