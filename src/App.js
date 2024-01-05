import logo from './logo.svg';
import './App.css';
import { Login } from './components/login/Login';
import { Forget } from './components/signup/Forget';
import {Navbar} from './components/navbar/Navbar';
import { Homepage } from './components/homepage/Homepage';
import  { Category }  from './components/category/Category';

// import { Booking2 } from './Booking2';
// import { Booking3 } from './Booking3';
// import { BookingDetails } from './BookingDetails';
// import { BookingDetails1 } from './BookingDetails1';
// import { BookingDetails2 } from './BookingDetails2';
// import { BookingDetails3 } from './BookingDetails3';
// import { BookingDetails4 } from './BookingDetails4';
// import { BookingDetails5 } from './BookingDetails5';
// import { ProceedtoPay } from './ProceedtoPay';
// import { Successpage } from './Successpage';
// import { Part } from './Part';
// import  Footer  from './Footer';
// import { Cart } from './Cart';
// import { Order } from './Order';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Navigate,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       {/* <Booking/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Navbar/> */}
        {/* <Booking1/> */}
        {/* <Booking2/> */}
        {/* <Booking3/> */}
        {/* <BookingDetails/> */}
        {/* <BookingDetails1/> */}
        {/* <BookingDetails2/> */}
        {/* <BookingDetails3/> */}
        {/* <BookingDetails4/> */}
        {/* <BookingDetails5/> */}
        {/* <ProceedtoPay/> */}
        {/* <Successpage/> */}
        {/* <Part/> */}
        {/* <Cart/> */}
        {/* <Order/> */}
        {/* <Footer/> */}
        <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
       
          <Route exact path="/" element={<Login />} />
          <Route path="/forget" element={<Forget/>} />
          <Route path='/homepage' element={<Homepage/>}/>
           <Route path="/category" element={<Category/>} />
          {/*<Route path="/booking2" element={<Booking2/>} />
          <Route path="/booking3" element={<Booking3/>} />
          <Route path='/bookingdetails' element={<BookingDetails/>}/> 
          <Route path='/bookingdetails1' element={<BookingDetails1/>}/> 
          <Route path='/bookingdetails2' element={<BookingDetails2/>}/>
          <Route path='/bookingdetails3' element={<BookingDetails3/>}/>
          <Route path='/bookingdetails4' element={<BookingDetails4/>}/>
          <Route path='/bookingdetails5' element={<BookingDetails5/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/part" element={<Part/>} />
          <Route path="/proceedtopay" element={<ProceedtoPay/>} />
          <Route path="/successpage" element={<Successpage/>} /> */}

          
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
         
        </Routes>
      </Router>
    </>
         </div>
  );
}

export default App;
