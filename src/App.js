import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Rewards from "./pages/Rewards/Rewards";
import Order from "./pages/Order/Order";
import OrderPlaced from "./pages/OrderPlaced/OrderPlaced";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Rewards} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/order/placed" component={OrderPlaced} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
