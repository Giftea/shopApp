import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/registerScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const { default: Footer } = require("./components/Footer");
const { default: Header } = require("./components/Header");

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <>
          {" "}
          <Container className="body">
            <Route path="/" component={HomeScreen} exact />
            <Route path="/search/:keyWord" component={HomeScreen} exact />
            <Route path="/page/:pageNumber" component={HomeScreen} />
            <Route
              path="/search/:keyWord/page/:pageNumber"
              component={HomeScreen}
            />
            <Route path="/profile" component={ProfileScreen} exact />
            <Route path="/register" component={RegisterScreen} exact />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route path="/admin/productlist" component={ProductListScreen}exact />
            <Route path="/admin/productlist/:pageNumber" component={ProductListScreen} exact />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route path="/admin/orderlist" component={OrderListScreen} />
          </Container>
        </>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
