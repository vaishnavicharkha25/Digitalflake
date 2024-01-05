import React, { useState } from 'react';
import {IoCartSharp} from "react-icons/io5"
import {CgProfile, CgSearch} from "react-icons/cg"
import {FaBars} from "react-icons/fa"
import Image3 from "../../assets/image3.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';


export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div className='sticky-top'>
      
    <MDBNavbar expand='lg' style={{backgroundColor:"#662671"}}>
      <MDBContainer fluid>
        <div className='search2'>
        <MDBNavbarBrand href='#'><img style={{width:"150px"}} src={Image3}  alt="" />
          </MDBNavbarBrand></div><br />
        
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
         <FaBars/>
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-0' style={{justifyContent:"right"}}>
         
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle style={{color:"white"}} tag='a' className='nav-link' role='button'>
                <CgProfile style={{color:"white"}} />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>logout</MDBDropdownItem>
                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
           
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
}