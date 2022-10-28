import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {CartProvider} from "react-use-cart";
import AuthService from "./services/auth.service";
import AddDrugComponent from "./components/AddDrugComponent";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import ListDrugsComponent from "./components/ListDrugsComponent";
import ListUsersComponent from "./components/ListUsersComponent";
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import Footer from "./components/footer"; 

import ListSuppliersComponent from "./components/ListSuppliersComponent";
import AddSupplierComponent from "./components/AddSupplierComponent";

import Homedrugs from "./components/homedrugs";
import Cart from "./components/Cart";
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        
      
      
      <div>
      
        <CartProvider>
        {/* <nav className="navbar navbar-expand navbar-light bg-info"> */}
        <nav className="navbar navbar-expand navbar-custom">
          <Link to={"/"} className="navbar-brand">
            MEDPLUS
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>


              <li className="nav-itemcart">
                <Link to={"/cart"} className="nav-link">
                  
                 {/* // <sup>{'3'}</sup> */}
                </Link>
              </li>


            </div>
          )}
        </nav>
        

        <div className="container mt-3">
        <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/home" element={<Homedrugs/>} /> 
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route path="/user" element={<BoardUser/>} />
            <Route path="/admin" element={<BoardAdmin/>} />
            <Route path="/cart" element={<Cart/>} />

            <Route  path = "/add-drug" element={<AddDrugComponent/>}/>
            <Route  path = "/edit-drug/:id" element={<AddDrugComponent/>}/>

            <Route  path = "/add-Supplier" element={<AddSupplierComponent/>}/>
            <Route  path = "/edit-Supplier/:id" element={<AddSupplierComponent/>}/>

            <Route  path = "/users" element={<ListUsersComponent/>}/>

            <Route  path = "/drugs" element={<ListDrugsComponent/>}/>


            <Route  path = "/Suppliers" element={<ListSuppliersComponent/>}/>

            
        

            
          </Routes>
        </div>
        <Footer></Footer>
   
     
        {/* <authVerify logOut={this.logOut}/>  */}
        </CartProvider>
        {/* <Sidemenu/> */}
        
      </div>
      
      </div>

      
    );
  }
}

export default App;


