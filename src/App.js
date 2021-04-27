import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import Book from './components/Dashboard/Book/Book';
import FeedBack from './components/Dashboard/FeedBack/FeedBack';
import Admin from './components/Dashboard/Admin/Admin';
import OrderList from './components/Dashboard/OrderList/OrderList';
import ManageService from './components/Dashboard/ManageService/ManageService';
import MyService from './components/Dashboard/MyService/MyService';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/book">
            <Book></Book>
          </Route>
          {/* <PrivateRoute path="/book/:name">
              <MyService></MyService>
          </PrivateRoute> */}
          <Route path="/feedback">
            <FeedBack></FeedBack>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/manage"> 
            <ManageService></ManageService>
          </Route>
          <PrivateRoute path="/service/:name">
            <MyService></MyService>
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
