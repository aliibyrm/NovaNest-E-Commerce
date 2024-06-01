import "./App.css";
import AuthPage from "./Pages/AuthPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import CartPage from "./Pages/Cart.Page";
import ContactPage from "./Pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ShopPage from "./Pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import UserPage from "./Pages/Admin/UserPage";
import CategoryPage from "./Pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./Pages/Admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./Pages/Admin/Categories/CreateCategoryPage";
import CreateProductPage from "./Pages/Admin/Products/CreateProductPage";
import ProductPage from "./Pages/Admin/Products/ProductPage";
import UpdateProductPage from "./Pages/Admin/Products/UpdateProductPage";
import CouponPage from "./Pages/Admin/Coupons/CouponPage";
import CreateCouponPage from "./Pages/Admin/Coupons/CreateCouponPage";
import UpdateCouponPage from "./Pages/Admin/Coupons/UpdateCouponPage";
import Success from "./Pages/Success";
import OrderPage from "./Pages/Admin/OrderPage";
import DashboardPage from "./Pages/Admin/DashboardPage";
import CategoriesDetail from "./components/Categories/CategoriesDetail";
import Comment from "./Pages/Admin/Comment";
import ProfilePage from "./components/Auth/ProfilePage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="categories/:categoryId/product/:id" element={<ProductDetailsPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/categories/:categoryId" element={<CategoriesDetail />} />
        <Route path="/admin/*">
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />  
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="comment" element={<Comment />} />

      </Route>
      </Routes>
    </>
  );
}

export default App;
