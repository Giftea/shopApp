import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
const { default: Footer } = require("./components/Footer");
const { default: Header } = require("./components/Header");

function App() {
  return (
    <Router>
   
        <Header />
        <main className="py-3">
          <Container>
            <Route path = '/' component ={HomeScreen} exact />
            <Route path = '/product/:id' component ={ProductScreen}  />
            <Route path = '/cart/:id?' component ={CartScreen}  />
          </Container>
        </main>
        <Footer />
     
    </Router>
  );
}

export default App;
