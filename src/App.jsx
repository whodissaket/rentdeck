import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ShippingForm from "./pages/ShippingForm";

const App = () => {
  const user = useSelector((state) => state.userDetails);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path="/product">
          {<Product />}
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/cart/:id">
          <Cart />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/orderdetails">
          <Order />
        </Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/shipping">
          <ShippingForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
