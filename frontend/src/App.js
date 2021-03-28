import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/registerScreen";
import ProfileScreen from "./screens/ProfileScreen";

const { default: Footer } = require("./components/Footer");
const { default: Header } = require("./components/Header");

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <>
          {" "}
          <Route path="/" component={HomeScreen} exact />
          <Container>
            <Route path="/profile" component={ProfileScreen} exact />
            <Route path="/register" component={RegisterScreen} exact />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </Container>
        </>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
