import React, {useState} from "react";
import "./App.css";
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";

import NewOrderPage from "./pages/NewOrderPage";
import OrderPage from "./pages/OrderPage";
import ManagerPage from "./pages/ManagerPage";

function App() {

const [orders, setOrders] = useState([]);

  return (
    <BrowserRouter>
      <NavLink to="/">Home</NavLink>

      <Switch>
        <Route exact path="/" render={() => <ManagerPage
            orders={orders}
            setOrders={setOrders}
        />} />
        <Route exact path="/new" render={() => <NewOrderPage/>} />
        <Route exact path="/order/:orderId" render={() => <OrderPage
            setOrders={setOrders}
        />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
