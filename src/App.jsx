import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeLayout from "./Layouts/HomeLayout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/AuthComponent/Login";
import Register from "./Pages/AuthComponent/Register";
import ResetPassword from "./Pages/AuthComponent/ResetPassword";
import About from "./Pages/About/About";
import Products from "./Products/Products";
import ProductsLayout from "./Layouts/ProductsLayout";
import ProductDetails from "./Products/ProductDetails/ProductDetails";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout></HomeLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/resetpassword" element={<ResetPassword></ResetPassword>}></Route>
          <Route path="about" element={<About></About>}></Route>
        </Route>
        <Route path="/products" element={<ProductsLayout></ProductsLayout>}>
          <Route index element={<Products></Products>}></Route>
          <Route path=":_id" element={<ProductDetails></ProductDetails>}></Route>
        </Route>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
